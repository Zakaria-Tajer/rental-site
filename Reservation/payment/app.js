const circle = document.getElementById('circle')
const circle_drop = document.getElementById('drop-off-circle')
const chevron_left = document.getElementById('chevron-left')


const Prepayment = document.getElementById('Prepayment')
const Discount = document.getElementById('Discount')
// const Insurance = document.getElementById('Insurance')
const total = document.getElementById('total')
const carName = document.getElementById('car-name')
const carImg = document.getElementById('car-img')
// const img_wr = document.getElementById('img-wr')

const cardOwner = document.getElementById('cardOwner')
const cardNumber = document.getElementById('cardNumber')
const year_month = document.getElementById('year-month')
const ccv = document.getElementById('ccv')
const card_info = document.getElementById('card-info')
const Dummy_day = document.getElementById('days')

card_info.addEventListener('click',() => {
    if(cardOwner.value === ''){
       alert('Blank Fields Please Enter Your Informations')
    }else {
        alert(`Tnx for choosing Us`)
    }

})

circle.addEventListener('click', ()=>{
    circle.classList.toggle('active')
})

circle_drop.addEventListener('click', ()=>{
    circle_drop.classList.toggle('active')
})
chevron_left.addEventListener('click',()=> {
    location.assign('../index.html')
})

let value = localStorage.getItem('actual_price')
// const coupon = localStorage.getItem('discount')
let car_Name = localStorage.getItem('carName')
let electriquePercentage = localStorage.getItem('electriEnr')
let HybirdPerctage = localStorage.getItem('HybirdPerc')
let DieselPerentage = localStorage.getItem('DieselPer')
let EssencePrecentage = localStorage.getItem('Essence')
let numDays = localStorage.getItem('days')

if(numDays === null){
    Dummy_day.textContent = `1 Day`
}else {
    Dummy_day.textContent = `${numDays} days`
}

const newImage_Car = document.createElement('img')
const img_wr = document.getElementById('img-wr')
newImage_Car.classList.add('created-img')
img_wr.appendChild(newImage_Car)
carImg.parentElement.removeChild(carImg)

let Sums = localStorage.getItem('Total_Of_Sums')
console.log(Sums);
for (let i = 0; i < localStorage.length; i++) {
    carName.textContent = `${car_Name}`
    Prepayment.textContent = value
    // Discount.textContent =  coupon

    switch (car_Name) {
        case 'Motorcycle':
            newImage_Car.src = '../imgs/195885_2020_HONDA_CBR1000RR-R_SP.jpg'
            Discount.textContent = electriquePercentage
            total.textContent = `${parseFloat(Sums).toFixed(2)} €`
            break;
        default:
            break;
    }
    if(car_Name === 'Citadine' && electriquePercentage){
        Discount.textContent = electriquePercentage
        newImage_Car.src = '../imgs/HTUpvx.jpg'
        total.textContent = `${parseFloat(Sums).toFixed(2)}€`
    }
    if(car_Name === 'Citadine' && HybirdPerctage ){
        newImage_Car.src = '../imgs/HTUpvx.jpg'
        Discount.textContent = HybirdPerctage
        total.textContent = `${parseFloat(Sums).toFixed(2)}€`
    }
    if(car_Name === 'Citadine' && DieselPerentage ){
        newImage_Car.src = '../imgs/HTUpvx.jpg'
        Discount.textContent = DieselPerentage
        total.textContent = `${parseFloat(Sums).toFixed(2)}€`
    }
    if(car_Name === 'Citadine' && EssencePrecentage ){
        newImage_Car.src = '../imgs/HTUpvx.jpg'
        Discount.textContent = EssencePrecentage
        total.textContent = `${parseFloat(Sums).toFixed(2)}€`
    }



    if(car_Name === 'Compact' && HybirdPerctage ){
        newImage_Car.src = '../imgs/HTUpvx.jpg'
        Discount.textContent = HybirdPerctage
        total.textContent = `${parseFloat(Sums).toFixed(2)}€`
    }
    if(car_Name === 'Compact' && DieselPerentage ){
        newImage_Car.src = '../imgs/HTUpvx.jpg'
        Discount.textContent = DieselPerentage
        total.textContent = `${parseFloat(Sums).toFixed(2)}€`
    }
    if(car_Name === 'Compact' && EssencePrecentage ){
        newImage_Car.src = '../imgs/HTUpvx.jpg'
        Discount.textContent = EssencePrecentage
        total.textContent = `${parseFloat(Sums).toFixed(2)}€`
    }


    if(car_Name === 'Berline' && HybirdPerctage ){
        newImage_Car.src = '../imgs/Acura-Type-S-02.jpg'
        Discount.textContent = HybirdPerctage
        total.textContent = `${parseFloat(Sums).toFixed(2)}€`
    }
    if(car_Name === 'Berline' && DieselPerentage ){
        newImage_Car.src = '../imgs/Acura-Type-S-02.jpg'
        Discount.textContent = DieselPerentage
        total.textContent = `${parseFloat(Sums).toFixed(2)}€`
    }
    if(car_Name === 'Berline' && EssencePrecentage ){
        newImage_Car.src = '../imgs/Acura-Type-S-02.jpg'
        Discount.textContent = EssencePrecentage
        total.textContent = `${parseFloat(Sums).toFixed(2)}€`
    }

    if(car_Name === 'Commercial' && DieselPerentage ){
        newImage_Car.src = '../imgs/USC80FOT115A021001.jpg'
        Discount.textContent = HybirdPerctage
        total.textContent = `${parseFloat(Sums).toFixed(2)}€`
    }

    if(car_Name === 'Construction' && DieselPerentage ){
        newImage_Car.src = '../imgs/CM20200303-d9659-aba32.jpg'
        Discount.textContent = DieselPerentage
        total.textContent = `${parseFloat(Sums).toFixed(2)}€`
    }
    if(car_Name === 'Construction' && EssencePrecentage ){
        newImage_Car.src = '../imgs/CM20200303-d9659-aba32.jpg'
        Discount.textContent = EssencePrecentage
        total.textContent = `${parseFloat(Sums).toFixed(2)}€`
    }

    if(car_Name === 'Trucks' && DieselPerentage ){
        newImage_Car.src = '../imgs/CM20200303-d9659-aba32.jpg'
        Discount.textContent = DieselPerentage
        total.textContent = `${parseFloat(Sums).toFixed(2)}€`
    }
         localStorage.removeItem('discount')
    localStorage.removeItem('electriEnr')
    localStorage.removeItem('HybirdPerc')
    localStorage.removeItem('Essence')
    localStorage.removeItem('DieselPer')
    localStorage.removeItem('Total_Of_Sums')
    localStorage.removeItem('days')

}