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
// @require      https://arius.freeboxos.fr/JS/hordesjs/Extensions/Extension.js
// @require      https://arius.freeboxos.fr/JS/hordesjs/Extensions/Home/Home.js
// @require      https://arius.freeboxos.fr/JS/hordesjs/Core.js
// ==/UserScript==

/* global Core */

(function() {
    'use strict'
    new Core([
        //new AutoLoot()
    ]).init()
})()