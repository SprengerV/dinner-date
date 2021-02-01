movAPIkey = 'f66fd70d918aed123c6a3b422a1934d8'; 
v4AuthToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjZmZDcwZDkxOGFlZDEyM2M2YTNiNDIyYTE5MzRkOCIsInN1YiI6IjYwMTA5OGJjZWE4NGM3MDAzYmI5ZDg2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HBK_9SRA3SUJcAuFJLvJ24OnQ1rCmSASqtniQCO3ayE';
let genre = 'comedy';
const searchBy = '&query='+ genre;
const genresURL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=' + movAPIkey + '&page=1';
let genreID = '10751';


$('#submit').on('click',() => {
    var genres = $('.genre:checked').map(function(){
        return this.val();
    }).join('|');
    const discover = 'https://api.themoviedb.org/3/discover/movie?api_key=' + movAPIkey + '&with_genres=' + genres + '&include_adult=false&with_original_language=en';
    console.log(discover);

});

var genres = $('.genre:checked').map(function(){
    return this.val();
}).join('|');
const discover = 'https://api.themoviedb.org/3/discover/movie?api_key=' + movAPIkey + '&with_genres=' + genres + '&include_adult=false&with_original_language=en';
console.log(discover);

// $(window).on('load', function(){
//     $.get(discover).then(function(response){
//         console.log(response);
//     });
// });
