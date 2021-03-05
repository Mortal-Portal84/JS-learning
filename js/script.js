'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++) {
    const q1 = prompt('Один из последних просмотренных фильмов?', '');
    const q2 = +prompt('На сколько оцените его?', '');

    if (q1 != null && q2 != null && q1 != '' && q2 != "" && q1.length < 50) {
        personalMovieDB.movies[q1] = q2;
        console.log('good');    
    } else {
        console.log('badluck...');
        i--;
    }
}
    
    if (numberOfFilms < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (numberOfFilms > 10 && numberOfFilms < 30) {
        console.log('Вы классический зритель');
    } else if ( numberOfFilms > 30) {
        console.log('Вы киноман');
    }

console.log(personalMovieDB);