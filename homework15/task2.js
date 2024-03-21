// 2) Напишіть функцію, яка питає у користувача дозволу додати картинку (confirm()) і у разу згоди додає картинку на
// сторінку (посилання на картинку користувач повинен задавати самостійно).
// _
// HTML-файл повинен мати наступну структуру в блоці <body> :
// <div id="wrapper">
//     <h1>Images</h1>
// </div>
// Очікуваний результат закріплено в кінці.
//
function addImg() {
    let permit = confirm('Do you want to add an img?');
    if (permit === true) {
        let userImage = prompt('Please add url');
        let h1 = document.querySelector('#wrapper h1');
        let img = document.createElement("img");
        img.setAttribute('src', userImage);
        h1.after(img)
    }
}
addImg();
