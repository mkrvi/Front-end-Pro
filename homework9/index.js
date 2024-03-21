// 1) Напишіть функцію fillArray, яка створює масив і заповнює його заданим значенням.
//     let array = fillArray(3, 'qwerty');
// console.log(array); // ['qwerty', 'qwerty', 'qwerty']
// де 3 - це довжина масиву, а 'qwerty' значення кожного елементу масива
//
{
    function fillArray(length, value) {
        return new Array(length).fill(value)
    }
    let array = fillArray(3, 'qwerty');
    console.log(array);
}
// 2) Напишіть функцію reverseArray, яка перевертає значення масиву задом наперед.
//     let array = ['My', 'life', '-', 'my', 'rules'];
// let result = reverseArray(array);
// console.log(result); // ['rules', 'my', '-', 'life', 'My'];
{
    function reverseArray(arr) {
        return arr.reverse();
    }
    let array = ['My', 'life', '-', 'my', 'rules'];
    let result = reverseArray(array);
    console.log(result);
}
// 3) Напишіть функцію filterArray, яка очищує масив від небажаних значень (false, undefined, '', 0, null, NaN).
//     let array = [0, 1, 2, null, undefined, 'qwerty', false, NaN];
// let result = filterArray(array);
// console.log(result); // [1,2, 'qwerty'];
//
{
    function filterArray(arr) {
        return arr.filter((item) => {
            return !!item
        })
    }
    let array = [0, 1, 2, null, undefined, 'qwerty', false, NaN];
    let result = filterArray(array);
    console.log(result)
}
// 4) Напишіть функцію spliceFour, яка видаляє 4й елемент масиву і замінює його строкою 'JavaScript'
// let array = [1, 2, 3, 4, 5];
// let result = spliceFour(array);
// console.log(result); // [1, 2, 3, 'JavaScript', 5];
//
{
    function spliceFour(arr) {
        [...arr].splice(3, 1, 'JavaScript');
        return arr
    }
    let array = [1, 2, 3, 4, 5];
    let result = spliceFour(array)
    console.log(result)
}
// 5) Напишіть функцію joinArray, яка перетворює масив в строку, з'єднуючи елементи заданим символом.
// let array = [1, 2, 3, 4, 5];
// let result = joinArray(array, '%');
// console.log(result); // 1%2%3%4%5
//
{
    function joinArray(arr, symbol) {
        return arr.join(symbol)
    }
    let array = [1, 2, 3, 4, 5];
    let result = joinArray(array, '%');
    console.log(result);
}
// 6) Напишіть функцію joinStr, яка повертає рядок, який утворений з конкатинацїї усіх рядків, які передані
// в якості аргументів функції через кому.
//     let string1 = joinStr(0);
// console.log(string1); // ''
// let string2 = joinStr(1,'hello',3, 'world');
// console.log(string2); // 'hello,world'
// let string3 = joinStr('g','o', 0, '0', null, 'd', {});
// console.log(string3); // 'g,o,0,d'
{
    function joinStr(...arguments) {
        let arr = new Array(arguments).fill(arguments).flat()
        let newArr = arr.filter(item => typeof item === 'string')
        return newArr.join()
    }

    let string1 = joinStr(0);
    console.log(string1); // ''
    let string2 = joinStr(1, 'hello', 3, 'world');
    console.log(string2); // 'hello,world'
    let string3 = joinStr('g','o', 0, '0', null, 'd', {});
    console.log(string3); // 'g,o,0,d'
}
