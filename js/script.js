"use strict";

const film = +prompt('Сколько фильмов вы уже посмотрели', '');

const personalMovieDb = {
    count: 'film',
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const q1 = prompt('Один из последних просмотренных фильмов', ''),
      a1 = +prompt('Сколько фильмов вы уже посмотрели', ''),
      q2 = prompt('Один из последних просмотренных фильмов', ''),
      a2 = +prompt('Сколько фильмов вы уже посмотрели', '');

personalMovieDb.movies[q1] = a1;
personalMovieDb.movies[q2] = a2;
