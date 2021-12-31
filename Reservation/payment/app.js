const circle = document.getElementById('circle')
const circle_drop = document.getElementById('drop-off-circle')

circle.addEventListener('click', ()=>{
    circle.classList.toggle('active')
})

circle_drop.addEventListener('click', ()=>{
    circle_drop.classList.toggle('active')
})
