const menu = document.getElementById('show-menu')
const slide_menu = document.getElementById('slide-menu')
const close_menu = document.getElementById('close')

const chevron = document.getElementById('chevron')
const input_field = document.getElementById('input-field')
const shrink = document.getElementById('shrink')

const empty = document.getElementById('empty')
const chevron_empty = document.getElementById('chevron-empty')

const select = document.getElementById('select')
const chevron_select = document.getElementById('chevron-select')




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
    chevron.classList.toggle('active')
    shrink.classList.toggle('active')
})


chevron_right.addEventListener('click', ()=> {
    hide.classList.toggle('active')
    chevron_right.classList.toggle('active')
})


rem.addEventListener('click', ()=>{
    window.location.assign('./payment/index.html')
})


chevron_empty.addEventListener('click', ()=>{
    empty.classList.toggle('active')
    chevron_empty.classList.toggle('active')

})
chevron_select.addEventListener('click', ()=> {
    select.classList.toggle('active')
    chevron_select.classList.toggle('active')
})
