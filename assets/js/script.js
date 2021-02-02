$(function () {

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
	});

});
