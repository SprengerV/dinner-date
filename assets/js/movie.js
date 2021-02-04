$(function () {

	populateMovieHistory($("#movieHistory"), getSavedMovies());

	// movie search submission
	$(".movieSearchForm").on("submit", function (e) {
		e.preventDefault();

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

			// set up populateCard()
			let movie = {
				imageSrc: `https://image.tmdb.org/t/p/w500${pick.poster_path}`,
				title: pick.title,
				summary: pick.overview,
				orientation: "horizontal"
			};

			let card = window.createCard($("#movieDisplay"))
			// display movie
			window.populateCard(card, movie);



			populateMovieHistory($("#movieHistory"),);
		});
	});

	function populateMovieHistory(container, data) {
		if (!Array.isArray(data)) return;
		let newData = [];
		data.forEach((item, index) => {
			newData.push({ imageSrc: item.imageSrc });
		});
		window.populateHistory(container, newData);
	}

	function saveMovie(movieObj) {
		let saved = JSON.parse(localStorage.getItem('savedMovies'));
		if (saved) {
			saved.unshift(movieObj);
		} else {
			saved = [movieObj];
		};
		// keep 6 saved
		while (saved.length > 6) {
			saved.pop();
		}
		localStorage.setItem('savedMovies', JSON.stringify(saved));
		return saved;
	};

	function getSavedMovies() {
		let saved = JSON.parse(localStorage.getItem('savedMovies'));
		return saved;
	};
});