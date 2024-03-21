// 1) Створіть 3 змінні з наступними значеннями:
let string1 = "Aquamarine Black Blue Brown Chocolate ";
let string2 = "Green Lime Olive Orange Purple ";
let string3 = "Red Tomato Violet White Yellow";

// а) Створіть функцію joinColor(), яка обʼєднює всі 3 строки в одну. Функція повинна працювати з будь-якою
// кількістю вхідних строк.
// let colors = joinColor(string1, string2, string3); // Aquamarine Black Blue Brown Chocolate Green Lime
// Olive Orange Purple Red Tomato Violet White Yellow
//

function joinColor(...strings) {
    let str = ''
    return str.concat(...strings)
}
let colors = joinColor(string1, string2, string3);
console.log(colors)

// b) Створіть функцію indexColor(), яка повертає індекс першого входження вхідної строки в строці.
// Функція приймає два параметри:
//     строку, в якої виконується пошук (наприклаж colors);
// строку, індекс якої, потрібно знайти
// let greenIndex = indexColor(colors, 'Green'); // 38
//
{
    function indexColor(string, searchingValue) {
        return string.indexOf(searchingValue, string)
    }
    let greenIndex = indexColor(colors, 'Green');
    console.log(greenIndex)
}
// c) Створіть функцію isColorIncludes(), яка перевіряє чи є такий колір в заданій строці чи ні. Зверніть увагу,
// що функція повинна працювати з будь-яким регістром.
// console.log(isColorIncludes(colors, 'Black')); // true
// console.log(isColorIncludes(colors, 'BlAcK')); // true
// console.log(isColorIncludes(colors, 'Lilac')); // false
//
{
    function isColorIncludes(string, searchingValue) {
        let str = string.toLowerCase()
        let value = searchingValue.toLowerCase()
        return str.includes(value)
    }
    console.log(isColorIncludes(colors, 'Black')); // true
    console.log(isColorIncludes(colors, 'BlAcK')); // true
    console.log(isColorIncludes(colors, 'Lilac')); // false
}
// d) Створіть функцію replaceColor(), яка знаходить строку в заданій строці і замінює іі на іншу
// let result = replaceColor(string2, 'Olive', 'Grey'); // "Green Lime Grey Orange Purple "
//
{
    function replaceColor(string, valueToReplace, newValue) {
        return string.replace(valueToReplace, newValue)
    }
    let result = replaceColor(string2, 'Olive', 'Grey');
    console.log(result)
}
// e) Створіть функцію splitColors(colors, numbers), яка розбиває вхідну строку на окремі слова і повертає тільки ті
// слова, кількість яких не менше ніж число, яке передане в якості другого аргументу функції.
//     let filteredColors = splitColors(string1, 6); // "Aquamarine Chocolate"
//
{
    function splitColors(colors, numbers) {
        let result = colors.split(' ')
        return result.filter(word => word.length >= numbers).join(' ')
    }
    let filteredColors = splitColors(string1, 6);
    console.log(filteredColors)
}
// f) Створіть функцію calculateSpaces(), яка рахує кількість пробілів в строці.
//     let count = calculateSpaces(string3); // 4
function calculateSpaces(string) {
    return string.length - string.replaceAll(' ', '').length
}
let count = calculateSpaces(string3);
console.log(count)
