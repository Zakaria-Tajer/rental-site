const circle = document.getElementById('circle')
const circle_drop = document.getElementById('drop-off-circle')
const chevron_left = document.getElementById('chevron-left')



const Prepayment = document.getElementById('Prepayment')
const Discount = document.getElementById('Discount')
const Insurance = document.getElementById('Insurance')
const total = document.getElementById('total')
const carName = document.getElementById('car-name')

// console.log(Insurance.textContent);


circle.addEventListener('click', ()=>{
    circle.classList.toggle('active')
})

circle_drop.addEventListener('click', ()=>{
    circle_drop.classList.toggle('active')
})
chevron_left.addEventListener('click',()=> {
    location.assign('../index.html')
})

window.onload = ()=> {
    for (let i = 0; i < localStorage.length; i++) {
        const value = localStorage.getItem('price')
        const coupon = localStorage.getItem('discount')
        const car_Name = localStorage.getItem('carName')
        carName.textContent = `${car_Name}`
        Prepayment.textContent = value
        Discount.textContent =  coupon



        let percentage = parseInt(coupon) * 0.1
        let added_numbers = parseInt(value) * percentage
        // let totales = added_numbers + parseInt(Insurance.textContent)
        let totales = parseInt(value) + added_numbers
        let sum = totales + parseInt(Insurance.textContent)
        console.log(sum);
        total.textContent = `${sum} €`
        localStorage.removeItem('price')
        localStorage.removeItem('discount')
    }

}
