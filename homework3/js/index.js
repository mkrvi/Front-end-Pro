// 1) Написати програму, яка тричі питає у користувача будь-яку інформацію і виводить її в консоль в одному рядку
// Наприклад, для рядків "JavaScript', 'is my favorite', 'language', в консолі отримаємо
// 'JavaScriptis my favoritelanguage'
const firstStr = prompt('Enter first string');
const secondStr = prompt('Enter second string');
const thirdStr = prompt('Enter third string');
console.log(`${firstStr}${secondStr}${thirdStr}`)
// 2) Напишіть програму, яка запитує у користувача кількість годин і переводить години в секунди. Отримані секунди
// вивести в модальне окно командою alert();
const hours = +prompt('Enter hours');
const seconds = 60 * 60;
const result = hours * seconds;
alert(`In ${hours} hours ${result} seconds.`)
// 3) Напишіть програму, яка питає у користувача номер квартири (команда prompt()) і виводить в консоль номер поверху і
// номер під'їзду. Відомо, що в одному під'їзді 9 поверхів по 3 квартири на кожному поверсі. Результат (поверх і під'їзд)
// відобразіть в консолі (команда console.log()). Округлити можна за допомогою команд Math.floor() або Math.ceil()
// const roomsOnFloor = 3;
// const floors = 9;
// const roomNumber = prompt();
const roomsOnFloor = 3;
const floors = 9;
const roomNumber = +prompt('Enter room number');
const roomsInEntrance = floors * roomsOnFloor;
const entrance = Math.ceil(roomNumber / roomsInEntrance);
const resultFloor = Math.ceil((roomNumber - roomsInEntrance * (entrance - 1)) / roomsOnFloor);
console.log(`Room ${roomNumber} is on the ${resultFloor} floor in ${entrance} entrance.`)
// 4) Напишіть програму, яка питає у користувача температуру в Цельсіях и конвертує її в Фаренгейти. Результат
// відобразіть в консолі. Формула для конвертації: Цельсій х 1,8 + 32 = Фаренгейт 60°C is 140°F
// tips: градус Цельсія в юнікоді буде "\u2103", щоб відобразити його в рядку. Спробуйте самостійно знайти символ
// для позначення градусу Фаренгейта.
//  Не забувайте про неточні обчислення. Для задачі з градусами очікуємо завжди не більше 2х знаків після коми.
const temperature = +prompt('Enter temperature in \u2103 to convert in \u2109');
const fahrenheit = temperature * 1.8 +32;
console.log(`${temperature}\u2103 is ${fahrenheit.toFixed(2)}\u2109.`)