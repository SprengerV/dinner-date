         
const apiKey = '38f510f9fde94594b09c5518393c289c'

// variables to store list of ingredients 
let ingredients = document.getElementById('');
// variable to store diet type (vegetarian, ect.)
let dietType = document.getElementById('');
// variable for intolerances (gluten, ect.) this will be a drop-down or check box
let intolerances = document.getElementById('');
// variable for search button
let searchBtn = document.getElementById('');
// variable for materialize chips functionality
var chip = {
    tag: 'chip content',
    image: '', //optional
  };

// materialize chips functionality
$('.chips').chips();
$('.chips-initial').chips({
  data: [{
    tag: 'Apple',
  }, {
    tag: 'Microsoft',
  }, {
    tag: 'Google',
  }],
});
$('.chips-placeholder').chips({
  placeholder: 'Enter a tag',
  secondaryPlaceholder: '+Tag',
});
$('.chips-autocomplete').chips({
  autocompleteOptions: {
    data: {
      'Apple': null,
      'Microsoft': null,
      'Google': null
    },
    limit: Infinity,
    minLength: 1
  }
});

// need an onclick event for search button
$(searchBtn).on('click', (e) => {
    e.preventDefault();
    grabInputs();
});

// need a function to string text from input groups to add to api request
function grabInputs() {
 
}

// need a function to autocomplete ingredient items


// function that gathers all parameters and calls to API
function searchRecipes(diet, includeIngredients, intolerances) {
    const numberOfRecipes = 5;
    let queryURL = `https://api.spoonacular.com/recipes/complexSearch?diet=${diet}&intolerances=${intolerances}&includeIngredients=${includeIngredients}&number=${numberOfRecipes}&addRecipeInformation=true&apiKey=${apiKey}`;

    $.ajax({
        url: queryURL,
        method: "GET",
        success: (res) => {
            return res;
        }
    });
}

function getRecipeSummaryById(ID) {
    let queryURL = `https://api.spoonacular.com/recipes/${ID}/information?apiKey=${apiKey}`;

    $.ajax({
        url: queryURL,
        method: "GET",
        success: (res) => {
            return res;
        }
    });
}

