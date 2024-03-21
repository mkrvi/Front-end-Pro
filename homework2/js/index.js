// 1) Створіть три змінні. Задайте першій з них будь-яке числове значення. Друга змінна повинна дорівнювати першій,
// але збільшена в три рази. Третя змінна повинна дорівнювати сумі перших двох. Виведіть в консоль усі три змінні.
//
const firstNumber = 11;
const secondNumber = firstNumber * 3;
const thirdNumber = firstNumber + secondNumber;

console.log(`${firstNumber}, ${secondNumber}, ${thirdNumber}`)

// 2) Cтворіть числові змінні х и y. Значення їх задає користувач через команду prompt().Підрахуйте добуток, ділення,
// різницю і суму цих змінних. Результат відобразіть в консолі в форматі повної математичної операції:
// a + b = c;
// a - b = c;
// a * b = c;
// a / b = c;
//

const x = +prompt('Enter first number')
const y = +prompt('Enter second number')
let sum = x + y
let mul = x * y;
let div = x / y;
let sub = x - y;

console.log(`${x} + ${y} = ${sum}
${x} - ${y} = ${sub}
${x} * ${y} = ${mul}
${x} / ${y} = ${div}`)

// 3) Створіть змінну str і задайте їх знамення з prompt. Приведіть строку до верхнього і нижнього регістру,
// підрахуйте довжину і виведіть ці дані в консоль в наступному форматі (все повинно бути записано в одному console.log()):
// You wrote: "<str>" \ it's length <number of str characters>.
// This is your big string: "<STR>".
//     And this is a small one: "<str>"
//

const str = prompt('Enter smth')

console.log(`You wrote: "${str}" \\ it's length ${str.length}.
This is your big string: "${str.toUpperCase()}".
\tAnd this is a small one: "${str.toLowerCase()}"`)

// 4) В одній пачці папіру 500 листів. Офіс використовує 1200 листів папіру щотиджня. Яку найменшу кількість папіру
// треба закупити в офіс, щоб вистачило на 8 тижнів?
//     Результат відобразіть в консолі (команда console.log()).
// const sheetsInReamPaper = 500;
// const consumptionPerWeek = 1200;
// const weeksAmount = 8;
//

const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;
const result = Math.ceil((consumptionPerWeek * weeksAmount)/sheetsInReamPaper);
console.log(result)

// 5) Напишіть програму, яка рахує скільки порібно заплатити відсоткі від суми по кредиту. Відсоток і суму задає
// користувач (команда prompt()), результат виводимо в консоль (команда console.log()). Враховуєте, що користувач може
// відправити 10 або 10.5%.
// const percent = prompt();
// const sum = prompt();

const percent = parseFloat(prompt('Enter percent'));
const sumLoan = +prompt('Enter sum');
const percentLoan = sumLoan / 100 * percent;
console.log(`You must pay ${percentLoan}$.`)
