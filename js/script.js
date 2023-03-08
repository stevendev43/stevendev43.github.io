let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

var sobreText = document.getElementById('sobre-text')
sobreText.addEventListener("click", clicked)

function clicked() {
    alert("Conoceme que no te vas arrepentir")
}

var contactText = document.getElementById('contact-text')
contactText.addEventListener("click", clicked)

function clicked () {
    alert("Gracias por contactarnos y a la brevedad te responderemos.!")
}