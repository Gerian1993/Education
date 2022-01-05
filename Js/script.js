'use strict';

/* Задание на урок:
3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

let personalMovieDB = {
    count: 0, //Какие еще варианты можно использовать для того чтобы передать в этот ключ численное значение.
    movies: {},  
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = parseInt(prompt('Сколько фильмов вы уже посмотрели?', ``), 10);
        while (isNaN(personalMovieDB.count) || personalMovieDB.count <= 0) {
        personalMovieDB.count = parseInt(prompt('Не корректный ввод данных, пожалуйста повторите. Сколько фильмов вы уже посмотрели?', ``), 10);
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10 && personalMovieDB.count != 0) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }    
    },
    showMyDB: (hidden) => {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for(let i = 0; i < 3; i++) {
            let q1 = prompt(`Ваш любимый жанр под номером ${i + 1} ?`);
            while (q1 == null || q1 ==``) {
                q1 = prompt(`Ваш любимый жанр под номером ${i + 1} ?`);
            }
            personalMovieDB.genres.push(q1);
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i + 1} - это ${item}`);    
        });
    },
    toggleVisibleMyDB: () => {
        if (!personalMovieDB.privat) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    },
};

//Methods for PersonalMovieDB

personalMovieDB.detectPersonalLevel();
//5) Program asks you about fovorite generes

    /*for(let i = 0; i < 1; i++) {
        let q1 = prompt(`Напишите ваши любимые жанры через запятую?`);
        if(q1 === null || q1 === ``) {
            alert(`Неккоректный ввод данных`);
            i--;
        } else {
            personalMovieDB.genres = q1.split(`, `);
            personalMovieDB.genres.sort();
        }
    }
    personalMovieDB.genres.forEach((item, i) => {
        console.log(`Любимый жанр #${i + 1} - это ${item}`);    
    });*/






