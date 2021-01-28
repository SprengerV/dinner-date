let urlQuery = "https://api.spoonacular.com/recipes/complexSearch"
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
$(searchBtn).on('click',);

// need a function to string text from input groups to add to api request
function grabInputs() {
    // if else statement? if some inputs not entered, still accept other inputs
}

// need a function to autocomplete ingredient items


// need a function to gather ingredients for API request
function searchByIngredient() {
    let queryURL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${apiKey}`;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        // Call other functions here?
        console.log(response);
    })
}

// need a function to gather diet type
function searchByDiet() {
    let queryURL = `https://api.spoonacular.com/recipes/complexSearch?diet=${dietType}&apiKey=${apiKey}`;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
    })
}

// need a function to gather intolerances
function searchByIntolerances() {
    let queryURL = `https://api.spoonacular.com/recipes/complexSearch?intolerances=${intolerances}&apiKey=${apiKey}`;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
    })
}
