'use strict';
let personalMovieDB = {
    count: function () {
        let numberOfFilms;
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ``);
        while (numberOfFilms == `` || 
        numberOfFilms == null || 
        isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Не корректный ввод данных, пожвлуйста повторите. Сколько фильмов вы уже посмотрели?', ``);
        }
        this.count = numberOfFilms;
    },
    movies: {},  
    actors: {},
    genres: [],
    privat: false,
};

personalMovieDB.count();
console.log(personalMovieDB);

/*function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10 && personalMovieDB.count != 0) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }    
}

detectPersonalLevel ();

const showMyDB = (hidden) => {
    if (!hidden) {
        console.log(personalMovieDB);
    }
};
showMyDB (personalMovieDB.privat);

const writeYourGenres = function () {
    for(let i = 0; i < 3; i++) {
        const q1 = prompt(`Ваш любимый жанр по номером ${i+1} ?`);
        personalMovieDB.genres.push(q1);
    }
};

writeYourGenres();*/