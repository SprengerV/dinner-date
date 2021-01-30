$(function () {

	// meal search submission
	$(".mealSearchForm").on("submit", function (e) {
		e.preventDefault()

		// prepare data object
		let dataObj = {
			ingredients: [],
			intolerances: []
		};

		// form jquery object
		let form = $(this);
		let formData = form.serializeArray();

		// access chips data
		let chipElement = form.children(".chips").eq(0)
		let chipInstance = M.Chips.getInstance(chipElement);

		// add chip data to dataObj
		chipInstance.chipsData.forEach((chip) => {
			dataObj.ingredients.push(chip.tag.toLowerCase());
		});

		// add intolerance data to dataObj
		formData.forEach(value => {
			// check value is and intolerance
			if (value.name[0] === "I") {
				dataObj.intolerances.push(value.name.slice(1).toLowerCase());
			}
		});

		// all form data is in dataObj now
		console.log(dataObj);
	});

});