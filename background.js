console.log("backgound.js opened")
chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null, {file: 'getTitle1.js'}, function (response) {
		console.log("Monday night")

		
	});
})




