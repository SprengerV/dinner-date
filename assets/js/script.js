$(function () {
	window.createCard = function (parent, id = "") {
		let card = $("<div>").addClass("card hidden");
		card.append($("<div>")
			.addClass("card-image")
			.append($("<img>"))
		).append($("<div>")
			.addClass("card-stacked")
			.append($("<div>")
				.addClass("card-content")
				.append($("<span>").addClass("card-title"))
				.append($("<p>"))
			).append($("<div>")
				.addClass("card-action")
				.append($("<a>").attr("target", "_blank"))
			)
		);
		if (id) card.attr("id", id);
		parent.append(card);
		return card;
	}

	window.populateCard = function (card, options) {
		let itemsDisplayed = false;

		// get selectors
		let title = card.find(".card-title").hide();
		let anchor = card.find("a").hide();
		let paragraph = card.find("p").hide();
		let image = card.find("img").hide();

		// apply options
		if (options.title) {
			title.text(options.title).show();
			itemsDisplayed = true;
		}

		if (options.imageSrc) {
			image.attr("src", options.imageSrc).show();
			itemsDisplayed = true;
		}

		if (options.summary) {
			paragraph.html(options.summary).show();
			itemsDisplayed = true;
		}

		if (options.link) {
			anchor.attr("href", options.link).text("More details here.").show();
			itemsDisplayed = true;
		}

		if (options.orientation === "horizontal") {
			card.addClass(options.orientation);
		} else {
			card.css("max-width", "500px");
		}

		if (itemsDisplayed) {
			card.removeClass("hidden");
		} else {
			card.addClass("hidden");
		}
	}
});
