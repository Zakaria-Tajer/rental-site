const circle = document.getElementById('circle')
const circle_drop = document.getElementById('drop-off-circle')
const chevron_left = document.getElementById('chevron-left')



const Prepayment = document.getElementById('Prepayment')
const Discount = document.getElementById('Discount')
const Insurance = document.getElementById('Insurance')
const total = document.getElementById('total')
const carName = document.getElementById('car-name')
const carImg = document.getElementById('car-img')
const img_wr = document.getElementById('img-wr')

const cardOwner = document.getElementById('cardOwner')
const cardNumber = document.getElementById('cardNumber')
const year_month = document.getElementById('year-month')
const ccv = document.getElementById('ccv')
const card_info = document.getElementById('card-info')


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

window.onload = ()=> {
    const value = localStorage.getItem('price')
    const coupon = localStorage.getItem('discount')
    const car_Name = localStorage.getItem('carName')
    const electriqueMotos = localStorage.getItem('electrique')
    const HybirdPerc = localStorage.getItem('HybirdPerc')
    console.log(HybirdPerc);

    const newImage = document.createElement('img')
    newImage.classList.add('created-img')
    img_wr.appendChild(newImage)
    carImg.parentElement.removeChild(carImg)
    
    for (let i = 0; i < localStorage.length; i++) {
        carName.textContent = `${car_Name}`
        Prepayment.textContent = value
        Discount.textContent =  coupon
        
        
        if(car_Name === 'Motorcycle' || car_Name === 'Citadine'){
            let percentage = parseInt(coupon) * 0.1
            let added_numbers = parseInt(value) * percentage
            let elctriqePercentage =  parseInt(electriqueMotos)
            // let totales = added_numbers + parseInt(Insurance.textContent)
            let pre_totales = parseInt(value) + added_numbers
            let pre_sum = pre_totales + parseInt(Insurance.textContent)
            let Total = pre_sum + elctriqePercentage
            // console.log(Total);
            total.textContent = `${Total} €`
         }else if(car_Name === 'Citadine' && HybirdPerc === '9%'){
             console.log('hi');
             localStorage.removeItem('discount')
                localStorage.removeItem('electrique')
             let percentage = parseInt(coupon) * 0.1
             let added_numbers = parseInt(value) * percentage
             let HybirdPercentage =  parseInt(HybirdPerc)
             console.log(HybirdPercentage);
            //   let totales = added_numbers + parseInt(Insurance.textContent)
             let pre_totales = parseInt(value) + added_numbers
             let pre_sum = pre_totales + parseInt(Insurance.textContent)
             let TotalHybird = pre_sum + HybirdPercentage
             console.log(TotalHybird);
             total.textContent = `${TotalHybird} €`
            
        }
        
        // localStorage.removeItem('electrique')
        // localStorage.removeItem('price')
        // localStorage.removeItem('discount')
        // localStorage.removeItem('HybirdPerc')
        switch (car_Name) {

            case 'Motorcycle':
               newImage.src = '../imgs/195885_2020_HONDA_CBR1000RR-R_SP.jpg'
                break;
            case 'Citadine':
                newImage.src = '../imgs/HTUpvx.jpg'
            break
            default:
                break;
        }
    }

}


