// function getSelectionText() {var text = "";if (window.getSelection) {text = window.getSelection().toString();} else if (document.selection && document.selection.type != "Control") {text = document.selection.createRange().text;}console.log("Sunday", text);return text}




chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {file: 'getTitle1.js'}, function (response) {
  	console.log("Monday", response)
  });
});