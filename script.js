// ==UserScript==
// @name         TheYouMp3 Downloader
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       xingped
// @match        *.youtube.com/watch*
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

waitForKeyElements('#watch8-secondary-actions', addDownload);

function addDownload() {
    'use strict';
    
    // Your code here...
    var menu = document.getElementById('watch8-secondary-actions');
    
    var button = document.createElement('button');
    button.setAttribute('id', 'myDownloadButton');
    button.className = 'yt-uix-button yt-uix-button-size-default yt-uix-button-opacity';
    
    var text = document.createElement('span');
    text.textContent = 'Download';
    text.className = 'yt-uix-button-content';
    
    var form = document.createElement('form');
    form.setAttribute('id', 'myDownloadForm');
    form.setAttribute('method', 'POST');
    form.setAttribute('action', 'http://www.theyoump3.com/download.php');
    form.setAttribute('target', '_blank');
    
    var input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', 'url');
    input.setAttribute('value', document.URL);
    
    button.appendChild(text);
    form.appendChild(input);
    form.appendChild(button);
    
    menu.appendChild(button);
    menu.appendChild(form);
    
    document.getElementById('myDownloadButton').addEventListener('click', function() {
        document.getElementById('myDownloadForm').submit();
    });
}