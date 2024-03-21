// 1) Напишіть програму, яка питає у користувача його імʼя і виводить в консолі текстове привітання.
// Happy birthday to you
// Happy birthday to you
// Happy birthday, dear <name>
// Happy birthday to you
{
    const name = prompt('Enter your name');
    if (name.length || Number(name)) {
        console.log('Enter your name')
    } else {
        for (let i = 0; i <= 3; i++) {
            if (i === 2) {
                console.log(`Happy birthday dear ${name}`);
                continue;
            }
            console.log('Happy birthday to you');
        }
    }
}
// 2) Сформуйте строку '.#.#.#.#.#.#.#' за допомогою циклу for, де необхідну кількість повторів символів '.#'
// задає користувач через команду prompt().
//
{
    let number = +prompt('Enter number');
    let str = '';
    const symbol = '.#';
    while (isNaN(number) || number <= 0) {
        number = +prompt('Enter number bigger than 0')
    }
    for (let i = 0; i < number; i++) {
        str += symbol
    }
    console.log(str)
}
// 3) Напишіть програму, яка питає у користувача число і сумує всі непарні числа до цього числа включно.
//     Якщо користувач ввів не число або відʼємне число чи 0, визивати команду prompt() з текстом "Invalid. You should
//     enter a number bigger than zero" до тих пір поки вірний формат даних не буде введений користувачем.
//     Результат відобразіть в консолі.
//
{
    let userNumber = +prompt('Enter your number');
    let result = 0;
    while (isNaN(userNumber) || Math.abs(userNumber) !== userNumber || userNumber === 0) {
        userNumber = +prompt('Invalid. You should enter a number bigger than zero')
    }
    for (let i = 1; i <= userNumber; i += 2) {
        result += i
    }
    console.log(result)
}
// 4) Напишіть нескінченний цикл, який закінчується командою break, коли Math.random() > 0.7. Виведіть в консоль число,
// на якому переривається цикл та відобразіть в консолі кількість ітерацій циклу.
//     Loop was finished because of: <number>
//     Number of attempts: <number>
//
{
    let iterations = 0;
    while (true) {
        iterations++
        let x = Math.random();
        if (x > 0.7) {
            console.log(`Loop was finished because of ${x}\nNumber of attempts: ${iterations}`)
            break;
        }
    }
}
//     5) Напишіть цикл від 1 до 50, в якому будуть виводитися числа по черзі від 1 до 50, при цьому:
//     Якщо число ділиться на 3 без залишку, то виведіть не це число, а слово 'Fizz';
//     Якщо число ділиться на 5 без залишку, то виведіть не це число, а слово 'Buzz';
//     Якщо число ділиться і на 3 і на 5 одночасно, то виведіть не це число, а слово 'FizzBuzz';
//
{
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 5 === 0) {
            console.log('Buzz')
        } else if (i % 3 === 0) {
            console.log('Fizz')
        } else {
            console.log(i)
        }
    }
}
//     6) Напишіть програму, яка знайде всі роки, коли 1 січня випадає на неділю у період між 2015 та 2050 роками
//     включно (зверніть увагу, що 1 січня в лапках).
//     "1st of January" is being a Sunday in <year>
{
    let day = 1;
    let month = 1;
    let year = 2015;
    for (let i = 0; ; i++) {
        year++
        let date = new Date(`${year}-${month}-${day}`)
        if (date.getDay() === 0) {
            console.log(`"1st of January" is being a Sunday in ${year}`)
        }
        if (year === 2050) {
            break;
        }
    }
}