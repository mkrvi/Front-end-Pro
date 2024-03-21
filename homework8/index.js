// Використовувати будь-які методи масиву чи строк заборонено в цій домашній роботі.
//     Працюємо тільки через цикли та умовні оператори.
//
// 1) Напишіть функцію parseDate(), яка показує поточну дату і час чітко в заданому форматі.
// для дати (Thu Jan 06 2022 22:03:07) - new Date(2022, 0, 6, 22, 3, 7)
//      Today is: Thursday.
//      Current time is: 10 PM : 03 : 07
// для дати (Sat May 05 2018 04:15:09) - new Date(2018, 4, 5, 4, 15, 9)
//      Today is: Saturday.
//      Current time is: 04 AM : 15 : 09
// для дати (Sun Nov 30 2025 12:00:59) - new Date(2025, 11, 0, 12, 0, 0)
//      Today is: Sunday.
//      Current time is: 12 PM : 00 : 59
//
{
    function parseDate() {
        let date = new Date();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let day = days[date.getDay()];
        let hours = date.getHours();
        let amPm;
        if (hours === 0 || hours < 12) {
            amPm = 'AM'
        } else  {
            amPm = 'PM'
        }
        if (hours === 0) {
            hours += 12
        } else if (hours > 12) {
            hours = hours - 12;
        }
        if (hours < 10) {
            hours = '0' + hours;
        }
        let minutes = date.getMinutes();
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        let seconds = date.getSeconds();
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        let time = hours + ' ' + amPm + ' : ' + minutes + ' : ' + seconds;
        console.log(`Today is: ${day}.\nCurrent time is: ${time}`)
    }
    parseDate();
}
// 2) Напишіть функцію getRandomInteger(min, max), яка повертає ціле число в заданому діапазоні чисел, які передані в
// аргументах функції. Напишіть програму, яка питає у користувача ціле число і порівнює його зі створеним числом за
// допомогою функції getRandomInteger. Якщо користувач ввів невірне число, виведіть в консоль повідомлення про помилку.
// Якщо числа співпадають, вивести в консоль Good work, якщо ні - Not matched.
// //
{
    function getRandomInteger(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let number = getRandomInteger(1,3)
    let userNumber = +prompt('Enter number');
    if (!isNaN(userNumber) || userNumber % 1 === 0 || userNumber !== 0) {
        if (userNumber === number) {
            console.log('Good work')
        } else {
            console.log('Not matched')
        }
    } else {
        console.log('Enter integer')
    }
}
// 3) Напишіть функцію getDecimalNumber(arr), яка приймає в якості аргументу масив з чисел 0 або 1, і повертає число
// в десятичній системі еквівалентне заданому.
//     Наприклад, массив [0, 0, 0, 1] розглядається як 0001 і дорівнює 1.
// Приклади для перевірки:
//     getDecimalNumber([0, 0, 0, 1]) // 1
// getDecimalNumber([0, 0, 1, 0]) // 2
// getDecimalNumber([1, 1, 1, 1]) // 15
// getDecimalNumber([1, 1, 1, 0, 0, 1]) // 57
// Массив може бути довільної довжини. В масиві не повинно бути ніяких других даних окрім чисел 0 і 1. В цій задачі
// забороняється використовувати number.toString() чи parseInt(), давайте спробуємо написати алгоритм самостійно :)
//
function getDecimalNumber(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i] * Math.pow(2, arr.length - i - 1)
    }
    console.log(result)
}
getDecimalNumber([0, 0, 0, 1])
getDecimalNumber([0, 0, 1, 0])
getDecimalNumber([1, 1, 1, 1])
getDecimalNumber([1, 1, 1, 0, 0, 1])
// 4) Напишіть програму, яка питає у користувача число і ділить його на 2 стільки разів, поки воно не буде <= 50.
// Виведіть в консоль фінальне число і кількість операцій, які знадобились, щоб досягти цього числа.
//     Приклад виконання програми для number = 100500;
// Initial number is: 100500;
// Attempts: 11;
// Final number is: 49.072265625;
{
    let userNumber = +prompt('Enter number')
    if (isNaN(userNumber) || userNumber % 1 !== 0 || userNumber === 0) {
        console.log('Enter integer')
    }
    function divideNumber() {
        let attempts = 0;
        let result = userNumber;
        while (result > 50) {
            result /= 2;
            attempts++
        }
        console.log(`Initial number: ${userNumber};\nAttempts: ${attempts};\nFinal number is: ${result}`)
    }

    divideNumber()
}