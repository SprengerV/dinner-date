// parse out recipe
function displayHistory() {
    let recipe = localStorage.getItem("recipe");
    if (recipe!== null){
        let parsedRecipe = JSON.parse(recipe);
        parsedRecipe.forEach( (event) => {
            
        })
    }
}

// Function to stringify text to localStorage
function saveRecipe(recipe) {
    let recipe = localStorage.getItem("recipe");
    let updatedEvents;
 
}