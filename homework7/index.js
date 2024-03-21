// 1) Напишіть програму, яка продемонструє роботу з масивом. Створіть масив із восьми елементів:
//     '455' 87.15 true undefined null 'false' [] {}
// Виведіть інформацію о типі даних кожного елемента в консолі. Додайте значення 7 до кожного елементу масива і
// виведіть отримані значення в консолі.
//
{
    const arr = ['455', 87.15, true, undefined, null, 'false', [], {}]
    for (let i = 0; i < arr.length; i++) {
        console.log(typeof arr[i])
        console.log(arr[i] + 7)
    }
}
// 2) Напишіть програму, яка питає у користувача число і створює масив numbers з випадкових цілих чисел в діапазоні
// від 0 до 10, довжина якого дорівнює числу, яке ввів користувач.
//     Виведіть створений масив numbers в консолі.
//     Скопіюйте массив numbers в новий масив. Кожен третій елемент нового масиву помножте на 3.
// Виведіть новостворений масив в консолі.
//
{
    let number = +prompt('Enter number');
    let numbers = [];
    for (let i = 0; i < number; i++) {
        numbers[i] = Math.round(Math.random() * 10)
    }
    console.log(numbers)
    let newNumbers = JSON.parse(JSON.stringify(numbers));
    for (let i = 2; i < number; i+=3) {
        newNumbers[i] = newNumbers[i] * 3
    }
    console.log(newNumbers)
}
// 3) Початковий код шукаємо тут. Зверніть увагу на підключення масиву співробітників. Він знаходиться в окремому файлі
// (employee.js) і підключен вище основного js файлу (index.js), де буде розташована ваше дз.
// Таким чином масив employee буде доступний в файлі index.js, хоча по факту там знаходитись не буде.
//
//  а) Створіть массив, який складається з повних імен всіх співробітників.
//      ['Karan Duffy', 'Brax Dalton', 'Jody Lam', ...]
//
{
    const fullNames = [];
    for (let i = 0; i < employee.length; i++) {
        fullNames[i] = `${employee[i].name} ${employee[i].surname}`
    }
    console.log(fullNames)
}
// b) Знайдіть середнє значення всіх зарплат співробітників.
//     const average = /* some number */;
//
{
    let result = 0
    for (let i = 0; i < employee.length; i++) {
        result += employee[i].salary
    }
    const average = result / employee.length
    console.log(average)
}

// с) Виведіть в консоль імʼя чоловіка-пільговика (ключ isPrivileges=true) з самою великою зарплатою.
{
    let maxPrivilegesMan = ''
    let max = -Infinity
    for (let i = 0; i < employee.length; i++) {
        if(employee[i].isPrivileges && employee[i].salary > max) {
                max = employee[i].salary
                maxPrivilegesMan = `${employee[i].name} ${employee[i].surname}`
            }
        }
    console.log(maxPrivilegesMan);
}

// e) Виведіть в консоль інформацію, скільки всього заробили співробітники за весь час роботи в одній строці.
// Формат відповіді: <імʼя прізвище> - <сума>.
//     Karan Duffy - 10100
//     Brax Dalton - 14400
//     Jody Lam - 1440
//     ...
{
    let result = ''
    for (let i = 0; i < employee.length; i++) {
        let richEmployee = employee[i].workExperience * employee[i].salary
        result += `${employee[i].name} ${employee[i].surname} - ${richEmployee}\n`
    }
    console.log(result)
}