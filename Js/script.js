'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ``);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
let q1 = prompt('Один из последних просмотренных фильмов?',``);
let q2 = +prompt('На сколько оцените его?', ``);
let q3 = prompt('Один из последних просмотренных фильмов?', ``);
let q4 = +prompt('На сколько оцените его?',``);

personalMovieDB.movies[q1] = q2;
personalMovieDB.movies[q3] = q4;

console.log(personalMovieDB);