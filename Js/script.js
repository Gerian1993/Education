'use strict';

/* Задание на урок:

4) Потренироваться и переписать цикл еще двумя способами*/

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ``);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},  //у объекта не может быть одинаковых ключей? 
    actors: {},
    genres: [],
    privat: false,
};

if (personalMovieDB.count < 10 && personalMovieDB.count != 0) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}


for (let i = 0; i < 2; i++) {
    let q1 = prompt('Один из последних просмотренных фильмов?',``);
    while (q1 === `` || q1 === null || q1.length > 50) {
           q1 = prompt('Не корректное название. Пожалуйста повторите, какой один из последних вами просмотренных фильмов?',``);   
    }
    let q2 = prompt('На сколько оцените его по дестибальной шкале?', ``);
    while (q2 === `` || q2 === null || q2.length > 4) {
           q2 = prompt('Не корректная оценка, пожалуйста повторите. На сколько оцените фильм?', ``);
    }
    personalMovieDB.movies[q1] = +q2;
}


console.log(personalMovieDB);