$(function () {
    // spoontacular API key 
    const apiKey = 'da731b598e504364be9209e1b7cd3b7d';

    window.populateHistory($("#recipeHistory"),
        getSavedRecipes(),
        $("#recipeDisplay"));

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

        searchRecipes(
            dataObj.diet,
            dataObj.ingredients.toString(),
            dataObj.intolerances.toString()
        ).then(function (data) {
            let resultIndex = Math.floor(Math.random() * (data.results.length));
            let result = data.results[resultIndex];

            let summary = result.summary.split(". ");
            summary.pop();
            summary = summary.join(". ");

            let card = window.createCard($("#recipeDisplay"));

            let recipe = {
                imageSrc: result.image,
                title: result.title,
                summary: summary,
                link: result.sourceUrl,
                orientation: "vertical"
            };

            window.populateCard(card, recipe);

            window.populateHistory($("#recipeHistory"),
                saveRecipe(recipe),
                $("#recipeDisplay"));
        });
    });

    // function that gathers all parameters and calls to API
    function searchRecipes(diet, includeIngredients, intolerances) {
        const numberOfRecipes = 30;
        const dietRestriction = (diet.toLowerCase() === 'regular diet') ? '' : diet;
        let queryURL = `https://api.spoonacular.com/recipes/complexSearch?diet=${dietRestriction}&intolerances=${intolerances}&includeIngredients=${includeIngredients}&number=${numberOfRecipes}&addRecipeInformation=true&apiKey=${apiKey}`;

        return $.ajax({
            url: queryURL,
            method: "GET",
            dataType: "json"
        });
    }

    function saveRecipe(recipe) {
        let savedRecipes = JSON.parse(localStorage.getItem('recipes'));

        if (savedRecipes) {
            savedRecipes.unshift(recipe);
            savedRecipes = savedRecipes.slice(0, 6);
        } else {
            savedRecipes = [recipe];
        }

        localStorage.setItem('recipes', JSON.stringify(savedRecipes));

        return savedRecipes;
    }

    function getSavedRecipes() {
        let savedRecipes = JSON.parse(localStorage.getItem('recipes'));
        return savedRecipes;
    }
});