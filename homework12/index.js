// 1) Створіть об'єкт vegetable, з такими в, властивостями, щоб наступний код повернув "onions are usually white".
// const { name, color } = vegetable;
// console.log(`${name}s are usually ${color}`);
//
const vegetable = {
    name: 'onion',
    color: 'white'
}
const {name, color} = vegetable;
console.log(`${name}s are usually ${color}`);
// 2) Додайте в об'єкт vegetable такі властивості, щоб в консоль вивелося "onions are usually round".
// const { shape } = vegetable;
// console.log(`${name}s are usually ${shape}`);
//
vegetable.shape = 'round'
const {shape} = vegetable;
console.log(`${name}s are usually ${shape}`);
// 3) Cтворіть масив об'єктів vegetables (кожен елемент масиву, повинен мати таку ж саму структуру як
// і об'єкт vegetable) так, щоб наступний код повернув "cucumbers are usually green", "tomatoes are usually red"
// const [cucumber, tomato] = vegetables;
// console.log(`${cucumber.name}s are usually ${cucumber.color}`);
// console.log(`${tomato.name}s are usually ${tomato.color}`);
//
const vegetables = [
    {name: 'cucumber', color: 'green'},
    {name: 'tomato', color: 'red'},
    {name: 'pumpkin', color: 'orange'}
];
const [cucumber, tomato] = vegetables;
console.log(`${cucumber.name}s are usually ${cucumber.color}`);
console.log(`${tomato.name}s are usually ${tomato.color}`);
// Використовуючи деструктуризацію можно поділити масив на необхідні частини. Наприклад, записати в змінну окремо
// об'єкт onion, а інші овочі, які залишилися - в новий масив otherVegetables.
const [firstVegetable, ...otherVegetables] = vegetables;
console.log(firstVegetable.name === cucumber.name); // true
console.log(otherVegetables)
// Або звертатися до будь-якого елементу масива, минаючі попередні.
const [, , pumpkin] = vegetables;
console.log(`${pumpkin.name}s are usually ${pumpkin.color}`); //pumpkins are usually orange

//
// 4) На основі прикладів, які вказані вище, створіть масив об'єктів students, виведіть 2й елемент масиву і довжину
// масиву елементів, що залишилися.
let students = [
    { name: 'Kate', age: 25 },
    { name: 'Artur', age: 30 },
    { name: 'Nick', age: 15 },
    { name: 'Alex', age: 28 },
    { name: 'Zhenia', age: 45 },
];
const [ , secondStudent, ...otherStudents] = students
console.log(secondStudent)
console.log(otherStudents.length)