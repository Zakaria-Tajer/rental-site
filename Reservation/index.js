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

const containers = document.querySelectorAll('.container')

const rent_btn = document.querySelectorAll('#rent-btn') 

const choices = document.querySelectorAll('#choice')
const choice_checked = document.querySelectorAll('#choice-checked')


const hide = document.getElementById('hide')
const chevron_right = document.getElementById('chevron-right')

const star = document.getElementById('icons-wrapper')

console.log(choice_checked);

for (let i = 0; i < rent_btn.length; i++) {
    rent_btn[i].addEventListener('click',()=> {
        containers[i].classList.toggle('active')
        rent_btn[i].classList.toggle('active')
        choices[i].classList.toggle('active')
    })
}
for (let i = 0; i < choice_checked.length; i++) {
    choice_checked[i].addEventListener('click',()=> {
        choice_checked[i].classList.toggle('active')
    })
}


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


chevron_empty.addEventListener('click', ()=>{
    empty.classList.toggle('active')
    chevron_empty.classList.toggle('active')

})
chevron_select.addEventListener('click', ()=> {
    select.classList.toggle('active')
    chevron_select.classList.toggle('active')
})

function verfying(checkbox) {
    let checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked =  false
    })
}
