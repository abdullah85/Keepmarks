// Copyright 2021 Google LLC
//
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file or at
// https://developers.google.com/open-source/licenses/bsd

// Show the demo page once the extension is installed
chrome.runtime.onInstalled.addListener((_reason) => {
  chrome.tabs.create({
    url: 'keepmarks.html',
    index: 0,
    pinned: true
  });
});

chrome.action.onClicked.addListener(() => {
  chrome.tabs.query({
    url: 'chrome-extension://*/keepmarks*',
    currentWindow: true
  }, (tabs) => {
    if (tabs.length == 0) {
      chrome.tabs.create({
        url: 'keepmarks.html',
        index: 0,
        pinned: true
      });
    } else {
      chrome.tabs.update(tabs[0].id, {
        highlighted: true
      });
    }
  });
});
