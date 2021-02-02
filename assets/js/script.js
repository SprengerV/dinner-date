$(function () {

	// meal search submission
	$(".mealSearchForm").on("submit", function (e) {
		e.preventDefault()

		// prepare data object
		let dataObj = {
			ingredients: [],
			intolerances: [],
			diet: ""
		};

		// form jquery object
		let form = $(this);
		let formData = form.serializeArray();

		// access chips data
		let chipElement = form.find(".chips").eq(0)
		let chipInstance = M.Chips.getInstance(chipElement);

		// add chip data to dataObj
		chipInstance.chipsData.forEach((chip) => {
			dataObj.ingredients.push(chip.tag.toLowerCase());
		});

		// add intolerance data to dataObj
		formData.forEach(value => {
			// check if value is an intolerance
			if (value.name[0] === "I") {
				dataObj.intolerances.push(value.name.slice(1).toLowerCase());
			}
			// check if value is a diet
			if (value.name === "DDiet") {
				dataObj.diet = (value.value.toLowerCase());
			}
		});

		// all form data is in dataObj now
		console.log(dataObj);
	});

	// movie search submission
	$(".movieSearchForm").on("submit", function (e) {
		e.preventDefault()

		// form jquery object
		let form = $(this);
		let genreList = form.serializeArray();

		// all form data is in dataObj now
		console.log(genreList);

		// all genre checkboxes have 
		// a class of "genre" and an
		// attribute "data-genre" = [id]

		var genres = genreList.map(function(gen){
			return gen.value;
		}).join('|');
		if(genres.length > 0){
			genres = '&with_genres=' + genres;
		};
		const discover = 'https://api.themoviedb.org/3/discover/movie?api_key=f66fd70d918aed123c6a3b422a1934d8&include_adult=false&with_original_language=en' + genres;
		$.get(discover).then(function(response){
			console.log(response);
			// pick a random movie from the response list
			const rand = Math.floor(Math.random()*response.results.length);
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
		let movieArea = $(".movieDisplay").fadeIn();

		movieArea.find("h2").text(movieObj.name);

		movieArea.find("img").attr("src", movieObj.posterSrc);

		movieArea.find("p").text(movieObj.summary);
	}

});