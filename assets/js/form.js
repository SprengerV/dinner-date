$(function () {
	// initilize materialize modules
	$('.chips').chips();
	$('select').formSelect();

	// input options
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

	let diets = [
		"Regular Diet",
		"Gluten Free",
		"Vegetarian",
		"Vegan",
		"Paleo"
	];

	// populate input choices
	let $intoleranceList = $("#intoleranceList");
	populateInputs($intoleranceList, intolerances, "checkbox", "I");

	let $dietList = $("#dietList");
	populateInputs($dietList, diets, "radio", "DDiet");

	// creates checkbox or radio inputs from given array
	// and places them in the given jquery object
	// prefix is used for parsing form data
	function populateInputs($area, array, type, prefix) {
		// make sure type is checkbox or radio
		if (!(type === "checkbox" || type === "radio")) {
			throw new Error(`Input type must be either 'checkbox' or 'radio', received ${type}`);
		}

		// iterate of array items
		array.forEach((item, index) => {
			if (!(typeof item === "string")) {
				throw new Error("Given array must only contain strings.");
			}

			// generate metadata
			let inputID = prefix + item;

			let value;
			if (type === "checkbox") {
				// checkbox values are true or false
				value = true;
			} else {
				// radio value is name
				value = item;
			}

			let name;
			if (type === "radio") {
				// group radio types by name
				name = prefix;
			} else {
				// checkboxes get their own name
				name = inputID;
			}

			// create and append elements
			$area
				.append($("<p>")
					.addClass("col s12 m6")
					.append($("<label>")
						.attr("for", inputID)
						.append($("<input>")
							.attr("id", inputID)
							.attr("type", type)
							.attr("name", name)
							.attr("value", value)
						)
						.append($("<span>")
							.text(item)
						)
					)
				);
		});
	}

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

	// prevent form submission when adding ingredient chip
	$('form .chips input').keydown(function (e) {
		if (e.keyCode == 13) {
			e.preventDefault();
			return false;
		}
	});
});