class Extension {

    settings = {
        "window_name": this.windowName
    }

    constructor(id, name, windowName) {
        this.id = id;
        this.name = name;
        this.windowName = windowName;
    }

    init(name) {
        this.initEvents();

        Object.assign(window[name][this.id], this.settings);
    }

    getUI() {
        //return new FileReader().readAsText(`${this.name}.html`);
        return new FileReader().readAsText(new File(
            [new Blob()], 
            `${this.name}.html`/*"file:///H:/Documents/GitHub/Extra-Overlay-Hordes.io/Core.html"*/)
        )
        
    }

    initEvents() {
    }
}