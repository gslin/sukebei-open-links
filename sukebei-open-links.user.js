// ==UserScript==
// @name        Sukebei Open Links
// @namespace   https://github.com/gslin/sukebei-open-links
// @match       https://sukebei.nyaa.si/view/*
// @grant       GM_openInTab
// @version     0.20210822.0
// @author      Gea-Suan Lin <gslin@gslin.com>
// @description Open links on sukebei.nyaa.si
// @license     MIT
// ==/UserScript==

(() => {
    'use strict';

    let tick = setInterval(() => {
        if (0 === document.querySelectorAll('#torrent-description p').length) {
            return;
        }

        // Uninstall
        clearInterval(tick);

        // Use reverse() to correct the order.
        for (let el of Array.from(document.querySelectorAll('#torrent-description a')).reverse()) {
            let url = el.getAttribute('href');
            if (url.startsWith('https://sukebei.nyaa.si/')) {
                continue;
            }

            if (url.startsWith('http://imgblaze.net/')) {
                continue;
            }

            GM_openInTab(url, true);
        }
    }, 100);
})();
