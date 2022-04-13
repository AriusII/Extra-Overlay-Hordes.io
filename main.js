// ==UserScript==
// @name         Extra Overlay Hordes.io Dev
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  An extra overlay for Hordes.io, where you can add your own custom overlays(menus) and more.
// @author       AriusII & xFuRiOuS#9356.
// @match        https://hordes.io/play
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hordes.io
// @grant        none
// @namespace    https://greasyfork.org/users/898675
// @license      MIT
// @run-at       document-start
// @require      https://raw.githubusercontent.com/AriusII/Extra-Overlay-Hordes.io/AriusDev/Extensions/Extension.js
// @require      https://raw.githubusercontent.com/AriusII/Extra-Overlay-Hordes.io/AriusDev/Extensions/Home/Home.js
// @require      https://raw.githubusercontent.com/AriusII/Extra-Overlay-Hordes.io/AriusDev/Core.js
// ==/UserScript==

/**
 * // @require      file:///H:/Documents/GitHub/Extra-Overlay-Hordes.io/Extensions/Extension.js
 * // @require      file:///H:/Documents/GitHub/Extra-Overlay-Hordes.io/Extensions/Home/Home.js
 * // @require      file:///H:/Documents/GitHub/Extra-Overlay-Hordes.io/Core.js
 * // @require      https://raw.githubusercontent.com/AriusII/Extra-Overlay-Hordes.io/master/Extensions/Extension.js
 * // @require      https://raw.githubusercontent.com/AriusII/Extra-Overlay-Hordes.io/master/Extensions/Home/Home.js
 * // @require      https://raw.githubusercontent.com/AriusII/Extra-Overlay-Hordes.io/master/Core.js
 */

/* global Core */

(function() {
    'use strict'
    new Core([
        //new AutoLoot()
    ]).init()
})()