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

	let genres = [
		{ id: 28, name: "Action" },
		{ id: 12, name: "Adventure" },
		{ id: 16, name: "Animation" },
		{ id: 35, name: "Comedy" },
		{ id: 80, name: "Crime" },
		{ id: 99, name: "Documentary" },
		{ id: 18, name: "Drama" },
		{ id: 10751, name: "Family" },
		{ id: 14, name: "Fantasy" },
		{ id: 36, name: "History" },
		{ id: 27, name: "Horror" },
		{ id: 10402, name: "Music" },
		{ id: 9648, name: "Mystery" },
		{ id: 10749, name: "Romance" },
		{ id: 878, name: "Science Fiction" },
		{ id: 53, name: "Thriller" },
		{ id: 10752, name: "War" },
		{ id: 37, name: "Western" }
	]

	// populate input choices
	let $intoleranceList = $("#intoleranceList");
	populateInputs($intoleranceList, intolerances, "checkbox", "I");

	let $dietList = $("#dietList");
	populateInputs($dietList, diets, "radio", "DDiet");

	let $genreList = $("#genreList");
	populateInputs($genreList, genres, "checkbox", "genre");

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
			let itemName = item;
			let itemID = undefined;

			if (!(typeof item === "string")) {
				itemName = item.name;
				itemID = item.id
			}

			// generate metadata
			let inputID = prefix + itemName;

			let value;
			if (type === "checkbox") {
				// checkbox values are true or false
				value = true;
			} else {
				// radio value is name
				value = itemName;
			}

			let name;
			if (type === "radio") {
				// group radio types by name
				name = prefix;
			} else {
				// checkboxes get their own name
				name = inputID;
			}

			// create elements
			let p = $("<p>");
			let label = $("<label>");
			let inputElement = $("<input>");
			let span = $("<span>");

			// element modifications
			p.addClass("col s6 m4");
			label.attr("for", inputID);
			inputElement.attr("id", inputID);
			inputElement.attr("type", type);
			span.text(itemName);

			// conditional element modifications
			if (itemID != undefined) {
				inputElement.attr(`data-${prefix}`, itemID);
			}
			if (prefix === "genre") {
				inputElement
					.attr("value", itemID)
					.attr("name", itemName);
			} else {
				inputElement
					.attr("value", value)
					.attr("name", name);
			}

			// append elements
			$area
				.append(p
					.append(label
						.append(inputElement)
						.append(span)
					)
				);
		});
	}

	// drop-down form selectors
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