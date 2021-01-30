$(function () {
	// initilize materialize modules
	$('.chips').chips();
	$('select').formSelect();

	// prevent form submission when adding ingredient chip
	$('form .chips input').keydown(function (e) {
		if (e.keyCode == 13) {
			e.preventDefault();
			return false;
		}
	});

	// intolerance list to display in form
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
						.attr("name", inputID)
					)
					.append($("<span>")
						.text(allergy)
					)
				)
			);
	});

	// intolerance drop-down
	$("#intoleranceDropDown").on("click", function (e) {
		let command = $(this).children("span").text();
		switch (command) {
			case "hide":
				$("#intoleranceList").fadeOut();
				command = "show"
				break;
			default:
				$("#intoleranceList").fadeIn();
				command = "hide";
				break;
		}
		$(this).children("span").text(command);
	});
});