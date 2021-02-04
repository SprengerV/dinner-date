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

			// set up displayCard()
			let movie = {
				imageSrc: `https://image.tmdb.org/t/p/w500${pick.poster_path}`,
				title: pick.title,
				summary: pick.overview,
				orientation: "horizontal"
			};

			// display movie
			window.displayCard($(".movieDisplay"), movie);
		});
	});

	window.displayCard = function (recipientCard, options) {
		let itemsDisplayed = false;

		let title = recipientCard.find("h2").hide();
		if (options.title) {
			title.text(options.title).show();
			itemsDisplayed = true;
		}

		let image = recipientCard.find("img").hide();
		if (options.imageSrc) {
			image.attr("src", options.imageSrc).show();
			itemsDisplayed = true;
		}

		let paragraph = recipientCard.find("p").hide();
		if (options.summary) {
			paragraph.html(options.summary).show();
			itemsDisplayed = true;
		}

		let anchor = recipientCard.find("a").hide();
		if (options.link) {
			anchor.attr("href", options.link).text("More details here.").click(() => {console.log('hello');}).show();
			itemsDisplayed = true;
		}

		if (options.orientation === "horizontal") {
			recipientCard.find(".card").addClass(options.orientation);
		} else {
			recipientCard.css("max-width", "500px").css("margin", "0 auto");
		}

		if (itemsDisplayed) {
			recipientCard.show();
		} else {
			recipientCard.hide();
		}
	}
});
