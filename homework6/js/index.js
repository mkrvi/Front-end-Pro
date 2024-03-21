// 2) Напишіть програму, яка питає у користувача число і виводить в консоль наступну інформацію про нього:
//     - додатнє воно чи від'ємне;
// - скільки цифр в цьому числі;
// - якщо число додатне, виведіть суму його цифр
// Якщо number === 0, то виведе '0, length: 1'
// Якщо number === 100500, то виведе 'positive, length: 6, sum: 6'
// Если number === -50, то виведе 'negative, length: 2'
{
    let number = prompt('Enter number')
    let sum = 0;
    if (number.length && isFinite(number) && !(Number(number) % 1)) {
        for (let i = 0; i < number.length; i++) {
            sum += Number(number[i])
        }
        if (+number === 0) {
            console.log(`${number}, length: ${number.length}`)
        } else if (number > 0) {
            console.log(`positive, length: ${number.length}, sum: ${sum}`)
        } else if (number < 0) {
            console.log(`negative, length: ${number.length - 1}`)
        }
    } else {
        console.error('Enter integer')
    }
}
// 3) Відомо, что подорож на Мальдіви коштує 3000$, а купити нові AirPods - 300$. Напишіть програму, яка питає
// у користувача число (в $) та виводить в консоль інформацію, що він за ці гроші може купити.
//     Якщо money === 200$, то виведе 'You can't do anything. I'm sorry :(';
// Якщо money === 300$, то виведе 'You can buy only AirPods';
// Якщо money === 3200.50$, то виведе 'You can go on vacation or buy AirPods! What are you waiting for?';
// Якщо money === 4300.53, то виведе 'You have enough money for everything. WOW!'
{
    const money = +prompt('Enter your money amount')
    let maldives = 3000;
    let airpods = 300;
    if (isNaN(money) || money <= 0) {
        console.log('Enter number more than 0')
    } else if (money > 0 && money < airpods) {
        console.log('You can\'t do anything. I\'m sorry :(')
    } else if (money >= airpods && money < maldives) {
        console.log('You can buy only AirPods')
    } else if (money >= maldives && money < (airpods + maldives)) {
        console.log('You can go on vacation or buy AirPods! What are you waiting for?')
    } else {
        console.log('You have enough money for everything. WOW!')
    }
}
// 5) Напишіть програму, яка питає у користувача число
// від 1 до 9 і виводить таблицу множення для цього числа.
//     Якщо number === 5, то виведе
// 1 x 5 = 5;
// 2 x 5 = 10;
// 3 x 5 = 15;
// ...
// 9 x 5 = 45;
// upd: Виведіть всю таблицу множення.
{
    let number = +prompt('Enter number')
    if (isNaN(number) || number <=0 || number > 9 || number % 1 !== 0) {
        console.log('Enter number from 1 to 9')
    } else {
        for (let i = 1; i <= 9; i++) {
            let mult = i * number
            let result = `${i} * ${number} = ${mult}`
            console.log(result)
        }
    }
}
{
    for (let x = 1; x <= 9; x += 1) {
        for (let y = 1; y <= 10; y += 1) {
            let mult = x * y;
            let result = `${x} * ${y} = ${mult}`;
            console.log(result)
        }
    }
}
// 6) Напишіть програму, яка питає у користувача символ та число і виводить цей символ послідовно, збільшуючи
// кожен раз на 1, поки кількість символів в рядку не буде дорівнювати цьому числу.
//     Якщо symbol === #, number === 5, то виведе
// #
// ##
// ###
// ####
// #####
// Якщо symbol === @, number === 6, то виведе
// @
// @@
// @@@
// @@@@
// @@@@@
// @@@@@@
//
{
    const number = +prompt('Enter number');
    const symbol = prompt('Enter symbol');
    let str = '';
    if (isNaN(number) || number <= 0 || number % 1 !== 0) {
        console.log('Enter number')
    } else {
        for (let i = 0; i < number; i++) {
            str += symbol
            console.log(str)
        }
    }
}
//     7) Напишіть цикл, який заповнює строку value числами від 1000 до 2000 і додайте до кожного числа символи '&#'.
//     Результат первірте в браузері, запустив index.html файл.
//     Формат відповіді:
//     console.log(value); // &#1000 &#1001 &#1002 ... &#1999 &#2000
// Перевірте також код для значень від 7000 до 10000
{
    let result = document.getElementById('result');
    let value = '';
    let symbol = '&#'
    for (let i = 1000; i <= 2000; i++) {
        value += `${symbol}${i} `
    }
    console.log(value)

// let value = '';
// let symbol = '&#'
// for (let i = 7000; i <= 10000; i++) {
//     value += `${symbol}${i} `
// }
// console.log(value)
    result.innerHTML = value;
}
// 9) Напишіть програму, яка питає у користувача число і виводить на
// экран ряд Фібоначі, який має стільки чисел, скільки запросив користувач.
{
    let number = +prompt('Enter your number');
    if (isNaN(number) || number % 1 !== 0 || number <= 0) {
        console.error('Enter integer number bigger than 0');
    } else {
        let firstNumber = 1;
        let secondNumber = 1;
        let thirdNumber = 0;
        let fibonacci = `${firstNumber} ${secondNumber}`;
        for (let i = 0; i < number - 2; i++) {
            thirdNumber = firstNumber + secondNumber;
            firstNumber = secondNumber;
            secondNumber = thirdNumber;
            fibonacci += ` ${thirdNumber}`;
        }

        console.log(fibonacci);
    }
}
// 10) Напишіть програму, яка питає у користувача число (number) і підраховує
// максимальне число n ітерацій за формулою 1 + 2 + ... + n <= number.
//
//     Якщо number === 5, то виведе 2 // 1 + 2 <= 5
// Якщо number === 8, то виведе 3
{
    let number = +prompt('Enter your number');
    if (isNaN(number) || number % 1 !== 0 || number <= 0) {
        console.error('Enter integer number bigger than 0');
    } else {
        let sum = 0;
        for (let i = 1; i <= number; i++) {
            sum += i
            if (sum > number) {
                console.log(i-1)
                break
            } else if (sum === number) {
                console.log(i)
                break
            }
        }
    }
}