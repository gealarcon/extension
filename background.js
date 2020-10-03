chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: 'black'}, function() {
    // console.log("chrome.storage",chrome.storage.sync.set)
    console.log('The color is black.');
  });
});

/******************* */
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.sendMessage(tab.id, {"a":"a"});
});

// chrome.runtime.onMessage.addListener(function(request, sender, callback) {
  // request contains the YOURMESSAGEPAYLOAD sent above as a Javascript object literal
// });
/******************** */