// 2) Напишите функцию, которая создает нумерованный подсписок по клику на опцию li. (Capture2.jpg)
// Нажав на любой тег, должен появится нумерованный список ингридиентов из данного меню. Вы можете использовать
// представленный объект.
//
//     const INGREDIENTS = {
//     "cocoa": ["cocoa powder", "milk", "sugar"],
//     "cappuccino": ["milk", "coffee"],
//     "smoothie": ["banana", "orange", "sugar"],
//     "matcha frappe": ["matcha", "milk", "ice"]
// };
// Используйте делегирование событий для реализации.

const INGREDIENTS = {
    "cocoa": ["cocoa powder", "milk", "sugar"],
    "cappuccino": ["milk", "coffee"],
    "smoothie": ["banana", "orange", "sugar"],
    "matcha frappe": ["matcha", "milk", "ice"]
};

const ul = document.querySelector('#menu');
ul.addEventListener('click', function (event) {
    const ingredientsList = INGREDIENTS[event.target.textContent];
    const newList = document.createElement('ol');
    const target = event.target.querySelector('ol')
    if (target) {
        target.remove()
    } else if (ingredientsList) {
        for (let ingredient of ingredientsList) {
            const item = document.createElement("li");
            item.textContent = ingredient;
            newList.append(item);
        }
        event.target.append(newList)
    }
})
