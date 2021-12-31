const menu = document.getElementById('show-menu')
const slide_menu = document.getElementById('slide-menu')
const close_menu = document.getElementById('close')

const chevron = document.getElementById('chevron')
const input_field = document.getElementById('input-field')

const hide = document.getElementById('hide')
const chevron_right = document.getElementById('chevron-right')

const star = document.getElementById('icons-wrapper')

const rem = document.getElementById('rem')
// const Motorcycle = document.getElementById('Motorcycle')

menu.addEventListener('click', ()=> {
    slide_menu.classList.toggle('active')
})

close_menu.addEventListener('click', ()=> {
    slide_menu.classList.toggle('active')
})

chevron.addEventListener('click', ()=> {
    input_field.classList.toggle('active')
})
chevron_right.addEventListener('click', ()=> {
    hide.classList.toggle('active')
    chevron_right.classList.toggle('active')
})


rem.addEventListener('click', ()=>{
    window.location.assign('./payment/index.html')
})

