class CustomMenu {
    constructor() {
        this.name = "CustomMenu"
        this.windowname = "custom"
    }

    Init_SubMenu() {
        this.SubMenu_Custom()
    }

    Init_MainFrame() {
        this.name
        this.MenuFrame_Custom()
    }

    Init_Window(origin) {
        this.WindowSettings(origin)
    }

    /**
     * It inserts a div with the id "SubMenuHome" and the class "choice" into the div with the id "SubMenu".
     */
    SubMenu_Custom() {
        document.getElementById("SubMenu").insertAdjacentHTML('beforeend',
            `<div id=${this.name} class="choice">Custom</div>`)
    }

    /**
     * It returns an object with a property called "CustomMenu" which has a property called "Ads" which has a value of false.
     * @returns The Settings object.
     */
    Options() {
        const Settings = {
            "CustomMenu": {
                "Menu": true,
            }
        }
        return Settings
    }

/**
 * It takes a string, and replaces a few parts of it with a few other parts.
 * 
 * The first part of the function is the WindowSettings function. This function takes a parameter,
 * which is the origin string.
 * 
 * The first line of the function is `window[this.windowname] = this.Options()`. This line creates a
 * new property on the window object, and sets it equal to the return value of the Options function.
 * 
 * The next line is `let world = origin.match(/([_a-zA-Z0-9]*?)\.entities\.array\.length;/)[1]`. This
 * line creates a new variable called world, and sets it equal to the first capture group of the regex.
 * The regex is `/([_a-zA-Z0-9]*?)\.entities\.array\.length;/`. This regex matches the variable name of
 * the world
 * @param origin - The original source code of the game.
 */
    WindowSettings(origin) {
        window[this.windowname] = this.Options()
        let world = origin.match(/([_a-zA-Z0-9]*?)\.entities\.array\.length;/)[1]
        let coder = origin.match(/\,([_a-zA-Z0-9]*?)=\{clientPlayerInput:\{/)[1]
        let ws = origin.match(/\(([_a-zA-Z0-9]*?)=new WebSocket/)[1]
        let send = origin.match(/([_a-zA-Z0-9]*?)=[_a-zA-Z0-9]*?=>\{void 0!==[_a-zA-Z0-9]*?&&1===[_a-zA-Z0-9]*?&&[_a-zA-Z0-9]*?\.send\(.*?\)\}/)[1]
        origin = origin.replace(`this.player=t`, `Object.assign(window. ${this.windowname}, {world: ${world}, me:t, coder: ${coder}, ws: ${ws}, send: ${send} }), this.player=t`)
        window.origin = origin
    }

    /**
     * It inserts HTML into a div with the ID "MenuFrame".
     */
    MenuFrame_Custom() {
        document.getElementById("MenuFrame").insertAdjacentHTML('beforeend',
            `<div class="settings svelte-ntyx09">
                <h3 class="textprimary">Extra CustomMenu</h3>
                    <div></div>
                    <div>Allow the Custom Menu ?</div>
                    <div id="cbCustom" class="btn checkbox"></div>
			</div>`)
            this.MenuFrame_Event()
    }

    MenuFrame_Event() {
        this.Checkbox_Custom()
    }

    /**
     * All of this is external code.
     */
    Checkbox_Custom() {
        let checkbox = document.getElementById("cbCustom")
        checkbox.addEventListener("click", () => {
            console.log("CLICKED")
            if (checkbox.classList.contains("active")) {
                checkbox.classList.remove("active")
                window[this.windowname].CustomMenu.Menu = false
            } else {
                checkbox.classList.add("active")
                window[this.windowname].CustomMenu.Menu = true
            }
        })
    }
}