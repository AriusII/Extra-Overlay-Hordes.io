class Extension {

    settings = {
        "window_name": this.windowName
    }

    constructor(id, path, windowName) {
        this.id = id;
        this.path = path;
        this.windowName = windowName;
    }

    init(name) {
        this.initEvents();

        Object.assign(window[name][this.id], this.settings);
    }

    async getUI() {
        return await fetch(`https://raw.githubusercontent.com/AriusII/Extra-Overlay-Hordes.io/auto-loot/Extensions/${this.path}.html`)
            .then(res => res.text());
    }

    initEvents() {
    }
}