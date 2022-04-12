// ==UserScript==
// @name         Hordes.io Extra Overlay
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  An extra overlay for Hordes.io, where you can add your own custom overlays(menus) and more. Thanks to read the code functions, some informations are mandatory.
// @author       AriusII - ╲⎝⧹ AriusII⧸⎠╱#4556  & Thanks xFuRiOuS#9356 for the help.
// @match        https://hordes.io/play
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hordes.io
// @grant        none
// @namespace    https://greasyfork.org/users/898675
// @license      MIT
// @run-at       document-start
// @require      https://raw.githubusercontent.com/AriusII/Extra-Overlay-Hordes.io/master/Core.js
// @require      https://raw.githubusercontent.com/AriusII/Extra-Overlay-Hordes.io/master/HomeMenu.js
// @require      https://raw.githubusercontent.com/AriusII/Extra-Overlay-Hordes.io/master/CustomMenu.js
// @require      file:///H:/Documents/GitHub/Extra-Overlay-Hordes.io/HomeMenu.js
// @require      file:///H:/Documents/GitHub/Extra-Overlay-Hordes.io/CustomMenu.js
// @require      file:///H:/Documents/GitHub/Extra-Overlay-Hordes.io/Core.js
// ==/UserScript==

(function() {
    'use strict'
/**
 * Thanks you to read the " HomeMenu.js " to understand how work the whole functions.
 * You need to // @require <my script url.js>
 * And call the class name with new <MyNewWindow>Menu(),. All of this is mandatory.
 * 
 * global HomeMenu, CustomMenu, Core
 * 
*/

    const addons = [
        new HomeMenu(),
        new CustomMenu()
    ]
    new Core(addons).Init()
})()