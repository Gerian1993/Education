/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
    ]
};

const advImg = document.querySelectorAll(`.promo__adv img`),
    poster = document.querySelector(`.promo__bg`),
    promoGenre = poster.querySelector(`.promo__genre`),
    movieList = document.querySelector(`.promo__interactive-list`);




advImg.forEach(item => {
    item.remove();
});


promoGenre.textContent = `драма`;

poster.style.backgroundImage = `url("img/bg.jpg")`;

const newMovies = [...movieDB.movies];

newMovies.sort();

movieList.innerHTML = '';


newMovies.forEach((item, index) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${index + 1 + '.'} ${item}
        <div class="delete"></div>
    </li>`;
});

/*for (let i = 0; i < movieDB.movies.length; i++) {
    li[i].textContent = (`${i+1}. ` + movieDB.movies[i]);
}*/

/*newMovies.sort().forEach((_, index) => {
    li[index].textContent = (`${index+1}. ` + newMovies[index]);
});*/