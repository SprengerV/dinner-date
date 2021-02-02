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
	});

});