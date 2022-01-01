const menu = document.getElementById('show-menu')
const slide_menu = document.getElementById('slide-menu')
const close_menu = document.getElementById('close')


menu.addEventListener('click', ()=> {
    slide_menu.classList.toggle('active')
})

close_menu.addEventListener('click', ()=> {
    slide_menu.classList.toggle('active')
})

function redirect(){
    console.log(1);
    location.assign('../Reservation/index.html')
}