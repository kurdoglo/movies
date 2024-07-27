/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате:
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

"use strict";
const answer = +prompt("Сколько фильмов вы уже посмотрели?", "");
const numberOfFilms = answer;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Один из последних просмотренных фильмов?", "");
  const b = prompt("На сколько оцените его?", "");

  if (a != "" && b != "" && a != null && b != null && a.length < 50) {
    personalMovieDB.movies[a] = b;
  } else {
    --i;
  }
}

if (personalMovieDB.count < 10) {
  console.log("Просмотрено мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
  console.log("Вы киноман");
} else {
  console.log("Error"); 
}

console.log(numberOfFilms);

console.log(personalMovieDB.movies);

// // const num = 50;

// num == 50 ? console.log("ok") : console.log("not ok");

// switch (num) {
//   case 50:
//     console.log("okay");
//     break;
//   case 49:
//     console.log("not good");
//     break;
//   case 45:
//     console.log("no");
//     break;
//   case 43:
//     console.log("noo");
//     break;
// }

// let num = 50;
// // while (numb < 56) {
// //   console.log(numb);
// //   numb++;
// // }

// // do {
// //   console.log(numb);
// //   numb++;
// // } while (numb < 56);

// for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//     break;
//   }
//   num++;
//   console.log(num);
// }
