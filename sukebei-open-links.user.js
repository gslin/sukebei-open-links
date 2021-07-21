// ==UserScript==
// @name        Sukebei Open Links
// @namespace   https://github.com/gslin/sukebei-open-links
// @match       https://sukebei.nyaa.si/view/*
// @grant       GM_openInTab
// @version     0.20210721.1
// @author      Gea-Suan Lin <gslin@gslin.com>
// @description Open links on sukebei.nyaa.si
// @license     MIT
// ==/UserScript==

(() => {
    'use strict';

    let desc = document.getElementById('torrent-description');
    if (!desc) {
        return;
    }

    let btn = document.createElement('button');
    btn.innerText = 'Open links';
    btn.style = 'font-size: 2em; margin: 16px;';
    btn.setAttribute('accesskey', 's');

    btn.addEventListener('click', () => {
        // Use reverse() to correct the order.
        for (let el of Array.from(desc.querySelectorAll('a')).reverse()) {
            let url = el.getAttribute('href');
            if (url.startsWith('https://sukebei.nyaa.si/')) {
                return;
            }

            GM_openInTab(url, true);
        }
    });

    // Insert the button.
    desc.insertAdjacentElement('beforebegin', btn);
})();
