// 1) Напишіть функцію, яка змінює фоновий колір тексту останнього параграфу в блоці <body>, а також функцію, яка змінює
// блоки footer и main місцями.

function changeColor(color) {
    let lastP = document.querySelector('p:last-of-type')
    lastP.style.backgroundColor = color
}
changeColor('blue');

 function switchPlaces() {
     let main = document.querySelector('#main');
     let footer = document.querySelector('#footer')
     footer.prepend(main)
 }
 switchPlaces();
