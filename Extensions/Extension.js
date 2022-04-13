class Extension {

    settings = {
    }

    constructor(id, path, windowName) {
        this.id = id;
        this.path = path;
        this.windowName = windowName;
    }

    init(name) {
        this.initEvents();

        window[name][this.id] = this.settings;
    }

    getUI() {
        return fetch(`https://raw.githubusercontent.com/AriusII/Extra-Overlay-Hordes.io/auto-loot/Extensions/${this.path}.html`)
            .then(res => res.text());
    }

    initEvents() {
    }
}