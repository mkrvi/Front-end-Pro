// 1) Создайте Promise, которое должно выполнять следующие действия:
//     через 2 секунды он должен создать переменную number со случайным значением от 1 до 6;
// если 1 <= number <= 5, вывести в консоли сообщение "Start the game..." и вернуть число;
// если number = 6, вернуть ошибку;
// Затем должна быть запущена функция-потребитель (than()), которая выполняет следующие
// действия:
//     если number = 1, вывести сообщение "Stay here" ;
// если number >= 2, вывести сообщение "Go <number> steps" .
//     Используйте catch(), чтобы отловить ошибку и выведите сообщение "Exit" .
//
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const number = Math.floor(Math.random() * 6 + 1)
        if (number >= 1 && number <= 5){
            console.log('Start the game...')
            resolve(number)
        } else {
            reject('Exit')
        }
    }, 2000)
})
promise
    .then((number) => {
        if (number === 1) {
            console.log('Stay here')
        } else {
            console.log(`Go ${number} steps`)
        }
    })
    .catch((error) => {
        console.error(error)
    })

// 2) Создайте функцию goToShop(), которая возвращает успешный Promise с количеством купленных продуктов
// (число взять из prompt()). Создайте функцию makeDinner(), которая возвращает Promise с таймером. Через 3 секунды
// промис должен завершиться с текстом ‘Bon Appetit’.
// Если функция goToShop() возвращает меньше чем 4 продукта, то вернуть отклоненный промис с текстом ‘Too low products’,
// иначе вызвать функцию makeDinner() и вывести в консоль результат работы функции.
//     Если промис возвращается с ошибкой, то вывести ошибку в консоль в console.error();

function goToShop() {
    return new Promise((resolve) => {
        let products = +prompt('Enter number')
        resolve(products)
    })
}
function makeDinner() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Bon Appetit');
        }, 3000)
    })
}
goToShop()
    .then((products) => {
        if (isNaN(+products) || products <= 0) {
            return Promise.reject('Error. Please enter a positive number');
        } else if (products < 4) {
            return Promise.reject('Too low products')
        } else {
            return makeDinner()
        }
        })
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.error(error);
    });
