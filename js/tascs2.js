// function seekAndDestroy (a, b) {
//     return (a / b);
// }

// console.log(seekAndDestroy(10, 5));

// const question = prompt ('Введите название валюты: EUR (евро) или USD (доллары США)');

// const rateUSD = 2.60;
// const rateEUR = 3.16;

// const convertToByn = function (valueUSD, rateUSD) {
//     return (valueUSD * rateUSD);
// };

// if (question == "USD") {
//     const valueUSD = +prompt('Сколько баксов ты хочешь разменять на белорусские?', '');
//     convertToByn(valueUSD, rateUSD);
//     alert(convertToByn(valueUSD * rateUSD));
//     console.log(valueUSD);
// } else if (question == "EUR") {
//     const valueEUR = +prompt('Сколько евриков ты хочешь разменять на белорусские?', '');
//     convertToByn(valueEUR, rateEUR);
//     alert(convertToByn(valueEUR * rateEUR));
//     console.log(valueEUR);
// } else {
//     alert("Таких валют мы не знаем, тебе не кнам...");
//     console.log("Произошла ошибка!");
// }

// const summ = 'Ты получишь ' + convertToByn(valueUSD, rateUSD) + ' BYN';

// if (convertToByn(valueUSD, rateUSD) < 400) {
//     alert(summ + ', но, ты тут долго не протяннешь...');
//     console.log(summ);
// } else if (convertToByn(valueUSD, rateUSD) > 400 && convertToByn(valueUSD, rateUSD) < 900) {
//     alert(summ + ', ну так себе, гульнуть можно');
//     console.log(summ);
// } else if (convertToByn(valueUSD, rateUSD) > 900 && convertToByn(valueUSD, rateUSD) < 1200) {
//     alert(summ + ', ну не плохо, не плохо');
//     console.log(summ);
// } else {
//     alert(summ + ', тсс! только никому не говори что у тебя столько!');
//     console.log(summ);
// }

const rate = {
    'USD': 2.60,
    'EUR': 3.16,
    'RUB': 0.036
};

const currency = prompt('Введите название валюты: EUR (евро) или USD (доллары США):');

if (rate[currency]) {
    const value = prompt('Введите кол-во ' + currency + ':');

    const convertToByn = function () {
        return value * rate[currency];
    };

    const print = function (value) {
        alert(value);
        console.log(value);
    };

    print(convertToByn());
} else {
    alert("Таких валют мы не знаем, тебе не к нам...");
    console.log("Произошла ошибка!");
}

// const fruit = 'Some orange apple ';

// console.log(fruit.indexOf('orange'));

// console.log(fruit.slice(5, 11));

// console.log(fruit.substring(5, 10));

// console.log(fruit.substr(5, 4));

// 1.  Отгадай число. запросить загадываемое число. запрашивать отгадываемое число до тех пор,пока оно не совпадет.
// выводить 'больше', если юзер ввел значение меньше загаданного, 'меньше' - если наоборот. 'верно' при совпадении.

const number = 666;

const question = +prompt('Угадаешь число? =)', '');

if (question < number) {
    alert('Не, оно больше на самомо деле...');
    console.log('Не, оно больше на самомо деле...');
} else if (question > number) {
    alert('Многовато...');
    console.log('Многовато...');
} else if (question === number) {
    alert('Правильно, да ты красавчик!');
    console.log('Всё ОК!');
} else {
    alert('Введена какая-то чепуха... Просто введи число');
    console.log('Ошибка! Попробуй ещё раз!');
}

for (let i = 0; i < 1; i++) {
    const number = 666;
    const question = +prompt('Угадаешь число? =)', '');

    if (question < number) {
        alert('Не, оно больше на самомо деле...');
        console.log('Не, оно больше на самомо деле...');
        i--;
    } else if (question > number) {
        alert('Многовато...');
        console.log('Многовато...');
        i--;
    } else if (question === number) {
        alert('Правильно, да ты красавчик!');
        console.log('Всё ОК!');
    }   else {
        console.log('badluck...');
        i--;
    }
}