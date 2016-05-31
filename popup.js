chrome.tabs.executeScript(null, {file: 'getTitle1.js'}, function (response) {
		var xhr = new XMLHttpRequest;
	  xhr.open("GET", "http://www.omdbapi.com/?t=" + response[0] + "&type=movie&tomatoes=true", true)
	  xhr.onreadystatechange = function() {
		  if (xhr.readyState == 4) {
		  	movieResponse = JSON.parse(xhr.response)
		  	var movieDiv = generateMovie(movieResponse)
		  	document.querySelector("#Movie").appendChild(movieDiv)
		  }
		}
		xhr.send();
	});

function generateMovie (movie) {
	if (movie.Poster === "N/A") movie.Poster = 	"Flying_Film_Reel.jpg"

	var movieDiv = document.createElement('div')
	var posterDiv = document.createElement('div')
	var detailsDiv = document.createElement('div')
	var detailsList = document.createElement('ul')
	var titleLi = document.createElement('li')
	var ratingLi = document.createElement('li')
	var genreLi = document.createElement('li')
	var synopsisLi = document.createElement('li')
	var plotP = document.createElement('p')

	movieDiv.classList.add('movie')
	posterDiv.classList.add('poster')
	detailsDiv.classList.add('details')
	detailsList.classList.add('movieDetails')
	titleLi.classList.add('title')
	ratingLi.classList.add('rating')
	genreLi.classList.add('genre')
	synopsisLi.classList.add('synopsis')
	plotP.classList.add('plot')

	posterDiv.innerHTML= `<img src="${movie.Poster}">`
	titleLi.innerHTML = `<a target="_blanck" href="http://www.imdb.com/title/${movie.imdbID}">${movie.Title}</a>`
	ratingLi.innerHTML = '<strong>IMDB Rating:</strong> ' + movie.imdbRating
	genreLi.innerHTML = '<strong>Genre: </strong>' + movie.Genre
	synopsisLi.innerHTML = '<strong>Synopsis: ...</srtong>'
	plotP.innerHTML = movie.Plot

	movieDiv.appendChild(posterDiv)
	movieDiv.appendChild(detailsDiv)
	detailsDiv.appendChild(detailsList)
	detailsList.appendChild(titleLi)
	detailsList.appendChild(ratingLi)
	detailsList.appendChild(genreLi)
	detailsList.appendChild(synopsisLi)
	synopsisLi.appendChild(plotP)

	return movieDiv

}

