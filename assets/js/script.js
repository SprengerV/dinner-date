$(function () {
	$('.chips').chips();
	$('select').formSelect();

	// prevent form submission when adding ingredient chip
	$('form .chips input').keydown(function (e) {
		if (e.keyCode == 13) {
			e.preventDefault();
			return false;
		}
	});

	let intolerances = [
		"Dairy",
		"Egg",
		"Gluten",
		"Grain",
		"Peanut",
		"Seafood",
		"Sesame",
		"Shellfish",
		"Soy",
		"Sulfite",
		"Tree Nut",
		"Wheat"
	];

	let intoleranceArea = $(".intoleranceArea");

	// populate intolerance list 
	intolerances.forEach(allergy => {
		let inputID = "I" + allergy;
		intoleranceArea
			.append($("<p>")
				.addClass("col s12 m6 xl4")
				.append($("<label>")
					.attr("for", inputID)
					.append($("<input>")
						.attr("id", inputID)
						.attr("type", "checkbox")
					)
					.append($("<span>")
						.text(allergy)
					)
				)
			);
	});

});