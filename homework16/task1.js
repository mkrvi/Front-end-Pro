// 1.Напишите функцию, которая ищет подходящие фильмы из заданного списка. (Capture1.jpg)
// Используйте значение из инпута #search и событие input, чтобы подсчитать количество фильмов, которые удовлетворяют
// строке поиска. Выведите общий результат найденных фильмов в #filmsCount

const input = document.getElementById('search');

input.addEventListener('input', function () {
    const filmsCount = document.getElementById('filmsCount');
    const films = document.querySelectorAll('li');
    let searchingText = input.value.toLowerCase()
    let filteredArray = [...films].filter((film) => {
        return film.textContent.toLowerCase().includes(searchingText)
    })
    filmsCount.textContent = `${filteredArray.length}`
})
