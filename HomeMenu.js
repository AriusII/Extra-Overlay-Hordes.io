class HomeMenu {
    constructor() {
        this.name = "HomeMenu"
        this.windowname = "home"
    }

    Init_SubMenu() {
        this.SubMenu_Home()
    }

    Init_MainFrame() {
        this.name
        this.MenuFrame_Home()
    }

    Init_Window(origin) {
        this.WindowSettings(origin)
    }

    /**
     * It inserts a div with the id "SubMenuHome" and the class "choice" into the div with the id "SubMenu".
     */
    SubMenu_Home() {
        document.getElementById("SubMenu").insertAdjacentHTML('beforeend',
            `<div id=${this.name} class="choice">Home</div>`)
    }

    /**
     * It inserts HTML into a div with the ID "MenuFrame".
     */
    MenuFrame_Home() {
        document.getElementById("MenuFrame").insertAdjacentHTML('beforeend',
            `<div class="slot svelte-yjs4p5">
				<div class="card">
					<div class="svelte-cbx1m">
						<div>
							<h1 class="textprimary">Hordes.io <span class="textsub"> Extra Overlay</span></h1>
							<div class="textwhite"><img class="svgicon" src="/assets/ui/icons/gem.svg?v=5699699"> Created by AriusII</div>
							<div class="textwhite"><img class="svgicon" src="/assets/ui/icons/check.svg?v=5699699"> <span class="old svelte-cbx1m">Yes Ads</span> <span class="textsub">NO</span> Ads</div>
							<div class="textwhite"><img class="svgicon" src="/assets/ui/icons/check.svg?v=5699699"> Auto AFK</div>
							<div class="textwhite"><img class="svgicon" src="/assets/ui/icons/check.svg?v=5699699"> Auto Loot</div>
							<div class="textwhite"><img class="svgicon" src="/assets/ui/icons/check.svg?v=5699699"> Bot</div>
							<div class="textwhite"><img class="svgicon" src="/assets/ui/icons/check.svg?v=5699699"> Auto Selling</div>
							<div class="textgrey">+ more to come (TBA)</div>
						</div>
					</div><small class="textgrey">Readme</small>
					<p class="textgrey">Welcome to my Extra Overlay.</p>
				</div>
			</div>`)
    }

    Options() {
        const Settings = {
            "HomeMenu": {
                "Ads": false
            }
        }
        return Settings
    }

    WindowSettings(origin) {
        window[this.windowname] = this.Options()
        let world = origin.match(/([_a-zA-Z0-9]*?)\.entities\.array\.length;/)[1]
        let coder = origin.match(/\,([_a-zA-Z0-9]*?)=\{clientPlayerInput:\{/)[1]
        let ws = origin.match(/\(([_a-zA-Z0-9]*?)=new WebSocket/)[1]
        let send = origin.match(/([_a-zA-Z0-9]*?)=[_a-zA-Z0-9]*?=>\{void 0!==[_a-zA-Z0-9]*?&&1===[_a-zA-Z0-9]*?&&[_a-zA-Z0-9]*?\.send\(.*?\)\}/)[1]
        origin = origin.replace('this.player=t', `Object.assign(window. ${this.windowname}, {world: ${world}, me:t, coder: ${coder}, ws: ${ws}, send: ${send} }), this.player=t`)
        window.origin = origin
    }
}