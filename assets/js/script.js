$(function () {

	// movie search submission
	$(".movieSearchForm").on("submit", function (e) {
		e.preventDefault()

		// form jquery object
		let form = $(this);
		let genreList = form.serializeArray();

		// all genre checkboxes have 
		// a class of "genre" and an
		// attribute "data-genre" = [id]

		var genres = genreList.map(function (gen) {
			return gen.value;
		}).join('|');
		if (genres.length > 0) {
			genres = '&with_genres=' + genres;
		};
		const discover = 'https://api.themoviedb.org/3/discover/movie?api_key=f66fd70d918aed123c6a3b422a1934d8&include_adult=false&with_original_language=en' + genres;
		$.get(discover).then(function (response) {
			// pick a random movie from the response list
			const rand = Math.floor(Math.random() * response.results.length);
			const pick = response.results[rand];

			// set up displayMovie()
			let movie = {
				posterSrc: "",
				name: "",
				summary: ""
			};
			movie.posterSrc = 'https://image.tmdb.org/t/p/w500' + pick.poster_path;
			movie.name = pick.title;
			movie.summary = pick.overview;
			// display movie
			displayMovie(movie);
		});
	});

	function displayMovie(movieObj) {
		let movieArea = $(".movieDisplay");

		movieArea.find("h2").text(movieObj.name);

		movieArea.find("img").attr("src", movieObj.posterSrc);

		movieArea.find("p").text(movieObj.summary);

		movieArea.fadeIn();
	}

});
