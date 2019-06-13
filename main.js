let menu = document.querySelector('.menu');
let nav = document.getElementById('nav');
let gradient = document.querySelector('.colors');
document.getElementById('burger').addEventListener('click', function () {
    menu.classList.toggle('hide');
});

Array.from(menu.children).forEach(el => {
    el.addEventListener("click", () => {
        menu.classList.toggle('hide');
    });
});