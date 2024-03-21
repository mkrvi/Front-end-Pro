// Задача:
//  Напишіть програму, яка питає у користувача дату в форматі YYYY-MM-DD і виводить в консоль всі дати від заданої дати
//  до сьогоднішньої.
//
//  Обовʼязкові критерії:
// дата повинна бути валідна і в строго заданому форматі YYYY-MM-DD (краще за все перевіряється за допомогою регулярних
// виразів);
// формат виводу даних довільний, але обовʼязково відображати день;
//
// tips: Зверніть увагу на граничні дані, після останнього дня в червні, дата перейшла до липня. Це автоматично
// відбувається, якщо працювати з датою через клас Date

const initialDate = prompt('Enter date YYYY-MM-DD', '2023-03-30')

const dateRegexp = /^\d{4}-\d{2}-\d{2}$/
if (!dateRegexp.test(initialDate)) {
    console.error('Enter valid data')
}

const dateFrom = new Date(initialDate)

const date = {
    from: dateFrom,
    to: new Date(),
    [Symbol.iterator]() {
        let currentDate = this.from;
        return{
            next() {
                if (currentDate <= date.to) {
                    let newDate = `${currentDate.getDate()}-${currentDate.getMonth()+1}-${currentDate.getFullYear()}`
                    currentDate.setDate(currentDate.getDate()+1)
                    return {value: newDate, done: false}
                } else {
                    return {value: undefined, done: true}
                }
            }
        }
    }
};

for (let value of date) {
    console.warn('Date: ', value );
}