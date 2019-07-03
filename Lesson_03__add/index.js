'use strict';

let weekRus = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let weekEn = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
let lang = prompt('Язык ru или en');

if (lang == 'ru') {
  console.log(weekRus.toString());
} else {
  console.log(weekEn.toString());
}

switch (lang) {
  case 'ru':
    alert('На русском');
    console.log(weekRus.toString());
    break;
  default:
      alert('На английском');
      console.log(weekEn.toString());
      break;
}

let week = [
  ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
  ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
];
lang == 'ru' ? console.log(String(week[0])) : console.log(String(week[1]));

let namePerson = prompt('Введите имя').toLocaleLowerCase;

let name =
  (namePerson == 'артем') ? console.log('директор') :
    (namePerson == 'максим') ? console.log('преподаватель') : console.log('студент');
