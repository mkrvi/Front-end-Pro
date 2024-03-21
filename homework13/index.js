// 1) Створіть обʼєкт triangle з наступними властивостями: aSide, bSide, cSide.
//     Створіть метод setValues(), який питає у користувача значення і додає їх в ключі aSide, bSide, cSide.
//     Створіть в обʼєкті triangle метод для підрахунку периметра трикутника;
// Створіть в обʼекті triangle метод, який перевіряє чи є цей трикутник рівностороннім;
// Виведіть інформацію про створений трикутник (включаючи результати роботи усіх методів) в консоль.
let triangle = {
    aSide: 0,
    bSide: 0,
    cSide: 0,
    setValues: function() {
        this.aSide = +prompt('Enter a side');
        this.bSide = +prompt('Enter b side');
        this.cSide = +prompt('Enter c side')
    },
    getPerimeter: function() {
        return this.aSide + this.bSide + this.cSide
    },
    isEqualSides: function() {
        return this.aSide === this.bSide && this.bSide === this.cSide;
    }
}
triangle.setValues(); // for example 3 3 3
console.log(triangle.getPerimeter()); // 9
console.log(triangle.isEqualSides()); // true

// 2) Створіть обʼєкт calculator з методами:
// read() визиває prompt() для заповнення двох значень і зберігає їх як властивості обʼєкту x, y;
// sum() повертає суму цих двох значень;
// multi() повертає добуток цих двох значень;
// diff() повертає різницю цих двох значень;
// div() повертає ділення цих двох значень;

let calculator = {
    x: 0,
    y: 0,
    read: function () {
        this.x = +prompt('Enter x value');
        this.y = +prompt('Enter y value');
        },
    sum: function () {
        return this.x + this.y;
        },
    multi: function () {
        return this.x * this.y;
        },
    diff: function () {
        return this.x - this.y;
        },
    div: function () {
        return this.x / this.y;
        },
};

calculator.read(); // for example 5 2
console.log(calculator.sum()); // 7
console.log(calculator.diff()); // 3
console.log(calculator.multi());
console.log(calculator.div());

// 3) Даний обʼєкт country і функція format():
var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};

function format(start, end) {
    console.log(start + this.name + end);
}
format.call(country, '', ''); // Ukraine
format.apply(country, ['[',']']); // [Ukraine]
format.call(country.capital, '', ''); // Kyiv
format.apply(country.capital, ['', '']); // Kyiv
format.apply(country.language, ['', '']); // undefined
// 4) Що поверне даний код на екран і чому?
// var text = 'outside';
// function logIt(){
//     console.log(text);
//     var text = 'inside';
// }
// logIt();

// результат undefined. т.к. переменная text задекларирована внутри функции, здесь происходит hoisting, который ограничен
// функцией (т.к. hoisting переменной var ограничивает только функция)
// hoisting влияет на обьявление переменной, но не на инициализацию её значения, по этому код внутри функции выглядит так:
// var text;
// console.log(text); // здесь text ещё undefined, по этому в консоли результат undefined
// text = 'inside'
