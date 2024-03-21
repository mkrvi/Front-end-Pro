// 3) Для цього завдання вам знадобиться файл index1.html, який закріплений внизу.
//     Запросіть у користувача число і додайте в середину форми теги <input> (перед кнопкою Register), кількість яких
//     дорівнює цьому числу.
//     Вимоги до тегу <input>:
// кожен інпут повинен мати клас input-item, value = `Input ${index}`;
// останній інпут повинен мати додатковий клас margin-zero;
// створіть власний клас, з властивістю background-color і додайте його всім непарним інпутам;
// очістіть значення кожному третьому інпуту і задайте йому атрибут placeholder з будь-яким текстом.
//     Очікуваний результат закріплено в кінці.
//
let number = +prompt('Enter number');
for (let i = number; i >= 1; i--) {
    let inputSubmit = document.querySelector('.button input')
    let input = document.createElement('input');
    let value = `Input ${i}`;
    input.className = 'input-item';
    input.value = value;
    if (i === number) {
        input.classList.add('margin-zero')
    }
    if (i % 2 !== 0) {
        input.classList.add('extra-class');
    }
    if (i % 3 === 0) {
        input.value = '';
        input.placeholder = 'Some text'
    }
    inputSubmit.before(input)
}
