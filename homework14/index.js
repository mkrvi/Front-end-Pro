// 1) Створіть об'єкт coffeeMachine з властивістю message: ‘Your coffee is ready!’ і методом start(), при виклику якого
// через 3 секунди в консоль виведеться повідомлення, яке записане у ключі message.

let coffeeMachine = {
    message: "Your coffee is ready",
    start: function () {
        setTimeout(() => {
            console.log(this.message);
        }, 3000);
    }
}
coffeeMachine.start();
let teaPlease = {
  message: 'Wanna some tea instead of coffee?'
};

coffeeMachine.start.call(teaPlease);

// 2) Напишіть функцію concatStr(), яка поєднує два рядка, які розділені між собою якимся символом: роздільний символ
// і рядки передаються в параметрах функції. Використовуючи прив'язку аргументів з допомогою bind,
// створіть нову функцію hello(), яка виводить привітання тому, хто переданий в функцію в якості аргументу:
// let checkConcat = concatStr('Hello', ' ', 'Matt'); // 'Hello Matt'
// ...
// let finalResult = hello('Matt') // 'Hello Matt'
// let finalResult = hello('John') // 'Hello John'
//
function concatStr(str1, divider, str2) {
    return str1 + divider + str2;
}
let checkConcat = concatStr('Hello', ' ', 'Matt' ); // 'Hello Matt'
console.log(checkConcat);

let hello = concatStr.bind(null, 'Hello', ' ');
// let finalResult = hello('Matt')
// console.log(finalResult)
let finalResult = hello('John')
console.log(finalResult)

// 3) Напишіть функцію showNumbers(), яка послідовно виводить в консоль числа в заданому діапазоні через заданий
// інтервал (всі дані повинні передаватись як параметри функції, тож тут ніякого this не буде).
// tips: для реалізації використовуйте функцію setInterval()
// showNumbers(5, 10, 500); // 5 6 7 8 9 10 (кожне число окремо в консолі кожні 0,5 секунди)
function showNumbers(min, max, interval) {
    let timer = setInterval(function () {
        if (min <= max) {
            console.log(min);
            min++;
        } else {
            clearInterval(timer);
        }
    }, interval);
}

showNumbers(5, 10, 500);
// 4) Який результат виконання буде у даного коду? Поясніть чому.
//     function addBase(base) {
//     return function (num) {
//         return base + num;
//     };
// }
// let addOne = addBase(1);
// alert(addOne(5) + addOne(3));

// результат 10. addBase(1) добавляет 1 (base = 1), далее вызывается alert с num 5 и 3, по этому (1+5)+(1+3)=10