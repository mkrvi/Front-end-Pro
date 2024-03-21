// 1) Напишіть програму, яка питає у користувача номер автобуса.
//     Якщо це номер 7, 255 или 115, тоді користувач може їхати. Виведіть в консолі "You can go".
//     Якщо ні - виведіть в консолі "Please wait".

const bus = +prompt('Enter the bus number');

if (bus === 7 || bus === 225 || bus === 115) {
    console.log('You can go');
} else {
    console.log('Please wait');
}

//
// 2) Напишіть програму, яка отримує від користувача число і порівнює його з числом Pi. (Math.PI)
// Порівняйте, чи є це число більше ніж число Pi.
//     Порівняйте, чи є це число менше ніж число Pi.
//     Порівняйте, чи це число дорівнює числу Pi.
//     Якщо введене значення не є числов, виведіть в консоль повідомлення про помилку.
//     Всі результати відобразіть в наступному форматі:
//     You entered: <number>
//     Is greater then PI: true
//     Is less then PI: false
//     Is equal PI: false
//
const number = +prompt('Enter your number');
console.log(`You entered: ${number}
Is greater then PI: ${number > Math.PI}
Is less then PI: ${number < Math.PI}
Is equal PI: ${number === Math.PI}`);

//     3) Напишіть програму, яка пропонує користувачу ввести пароль і перевіряє, чи є ций пароль надійним за наступними умовами:
//     Пароль повинен бути не менше шести символів;
//     Пароль не повинен бути рівним строкам qwerty чи 123456;
//     Пароль повинен мати хоча б одну велику літеру.
//     Якщо всі умови виконані, виведіть в консоль повідомлення "Strong".
//     Якщо пароль має хоча б одну велику літеру але складається з п'яти символів, виведіть в консоль повідомлення "Middle".
//     У всіх інших випадках, виведіть в консоль повідомлення "Weak".

const password = prompt('Enter your password');
if(password !== '123456' && password.toLowerCase() !== 'qwerty' && password !== password.toLowerCase() && password.length >= 5) {
    if (password.length >= 6) {
        console.log('Strong');
    } else {
        console.log('Middle');
    }
} else {
    console.log('Weak')
}
