// function getSelectionText() {var text = "";if (window.getSelection) {text = window.getSelection().toString();} else if (document.selection && document.selection.type != "Control") {text = document.selection.createRange().text;}console.log("Sunday", text);return text}




chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {file: 'getTitle1.js'}, function (response) {
  	var xhr = new XMLHttpRequest;
	  xhr.open("GET", "http://www.omdbapi.com/?t=" + response[0] + "&type=movie&tomatoes=true", true)
	  xhr.onreadystatechange = function() {
		  if (xhr.readyState == 4) {
		    console.log(xhr.response)
		  }
		}
		xhr.send();
  });
});