class Core {

    name = "arius"
    show_ui = false;
    is_loaded = false;

    constructor(extensions) {
        window[this.name] = {};
        this.extensions = extensions;
    }

    init() {
        document.write();
        fetch('https://hordes.io/play').then(d => d.text()).then(async html => {
            const element = html.match(/<script.*?client\.js.*?><\/script>/)[0];
            const url = element.match(/src="(.*?)"/)[1];
            html = html.replace(element, `<script>let _t=origin;delete origin;eval(_t)</script>`);
            let origin = await fetch(url).then(d => d.text());
            
            await Promise.resolve(this.loadExtensions());

            setInterval(() => {
                if (!this.is_loaded) {
                    this.createUI();
                }
            }, 1000);

            let world = origin.match(/([_a-zA-Z0-9]*?)\.entities\.array\.length;/)[1];
            let coder = origin.match(/\,([_a-zA-Z0-9]*?)=\{clientPlayerInput:\{/)[1];
            let ws = origin.match(/\(([_a-zA-Z0-9]*?)=new WebSocket/)[1];
            let send = origin.match(/([_a-zA-Z0-9]*?)=[_a-zA-Z0-9]*?=>\{void 0!==[_a-zA-Z0-9]*?&&1===[_a-zA-Z0-9]*?&&[_a-zA-Z0-9]*?\.send\(.*?\)\}/)[1];
            origin = origin.replace('this.player=t', `Object.assign(window.${this.name}, {world: ${world}, me:t, coder: ${coder}, ws: ${ws}, send: ${send} }), this.player=t`)
            window.origin = origin

            document.open().write(html);
            document.close();
        })
    }

    loadExtensions(name) {
        this.extensions.forEach(extension => {
            return Promise.resolve(extension.init(this.name));
        })
    }

    async createUI() {
        if (!document.querySelector(".l-corner-ur .btnbar #sysgem")) return;

        this.is_loaded = true;

        // Create Icon
        document.querySelector(".l-corner-ur .btnbar #sysgem")?.insertAdjacentHTML('afterend',
            `<div id="uiBtn" class="btn border black">
                <img class="svgicon" src="https://www.svgrepo.com/show/284868/unsecured-shield-hacker.svg">
            </div>`);
        document.querySelector("#uiBtn")?.addEventListener('click', e => this.toggleUI());

        let coreHtml = await fetch("https://raw.githubusercontent.com/AriusII/Extra-Overlay-Hordes.io/auto-loot/Core.html").then(res => res.text());
        document.querySelector(".l-ui.layout > .container:first-child").insertAdjacentHTML('beforeend', coreHtml);

        this.loadExtensionsMenu();
        document.getElementById("MenuFrame").innerHTML = new Home().getUI();
        this.loadExtensionsMenuEvents();

        document.querySelector('.CloseMain').addEventListener('click', () => this.toggleUI());
    }

    toggleUI() {
        this.ShowUI ^= 1;
        if (this.show_ui) {
            document.querySelector(".MainBody").style.display = "block";
        } else {
            document.querySelector(".MainBody").style.display = "none";
        }
    }

    loadExtensionsMenu() {
        this.extensions.forEach(extension => {
            document.getElementById("SubMenu").insertAdjacentHTML('beforeend', 
                `<div id=${extension.name} class="choice">${extension.windowName}</div>`);
        });
    }

    loadExtensionsMenuEvents() {
        this.extensions.forEach(extension => {
            document.getElementById(extension.id).addEventListener('click', () => {
                document.getElementById("MenuFrame").innerHTML = extension.getUI();
            });
        });
    }
}