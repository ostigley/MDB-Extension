chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(0, {file: 'getTitle1.js'}, function (response) {
  	console.log("Monday", response)
  });
});
