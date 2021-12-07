"use strict";
//another methods to perform task 2 in cycles lesson

/*for (let i = 0; i < 2; i++) {
    const q1 = prompt('Один из последних просмотренных фильмов?',``),
          q2 = prompt('На сколько оцените его по дестибальной шкале?', ``);
    if (q1 != `` && q2 != `` && q1 != null && q2 != null && q1.length < 50 && q2.length < 4) {
        personalMovieDB.movies[q1] = +q2;
        console.log(`ok`);
    } else {
        i--;
        console.log(`mistake`);
    }    
}*/

/*for (let i = 0; i < 2; i++) {
    let q1 = prompt('Один из последних просмотренных фильмов?',``);
    let q2 = prompt('На сколько оцените его по дестибальной шкале?', ``);
    (q1 != `` || q2 != ``) ? personalMovieDB.movies[q1] = +q2 :
    (q1 != null || q2 != null) ? personalMovieDB.movies[q1] = +q2 :
    q1.length < 50 ? personalMovieDB.movies[q1] = +q2 :
    i;
}*/// Не знаю как через тернанрный оператор и цикл вополнить задачу.
