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

const a1 = 1;

switch (a1) {
    case 1:
        console.log('Верно');
        break;
    default:
        console.log('Неверно');
        break;
}

//3. Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'.

let test = true;

(test === true) ? console.log('Верно'): console.log('Неверно'),
(test === false) ? console.log('Верно'): console.log('Неверно');

let test1 = true;

console.log(test1 === true ? 'Верно' : 'Неверно');
console.log(test1 === false ? 'Верно' : 'Неверно');

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

// 7. В переменной day лежит какое-то число из интервала от 1 до 31. Определите,
// в какую декаду месяца попадает это число (в первую, вторую или третью)

var day = 32;

if (day >= 1 && day <= 10) {
    console.log('Первая');
} else if (day >= 11 && day <= 20) {
    console.log('Вторая');
} else if (day >= 21 && day <= 31) {
    console.log('Третья');
} else {
    console.log('Хрен ты угадал =)');
}

// 8. В начале программы задается число. Определить, является ли оно простым.

let numb = 31;
let flag = true;

for (let i = 2; i < numb; i++) {
	if (numb % i == 0) {
		flag = false;
		break; 
	}
}

// 9. Нарисовать в консоли треугольник со стороной заданной длины. Длина
// задаётся переменной в начале программы. Пример: let length = 5;

let len = 5;
        
for (let i = 1; i < 6; i++) {
    if (i == 1) {
        console.log('*****'); 
    } else if (i == 2) {
        console.log('****'); 
        } else if (i == 3) {
            console.log('***'); 
            } else if (i == 4) {
                console.log('**'); 
                } else if (i == 5) {
                    console.log('*'); 
                    }
}

const star = '*';
const lengh = 5;

for (let i = 0; i < lengh; i++) {
    let tmp = '';

    for (let j = 0; j < lengh - i; j++) {
        tmp = tmp + star;
    }

    console.log(tmp);
}

//10. Конвертер валют
const dollar = +prompt('Сколько баксов ты хочешь разменять на белорусские?', '');
const byn = 2.60;
let summ = function() {
    return (dollar * byn);
};

alert('Ты получишь ' + summ(dollar, byn) + ' BYN') ;
console.log(summ(dollar, byn));