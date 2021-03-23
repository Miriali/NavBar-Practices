const hamburguer = document.querySelector('#check');
const menu = document.querySelector('.menu-navegacion');
const close = document.querySelector('.close');

hamburguer.addEventListener('click', () => {
    menu.classList.add('spread')
})

close.addEventListener('click', () => {
    menu.classList.remove('spread')
})