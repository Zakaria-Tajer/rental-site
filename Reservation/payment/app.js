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
const electriquePercentage = localStorage.getItem('electrique')
const HybirdPerctage = localStorage.getItem('HybirdPerc')
const DieselPerentage = localStorage.getItem('DieselPer')
const EssencePrecentage = localStorage.getItem('Essence')









const newImage_Car = document.createElement('img')
newImage_Car.classList.add('created-img')
img_wr.appendChild(newImage_Car)
carImg.parentElement.removeChild(carImg)


for (let i = 0; i < localStorage.length; i++) {
    carName.textContent = `${car_Name}`
    Prepayment.textContent = value
    Discount.textContent =  coupon

    if(car_Name == 'Motorcycle'){
        newImage_Car.src = '../imgs/195885_2020_HONDA_CBR1000RR-R_SP.jpg'
       Discount.textContent = electriquePercentage
       let percentage = parseInt(electriquePercentage) / 100
       let add_Number_Moto = parseInt(value) * percentage
       let sum = add_Number_Moto + parseInt(value)
       let total_Moto = sum + parseInt(Insurance.textContent)
       total.textContent = `${total_Moto} €`
       console.log(total_Moto);
    }

    if(car_Name === 'Citadine'){
            localStorage.removeItem('electrique')
            Discount.textContent = HybirdPerctage
            let percentage = parseInt(HybirdPerctage) / 100
            let add_Number_Citadine = parseInt(value) * percentage
            let sum = add_Number_Citadine + parseInt(value)
            console.log(add_Number_Citadine);
            let total_Citadine_Hybird = sum + parseInt(Insurance.textContent)
            total.textContent = `${total_Citadine_Hybird} €`
            newImage_Car.src = '../imgs/HTUpvx.jpg'
    } 

    if(car_Name === 'Citadine' && EssencePrecentage === '14%'){
        // localStorage.removeItem('HybirdPerc')
            Discount.textContent =  EssencePrecentage
            let percentage = parseInt(EssencePrecentage) / 100
            console.log(percentage);
            let add_Number_Citadine_Essence = parseInt(value) * percentage
            let Sum = add_Number_Citadine_Essence + parseInt(value)
            console.log(Sum);
            let total_Citadine_Essence = Sum + parseInt(Insurance.textContent)
            total.textContent = `${total_Citadine_Essence} €`
            newImage_Car.src = '../imgs/HTUpvx.jpg'
            console.log(1);
    }
    if(car_Name === 'Citadine' && DieselPerentage === '21%'){
            Discount.textContent =  DieselPerentage
            let percentage = parseInt(DieselPerentage) / 100
            console.log(percentage);
            let add_Number_Citadine_Diesel = parseInt(value) * percentage
            let Sum = add_Number_Citadine_Diesel + parseInt(value)
            console.log(Sum);
            let total_Citadine_Diesel = Sum + parseInt(Insurance.textContent)
            total.textContent = `${total_Citadine_Diesel} €`
            newImage_Car.src = '../imgs/HTUpvx.jpg'
            console.log(1);
    }
    if(car_Name === 'Citadine' && electriquePercentage === '5%'){
        Discount.textContent =  electriquePercentage
        let percentage = parseInt(electriquePercentage) / 100
        console.log(percentage);
        let add_Number_Citadine_Electrique = parseInt(value) * percentage
        let Sum = add_Number_Citadine_Electrique + parseInt(value)
        console.log(Sum);
        let total_Citadine_Electrique = Sum + parseInt(Insurance.textContent)
        total.textContent = `${total_Citadine_Electrique} €`
        newImage_Car.src = '../imgs/HTUpvx.jpg'
        console.log(1);
    }

    
    if(car_Name === 'Compact'){
        Discount.textContent = HybirdPerctage
        let percentage = parseInt(HybirdPerctage) / 100
        let add_Number_Citadine = parseInt(value) * percentage
        let sum = add_Number_Citadine + parseInt(value)
        console.log(add_Number_Citadine);
        let total_Citadine_Hybird = sum + parseInt(Insurance.textContent)
        total.textContent = `${total_Citadine_Hybird} €`
        newImage_Car.src = '../imgs/HTUpvx.jpg'
    } 

    if(car_Name === 'Compact' && EssencePrecentage === '14%'){
        Discount.textContent =  EssencePrecentage
        let percentage = parseInt(EssencePrecentage) / 100
        console.log(percentage);
        let add_Number_Citadine_Essence = parseInt(value) * percentage
        let Sum = add_Number_Citadine_Essence + parseInt(value)
        console.log(Sum);
        let total_Citadine_Essence = Sum + parseInt(Insurance.textContent)
        total.textContent = `${total_Citadine_Essence} €`
        newImage_Car.src = '../imgs/HTUpvx.jpg'
        console.log(1);
    }
    if(car_Name === 'Compact' && DieselPerentage === '21%'){
        Discount.textContent =  DieselPerentage
        let percentage = parseInt(DieselPerentage) / 100
        console.log(percentage);
        let add_Number_Citadine_Diesel = parseInt(value) * percentage
        let Sum = add_Number_Citadine_Diesel + parseInt(value)
        console.log(Sum);
        let total_Citadine_Diesel = Sum + parseInt(Insurance.textContent)
        total.textContent = `${total_Citadine_Diesel} €`
        newImage_Car.src = '../imgs/HTUpvx.jpg'
        console.log(1);
    }

    if(car_Name === 'Berline'){
        Discount.textContent = HybirdPerctage
        let percentage = parseInt(HybirdPerctage) / 100
        let add_Number_Citadine = parseInt(value) * percentage
        let sum = add_Number_Citadine + parseInt(value)
        console.log(add_Number_Citadine);
        let total_Citadine_Hybird = sum + parseInt(Insurance.textContent)
        total.textContent = `${total_Citadine_Hybird} €`
        newImage_Car.src = '../imgs/Acura-Type-S-02.jpg'
    } 

    if(car_Name === 'Berline' && EssencePrecentage === '14%'){
        Discount.textContent =  EssencePrecentage
        let percentage = parseInt(EssencePrecentage) / 100
        console.log(percentage);
        let add_Number_Citadine_Essence = parseInt(value) * percentage
        let Sum = add_Number_Citadine_Essence + parseInt(value)
        console.log(Sum);
        let total_Citadine_Essence = Sum + parseInt(Insurance.textContent)
        total.textContent = `${total_Citadine_Essence} €`
        newImage_Car.src = '../imgs/Acura-Type-S-02.jpg'
        console.log(1);
    }
    if(car_Name === 'Berline' && DieselPerentage === '21%'){
        Discount.textContent =  DieselPerentage
        let percentage = parseInt(DieselPerentage) / 100
        console.log(percentage);
        let add_Number_Citadine_Diesel = parseInt(value) * percentage
        let Sum = add_Number_Citadine_Diesel + parseInt(value)
        console.log(Sum);
        let total_Citadine_Diesel = Sum + parseInt(Insurance.textContent)
        total.textContent = `${total_Citadine_Diesel} €`
        newImage_Car.src = '../imgs/Acura-Type-S-02.jpg'
        console.log(1);
    }

    
    if(car_Name === 'Commercial' && DieselPerentage === '21%'){
        Discount.textContent =  DieselPerentage
        let percentage = parseInt(DieselPerentage) / 100
        console.log(percentage);
        let add_Number_Citadine_Diesel = parseInt(value) * percentage
        let Sum = add_Number_Citadine_Diesel + parseInt(value)
        console.log(Sum);
        let total_Citadine_Diesel = Sum + parseInt(Insurance.textContent)
        total.textContent = `${total_Citadine_Diesel} €`
        newImage_Car.src = '../imgs/USC80FOT115A021001.jpg'
        console.log(1);
    }
    if(car_Name === 'Construction' && DieselPerentage === '21%'){
        Discount.textContent =  DieselPerentage
        let percentage = parseInt(DieselPerentage) / 100
        console.log(percentage);
        let add_Number_Citadine_Diesel = parseInt(value) * percentage
        let Sum = add_Number_Citadine_Diesel + parseInt(value)
        console.log(Sum);
        let total_Citadine_Diesel = Sum + parseInt(Insurance.textContent)
        total.textContent = `${total_Citadine_Diesel} €`
        newImage_Car.src = '../imgs/CM20200303-d9659-aba32.jpg'
        console.log(1);
    }
    if(car_Name === 'Construction' && EssencePrecentage === '14%'){
        Discount.textContent =  EssencePrecentage
        let percentage = parseInt(EssencePrecentage) / 100
        console.log(percentage);
        let add_Number_Citadine_Essence = parseInt(value) * percentage
        let Sum = add_Number_Citadine_Essence + parseInt(value)
        console.log(Sum);
        let total_Citadine_Essence = Sum + parseInt(Insurance.textContent)
        total.textContent = `${total_Citadine_Essence} €`
        newImage_Car.src = '../imgs/CM20200303-d9659-aba32.jpg'
        console.log(1);
    }
    if(car_Name === 'Trucks' && DieselPerentage === '21%'){
        Discount.textContent =  DieselPerentage
        let percentage = parseInt(DieselPerentage) / 100
        console.log(percentage);
        let add_Number_Citadine_Diesel = parseInt(value) * percentage
        let Sum = add_Number_Citadine_Diesel + parseInt(value)
        console.log(Sum);
        let total_Citadine_Diesel = Sum + parseInt(Insurance.textContent)
        total.textContent = `${total_Citadine_Diesel} €`
        newImage_Car.src = '../imgs/fastest-trucks-lead.jpg'
        console.log(1);
    }

    localStorage.removeItem('discount')
    localStorage.removeItem('electrique')
    localStorage.removeItem('HybirdPerc')
    localStorage.removeItem('Essence')
    localStorage.removeItem('DieselPer')


   
}