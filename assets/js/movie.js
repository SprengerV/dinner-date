movAPIkey = 'f66fd70d918aed123c6a3b422a1934d8'; 
const genresURL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=' + movAPIkey + '&page=1';
let genreID = '10751';


$('#submit').on('click',() => {
    var genres = $('.genre:checked').map(function(){
        return this.val();
    }).join('|');
    if(genres.length > 0){
        genres = '&with_genres=' + genres
    };
    const discover = 'https://api.themoviedb.org/3/discover/movie?api_key=f66fd70d918aed123c6a3b422a1934d8&include_adult=false&with_original_language=en' + genres;
    console.log(discover);
    $.get(discover).then(function(response){
        console.log(response);
    });
});

var genres = $('.genre:checked').map(function(){
    return this.val();
}).join('|');
const discover = 'https://api.themoviedb.org/3/discover/movie?api_key=' + movAPIkey + '&with_genres=' + genres + '&include_adult=false&with_original_language=en';
console.log(discover);

// $(window).on('load', function(){
//     
// });
