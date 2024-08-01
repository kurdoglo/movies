"use strict";

let numberOfFilms;
// Задаются вопросы промпты
function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();
// Объект с данными в консоли
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: true,
};
// Функция приватности. Если фолс значение, то объект выводится в консоль, если тру, то нет
// Если в объекте тру. то ! превращает булиновое значние в фолс и ничего не выводится.
// А если в объекте фолс, то он превращается  в булиновый тру и объект выводится в консоль.
function showMyDB(hidden) {
  if (hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.private);

// Цикл который задает вопросы по два раза и ставит критерии вводимых данных которые записываются
// в объект
// Если условие не выполняется, то происходит иттерация назад и вопрос задается заново.
function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", "");
    const b = prompt("На сколько оцените его?", "");
    if (a != "" && b != "" && a != null && b != null && a.length < 50) {
      personalMovieDB.movies[a] = b;
    } else {
      --i;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("ошибка");
  }
}
detectPersonalLevel();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр номер ${i}`);
  }
}
writeYourGenres();

console.log(numberOfFilms);

console.log(personalMovieDB.movies);
