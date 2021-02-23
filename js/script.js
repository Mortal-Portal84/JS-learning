"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов', ''),
          b = +prompt('Сколько фильмов вы уже посмотрели', '');

      if (a != null && a != null && b != '' && b != '' && a.length < 50) {
          personalMovieDb.movies[a] = b;
          console.log('done'); 
      } else {
          console.log('error');
          i--;
      }         
}

if (personalMovieDb.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDb.count >= 10 && personalMovieDb.count <= 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDb.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}