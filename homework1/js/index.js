// 1) Напишіть програму, яка питає у користувача скільки йому років (команда prompt()) та виводить його вік на екран
// (команда alert()).

const userAge = +prompt('How old are you?');
alert(userAge);

// 2) Напишіть програму, яка питає у користувача як його звати, в якій країні і в якому місті він живе (команда prompt())
// та виведіть результат у консоль в наступному виді (команда console.log()).

const name = prompt('What\'s your name?');
const country = prompt('Where are you from?(Enter your country)');
const city = prompt('Enter your city');
console.log(`Hello, your name is ${name}. You live in ${city}, ${country}`);

// 3) Напишіть програму, яка виводить в консоль (команда console.log()) тип даних 3х різних змінних. (Capture4.png)
// Створіть змінну number та надайте їй значення 156798;
// Створіть змінну string та надайте їй значення IT School Hillel;
// Створіть змінну boolean та надайте їй значення false;
// Відобразіть значення та її тип даних кожної змінної в консолі в наступному вигляді:
//     value: <value>; type: <type>

const number = 156798;
const string = 'IT School Hillel';
const boolean = false;
console.log(`Value: ${number}; type: ${typeof number}
Value: ${string}; type: ${typeof string}
Value: ${boolean}; type: ${typeof boolean}`);