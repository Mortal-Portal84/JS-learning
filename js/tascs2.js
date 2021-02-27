// function seekAndDestroy (a, b) {
//     return (a / b);
// }

// console.log(seekAndDestroy(10, 5));

const valueUSD = +prompt('Сколько баксов ты хочешь разменять на белорусские?', '');
const rate = 2.60;
let convertToByn = function (valueUSD, rate) {
    return (valueUSD * rate);
};
const summ = 'Ты получишь ' + convertToByn(valueUSD, rate) + ' BYN';

if (convertToByn(valueUSD, rate) < 400) {
    alert(summ + ', но, ты тут долго не протяннешь...');
    console.log(summ);
} else if (convertToByn(valueUSD, rate) > 400 && convertToByn(valueUSD, rate) < 900) {
    alert(summ + ', ну так себе, гульнуть можно');
    console.log(summ);
} else if (convertToByn(valueUSD, rate) > 900 && convertToByn(valueUSD, rate) < 1200) {
    alert(summ + ', ну не плохо, не плохо');
    console.log(summ);
} else {
    alert(summ + ', тсс! только никому не говори что у тебя столько!');
    console.log(summ);
}