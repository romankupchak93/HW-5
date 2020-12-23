'use strict';

const funcResult = (variable, value) => variable.innerText = value;

// 1. Напишіть функцію, що повертає куб числа.

const cubeVal = document.getElementById('cubeVal');
const cubeRes = document.getElementById('cubeRes');

const cubeNumbers = cubeVal => Math.pow(cubeVal, 3);

const checkCubeVal = /\d/;

cubeVal.addEventListener('input', () => {
    if (checkCubeVal.test(cubeVal.value) === false) {
        funcResult(cubeRes, 'Некоректно введені числа');
    } else if (checkCubeVal.test(cubeVal.value) === true) {
        funcResult(cubeRes, `Куб числа ${cubeVal.value} = ${cubeRes.innerText = cubeNumbers(cubeVal.value)}`);
    }
});

// 2. Напишіть функцію, що додає перше число до другого і ділить результат на третє число.

const firstNum = document.getElementById('firstNum');
const secondNum = document.getElementById('secondNum');
const thirdNum = document.getElementById('thirdNum');
const numRes = document.getElementById('numRes');
const checkBtn = document.getElementById('checkBtn');

const threeNumAddDiv = (first, second, third) => (parseFloat(first) + parseFloat(second)) / parseFloat(third);

checkBtn.addEventListener('click', function () {

    if (firstNum.value === '' || secondNum.value === '' || thirdNum.value === '') {
        funcResult(numRes, 'Некоректно введені числа');
    } else {
        funcResult(numRes, `В сумі: ${threeNumAddDiv(firstNum.value, secondNum.value, thirdNum.value)}`);
    }

});

// 3. Напишіть функцію, що приймає число від 1 до 7 і повертає відповідну назву дня (українською).

const dayVal = document.getElementById('dayVal');
const dayBtnCheck = document.getElementById('dayBtnCheck');
const dayStringRes = document.getElementById('dayStringRes');

const dayNumberToString = number => {
    switch (parseInt(number)) {
        case 1:
            return 'понеділок';
        case 2:
            return 'вівторок';
        case 3:
            return 'середа';
        case 4:
            return 'четвер';
        case 5:
            return 'п\'ятниця';
        case 6:
            return 'субота';
        case 7:
            return 'неділя';
        default:
            return 'Некоректно введено число';
    }
}

dayBtnCheck.addEventListener('click', function () {
    funcResult(dayStringRes, dayNumberToString(dayVal.value));
});

// 4. Реалізуйте функцію знаходження факторіала
const factorialVal = document.getElementById('factorialVal');
const factorialRes = document.getElementById('factorialRes');

const factorial = value => (value > 0) ? value * factorial(value - 1) : 1;

factorialVal.addEventListener('input', () => {
    if (parseInt(factorialVal.value) < 0 || factorialVal.value === '') {
        funcResult(factorialRes, 'Помилка! Введіть коректне число');
    } else {
        funcResult(factorialRes, `Результат: ${factorial(parseInt(factorialVal.value))}`);
    }
});

// 5. Напишіть функцію яка отримує години хвилини та секунди і повертає це число в секундах.

const time = document.getElementById('timeToConverter');
const timeToConverterBtn = document.getElementById('timeToConverterBtn');
const converterRes = document.getElementById('converterRes');

const timeToConverter = time => {

    let [hours, minute, seconds] = time.split(':');

    (seconds === undefined) ? seconds = 0: seconds;

    return ((parseInt(hours * 3600)) + parseInt(minute * 60) + parseInt(seconds));
}

timeToConverterBtn.addEventListener('click', function () {
    funcResult(converterRes, `Результат: ${timeToConverter(time.value)}c.`);
});

// 6.Написати функцію , яка приймає секунди, і перетворює їх у години хвилини та секунди у форматі «гг:хх:сс». якщо кількість годин більша за 23.59.59 - вивести повідомлення "Більше одного дня".

const seconds = document.getElementById('converterToSec');
const converterToSecBtn = document.getElementById('converterToSecBtn');
const converterToSecRes = document.getElementById('converterToSecRes');

const checkTime = i => (i < 10) ? '0' + i : i;

const converterToSec = second => {
    let hours = Math.floor(second / 60 / 60);
    let minute = Math.floor(second / 60) - (hours * 60);
    let seconds = second % 60;

    if (hours <= 23 && minute <= 59 && seconds <= 59) {
        return [checkTime(hours), checkTime(minute), checkTime(seconds)].join(':');
    } else {
        return 'Більше одного дня';
    }

}
converterToSecBtn.addEventListener('click', function () {
    if (parseInt(seconds.value) < 0 || seconds.value === '') {
        funcResult(converterToSecRes, 'Некоректно введено число');
    } else {
        funcResult(converterToSecRes, `Результат: ${converterToSec(parseInt(seconds.value))}`);
    }
});