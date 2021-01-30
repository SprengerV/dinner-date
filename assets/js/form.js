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

	let $intoleranceList = $("#intoleranceList");

	// populate intolerance list 
	intolerances.forEach(allergy => {
		let inputID = "I" + allergy;
		$intoleranceList
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

	let diets = [
		"No Restrictions",
		"Gluten Free",
		"Vegetarian",
		"Vegan",
		"Paleo"
	];

	let $dietList = $("#dietList");

	// populate diet list 
	diets.forEach(diet => {
		let inputID = "D" + diet;
		$dietList
			.append($("<p>")
				.addClass("col s12 m6 xl4")
				.append($("<label>")
					.attr("for", inputID)
					.append($("<input>")
						.attr("id", inputID)
						.attr("type", "radio")
						.attr("name", "DDiet")
						.attr("value", diet)
					)
					.append($("<span>")
						.text(diet)
					)
				)
			);
	});

	// intolerance drop-down
	$(".dropDownControl").on("click", function (e) {
		let element = $(this);
		let command = element.children("span").text();
		let dropDownAreaID = element.attr("data-controls");
		let dropDownArea = $(`#${dropDownAreaID}`);
		switch (command) {
			case "hide":
				dropDownArea.fadeOut();
				command = "show"
				break;
			default:
				dropDownArea.fadeIn();
				command = "hide";
				break;
		}
		$(this).children("span").text(command);
	});
});