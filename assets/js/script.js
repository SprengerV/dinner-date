$(function () {

	// movie search submission
	$(".movieSearchForm").on("submit", function (e) {
		e.preventDefault()

		// form jquery object
		let form = $(this);
		let genreList = form.serializeArray();
		// all form data is in dataObj now

		// create genres query string from genreList
		var genres = genreList.map(function(gen){
			return gen.value;
		}).join('|');
		if (genres.length > 0) {
			genres = '&with_genres=' + genres;
		};
		// create query URL
		const discover = 'https://api.themoviedb.org/3/discover/movie?api_key=f66fd70d918aed123c6a3b422a1934d8&include_adult=false&with_original_language=en' + genres;
		$.get(discover).then(function(response){
			// pick a random movie from the response list
			const rand = Math.floor(Math.random() * response.results.length);
			const pick = response.results[rand];
			// set up displayMovie() with movieObj containing pertinent info
			let movie = {
				imageSrc: `https://image.tmdb.org/t/p/w500${pick.poster_path}`,
				title: pick.title,
				summary: pick.overview,
				orientation: "horizontal"
			};

			// display movie
			displayMovie(movie);
			// save movie
			saveMovie(movie);
		});
	});

	function displayMovie(movieObj) {
		let movieArea = $(".movieDisplay").fadeIn();

		movieArea.find("h2").text(movieObj.name);

		movieArea.find("img").attr("src", movieObj.posterSrc);

		movieArea.find("p").text(movieObj.summary);
	};

	function saveMovie(movieObj) {
		// pull saved movies from local storage
		let saved = JSON.parse(localStorage.getItem('savedMovies'));
		// if there are saved movies, add most recent search, if not, create an array containing it
		if(saved){
			saved.unshift(movieObj);
		}else{
			saved = [movieObj];
		};
		// save modified array to local storage
		localStorage.setItem('savedMovies',JSON.stringify(saved));
		// return saved movies obj for later use
		return saved;
	};

});
