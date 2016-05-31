chrome.tabs.executeScript(null, {file: 'getTitle1.js'}, function (response) {
		var xhr = new XMLHttpRequest;
	  xhr.open("GET", "http://www.omdbapi.com/?t=" + response[0] + "&type=movie&tomatoes=true", true)
	  xhr.onreadystatechange = function() {
		  if (xhr.readyState == 4) {
		  	movie = JSON.parse(xhr.response)
		  	console.log(movie)
		   	var title = document.querySelector('#title')
		   	title.innerHTML =  movie.Title
		   	console.log(title)
		  }
		}
		xhr.send();
	});

var movie