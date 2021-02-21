"use strict";

// 1. Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.
const a = 10;

if (a == 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// 2. Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. 
// Проверьте работу скрипта при a равном 1, 0, -3.

const a1 = 0;

switch (a1) {
    case 1:
        console.log('Неверно');
        break;
    case 0:
        console.log('Верно');
        break;    
    case -3:
        console.log('Неверно');
        break;                 
    }

//3. Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'.

let test = true;

(test === true) ? console.log('Верно') : console.log('Неверно');
(test === false) ? console.log('Верно') : console.log('Неверно');

let test = true;

console.log(test=== true ? 'Верно' : 'Неверно');
console.log(test=== false ? 'Верно' : 'Неверно');

//4. 4. В переменной min лежит число от 0 до 59. Определите в какую четверть часа 
// попадает это число (в первую, вторую, третью или четвертую).

let min = 10;
if (min >= 0 && min <= 14) {
	console.log('В первую четверть.');
}
if (min >= 15 && min <= 30) {
	console.log('Во вторую четверть.');
}
if (min >= 31 && min <= 45) {
	console.log('В третью четверть.');
}
if (min >= 46 && min <= 59) {
	console.log('В четвертую четверть.');
}

// 5. Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима',
// если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.

let num = 3;

switch (num) {
    case 1:
        console.log('Зима');
        break;
    case 2:
        console.log('Весна');
        break;    
    case 3:
        console.log('Осень');
        break;
    case 3:
        console.log('Лето');
        break;                 
    }

const result = num;

// 6. В переменной month лежит какое-то число из интервала от 1 до 12. Определите 
// в какую пору года попадает этот месяц (зима, лето, весна, осень).

var month = 12;

if (month === 12 || month <= 2) {
    console.log('Зима');
} else if (month >= 3 && month <= 5) {
    console.log('Весна');
} else if (month >= 6 && month <= 8) {
    console.log('Лето');
} else if (month >= 9 && month <= 11) {
    console.log('Осень');
}
