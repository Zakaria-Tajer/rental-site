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

const value = localStorage.getItem('price')
const coupon = localStorage.getItem('discount')
const car_Name = localStorage.getItem('carName')
const electriqueMotos = localStorage.getItem('electrique')
const HybirdPerc = localStorage.getItem('HybirdPerc')
const DieselPer = localStorage.getItem('Diesel')
const EssencePre = localStorage.getItem('Essence')

const newImage = document.createElement('img')
newImage.classList.add('created-img')
img_wr.appendChild(newImage)
carImg.parentElement.removeChild(carImg)

for (let i = 0; i < localStorage.length; i++) {
    carName.textContent = `${car_Name}`
    Prepayment.textContent = value
    Discount.textContent =  coupon

    

switch (car_Name) {

    case 'Motorcycle':
       newImage.src = '../imgs/195885_2020_HONDA_CBR1000RR-R_SP.jpg'
       Discount.textContent = electriqueMotos
       let percentage = parseInt(coupon) * 0.1
       let added_numbers_Moto = parseInt(value) * percentage
       let elctriqePercentage =  parseInt(electriqueMotos)
       // let totales = added_numbers + parseInt(Insurance.textContent)
       let pre_totales = parseInt(value) + added_numbers_Moto
       let pre_sum_Moto = pre_totales + parseInt(Insurance.textContent)
       let Total_Moto = pre_sum_Moto + elctriqePercentage
       // console.log(Total);
       total.textContent = `${Total_Moto} €`
        break;
    case 'Citadine':
        Discount.textContent =  HybirdPerc
        localStorage.removeItem('electrique')
        let percentage_Hybrid_Citadine = parseInt(HybirdPerc) * 0.1
        let added_numbers = parseInt(value) * percentage_Hybrid_Citadine
        let percentage_Hybrid_Citadine_Percentage =  parseInt(HybirdPerc)
        // console.log(hybridPren);
        // let totales = added_numbers + parseInt(Insurance.textContent)
        let pre_totales_citadine = parseInt(value) + added_numbers
        let pre_sum = pre_totales_citadine + parseInt(Insurance.textContent)
        let Total = pre_sum + percentage_Hybrid_Citadine_Percentage
        total.textContent = `${Total} €`
        newImage.src = '../imgs/HTUpvx.jpg'
        break
    case 'Compact':
        Discount.textContent =  HybirdPerc
        localStorage.removeItem('electrique')
        let percentageHybrid = parseInt(HybirdPerc) * 0.1
        let added_numbers_Compact = parseInt(value) * percentageHybrid
        let hybridPren =  parseInt(HybirdPerc)
        console.log(hybridPren);
        // let totales = added_numbers + parseInt(Insurance.textContent)
        let pre_totales_compact = parseInt(value) + added_numbers_Compact
        let pre_sum_compact = pre_totales_compact + parseInt(Insurance.textContent)
        let Total_compact = pre_sum_compact + hybridPren
        // console.log(Total);
        total.textContent = `${Total_compact} €`
        newImage.src = '../imgs/990208.jpg'
        break
    case 'Berline':
        Discount.textContent =  HybirdPerc
        localStorage.removeItem('electrique')
        let percentageHybrid_Berline = parseInt(HybirdPerc) * 0.1
        let added_numbers_Berline = parseInt(value) * percentageHybrid_Berline
        let hybridPren_berline =  parseInt(HybirdPerc)
        console.log(hybridPren_berline);
        // let totales = added_numbers + parseInt(Insurance.textContent)
        let pre_totales_Berline = parseInt(value) + added_numbers_Berline
        let pre_sum_Berline = pre_totales_Berline + parseInt(Insurance.textContent)
        let Total_Berline = pre_sum_Berline + hybridPren_berline
        // console.log(Total);
        total.textContent = `${Total_Berline} €`
        newImage.src = '../imgs/Acura-Type-S-02.jpg'
        break
    case 'Commercial':
        Discount.textContent =  DieselPer
        localStorage.removeItem('electrique')
        let percentageHybrid_Commercial = parseInt(DieselPer) * 0.1
        let added_numbers_Commercial = parseInt(value) * percentageHybrid_Commercial
        let hybridPren_Commercial =  parseInt(DieselPer)
        console.log(hybridPren_Commercial);
        // let totales = added_numbers + parseInt(Insurance.textContent)
        let pre_totales_Commercial = parseInt(value) + added_numbers_Commercial
        let pre_sum_Commercial = pre_totales_Commercial + parseInt(Insurance.textContent)
        let Total_Commercial = pre_sum_Commercial + hybridPren_Commercial
        // console.log(Total);
        total.textContent = `${Total_Commercial} €`
        newImage.src = '../imgs/Acura-Type-S-02.jpg'
        break
    case 'Construction':
        Discount.textContent =  EssencePre
        localStorage.removeItem('electrique')
        let percentageHybrid_Construction = parseInt(EssencePre) * 0.1
        let added_numbers_Construction = parseInt(value) * percentageHybrid_Construction
        let hybridPren_Construction =  parseInt(EssencePre)
        console.log(hybridPren_Construction);
        // let totales = added_numbers + parseInt(Insurance.textContent)
        let pre_totales_Construction = parseInt(value) + added_numbers_Construction
        let pre_sum_Construction = pre_totales_Construction + parseInt(Insurance.textContent)
        let Total_Constrcution = pre_sum_Construction + hybridPren_Construction
        // console.log(Total);
        total.textContent = `${Total_Constrcution} €`
        newImage.src = '../imgs/CM20200303-d9659-aba32.jpg'
        break
    case 'Trucks':
        Discount.textContent =  DieselPer
        localStorage.removeItem('electrique')
        let percentageHybrid_Trucks = parseInt(DieselPer) * 0.1
        let added_numbers_Trucks = parseInt(value) * percentageHybrid_Trucks
        let hybridPren_Trucks =  parseInt(DieselPer)
        console.log(hybridPren_Trucks);
        // let totales = added_numbers + parseInt(Insurance.textContent)
        let pre_totales_Trucks = parseInt(value) + added_numbers_Trucks
        let pre_sum_Trucks = pre_totales_Trucks + parseInt(Insurance.textContent)
        let Total_Trucks = pre_sum_Trucks + hybridPren_Trucks
        // console.log(Total);
        total.textContent = `${Total_Trucks} €`
        newImage.src = '../imgs/fastest-trucks-lead.jpg'

    default:
        break;
}
localStorage.removeItem('discount')
    localStorage.removeItem('HybirdPerc')
    localStorage.removeItem('Essence')
    localStorage.removeItem('Diesel')

}