// ==UserScript==
// @name         REWORK OVERLAY
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  An extra overlay for Hordes.io, where you can add your own custom overlays(menus) and more.
// @author       AriusII - ╲⎝⧹ AriusII⧸⎠╱#4556  & Thanks xFuRiOuS#9356 for the help.
// @match        https://hordes.io/play
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hordes.io
// @grant        none
// @namespace    https://greasyfork.org/users/898675
// @license      MIT
// @run-at       document-start
// @require      file:///H:/Documents/GitHub/Extra-Overlay-Hordes.io/HomeMenu.js
// @require      file:///H:/Documents/GitHub/Extra-Overlay-Hordes.io/CustomMenu.js
// @require      file:///H:/Documents/GitHub/Extra-Overlay-Hordes.io/Core.js
// ==/UserScript==

/* global HomeMenu, CustomMenu, Core */

(function() {
    'use strict'
    const addons = [
        new HomeMenu(),
        new CustomMenu()
    ]
    new Core(addons).Init()
})()