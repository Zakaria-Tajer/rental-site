const Motorcycle = document.getElementById('Motorcycle')
const citadine = document.getElementById('citadine')
const compact = document.getElementById('compact')
const berline = document.getElementById('berline')
const commercial = document.getElementById('commercial')
const construction = document.getElementById('construction')
const trucks = document.getElementById('trucks')
const pop_btn = document.querySelectorAll('#popup-btn')

const days = document.getElementById('days-wrapper')
const add_days = document.getElementById('add_days')
const time = document.querySelectorAll('.time')

const imgs = document.querySelectorAll('#imgs')
const wrapper = document.querySelectorAll('.img-container')
const costum_btn = document.querySelectorAll('#rent-btn')


const append_h1 = document.querySelectorAll('#append-h1')


const remover = document.querySelectorAll('.remover')
console.log(remover);

const prices = document.querySelectorAll('#prices')
const price_updated = document.querySelectorAll('#prices-actual')
const actual_price = document.querySelectorAll('#actual-price')
const prev_price = document.querySelectorAll('#prev-price')
const pay_btn = document.querySelectorAll('.pay-btn')
const choice_wrapper = document.querySelectorAll('.choices')


const Hybird = document.querySelectorAll('.Hybrid')
const Essence = document.querySelectorAll('.Essence')
const Diesel = document.querySelectorAll('.Diesel')
const Electrique = document.querySelectorAll('.Electrique')
const autos = document.querySelectorAll('.automatique')
console.log(choice_wrapper)



const Car_Name = localStorage.getItem('carName')
const electriquePerc = '5%'
const HybirdPerc = '9%'
const DieselPer = '21%'
const EssencePre = '14%'


// localStorage.setItem('HybirdPerc',HybirdPerc)
// localStorage.setItem('DieselPer',DieselPer)
// localStorage.setItem('Essence',EssencePre)





for (let i = 0; i < time.length; i++) {
    add_days.addEventListener('click', ()=> {
        let daysCounter = days.value
        localStorage.setItem('days', daysCounter)
        time[i].textContent = `${daysCounter} Days`
    })
    
}




// const hide_box = document.querySelectorAll('#hide-box')


function ReplacePrices(actual){
    for (let i = 0; i < price_updated.length; i++) {
        actual_price[i].textContent = `${actual}`
        price_updated[i].appendChild(actual_price[i])
        
    }
}


function verfying(checkbox) {
    let checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked =  false
    })
}


function replaceName(carName){
    for (let i = 0; i < remover.length; i++) {
        append_h1[i].appendChild(remover[i])
        remover[i].textContent = `${carName}`
        // remover[i].textContent = ''
        
        console.log(localStorage.setItem('carName', `${carName}`))
    }
}




window.onload = ()=> {
    for (let i = 0; i < 4; i++) {
        append_h1[i].appendChild(remover[i])
        remover[0].textContent = 'Motorcycle'
        remover[1].textContent = 'Berline'
        remover[2].textContent = 'Truck'
        remover[3].textContent = 'Compact'
    }

    for (let i = 0; i < price_updated.length; i++) {
        price_updated[i].appendChild(actual_price[i])
        actual_price[0].textContent = '10 ???'
        actual_price[1].textContent = '20 ???'
        actual_price[2].textContent = '250 ???'
        actual_price[3].textContent = '14 ???'
        
    }
    // localStorage.setItem('electriEnr', electriquePerc)
    // localStorage.setItem('HybirdPerc', HybirdPerc)
    // localStorage.setItem('Essence', EssencePre)
    // localStorage.setItem('DieselPer', DieselPer)

}

const newImage = document.createElement('img')
const newImage1 = document.createElement('img')
const newImage2 = document.createElement('img')
const newImage3 = document.createElement('img')

localStorage.removeItem('discount')




for (let i = 0; i < actual_price.length; i++) {
    costum_btn[i].addEventListener('click', ()=> {
        let viePrice = actual_price[i].textContent
        localStorage.setItem('actual_price',viePrice)
    })
    
}

const days_counter = localStorage.getItem('days')
let VieValue  = localStorage.getItem('actual_price')
let tota_days;
function Enrgie(Energie,TypeOfEnergie){
    for (let i = 0; i < Energie.length; i++) {
        if(days_counter > 1){
            let percentage = parseInt(TypeOfEnergie) / 100
            let add_Number_Moto = parseInt(VieValue) * percentage
            let sum = add_Number_Moto + parseInt(VieValue)
            let total_Moto = sum + 500
            tota_days = parseInt(days_counter) * total_Moto
            console.log(tota_days);
            localStorage.setItem('Total_Of_Sums', tota_days)
        }else if(days_counter <= 1) {
            let percentage = parseInt(TypeOfEnergie) / 100
            let add_Number_Moto = parseInt(VieValue) * percentage
            let sum = add_Number_Moto + parseInt(VieValue)
            let total_Moto = sum + 500
            tota_days = 1 * total_Moto
            localStorage.setItem('Total_Of_Sums', tota_days)
            console.log(total_Moto);
        }
        pay_btn[i].addEventListener('click', ()=> {
            location.assign('./payment/index.html')
            
        })
    }
}
const hyb = document.querySelectorAll('#Hybrid-text')
const es = document.querySelectorAll('#Essence-text')
const dis = document.querySelectorAll('#Diesel-text')
const auto = document.querySelectorAll('#Automatique-text')
const ecl = document.querySelectorAll('#Electrique-text')


Motorcycle.addEventListener('click',()=> {
    for (let i = 0; i < hyb.length; i++) {
        ecl[i].classList.remove('active')
        Electrique[i].classList.remove('active')
        hyb[i].classList.toggle('active')
        es[i].classList.toggle('active')
        dis[i].classList.toggle('active')
        auto[i].classList.toggle('active')

        Hybird[i].classList.add('non-w')
        Essence[i].classList.add('non-w')
        Diesel[i].classList.add('non-w')
        autos[i].classList.add('non-w')

        // pop_btn[i].classList.remove('active')
        // Hybird[i].classList.toggle('active')
        // Essence[i].classList.toggle('active')
        // Diesel[i].classList.toggle('active')
        // autos[i].classList.toggle('active')
    }
    for (let i = 0; i < Hybird.length; i++) {

        Electrique[i].addEventListener('click',()=> {
            localStorage.setItem('electriEnr', electriquePerc)
            Enrgie(Electrique,electriquePerc)
        })
        Hybird[i].addEventListener('click', ()=> {
            alert('Motocycle Are Not Availbale with this customasation')
        })
        Essence[i].addEventListener('click', ()=> {
            alert('Motocycle Are Not Availbale with this customasation')
        })
        Diesel[i].addEventListener('click', ()=> {
        alert('Motocycle Are Not Availbale with this customasation')
    })

    }
    replaceName('Motorcycle')
    ReplacePrices('10 ???')
    newImage.setAttribute("src", "../gallery/motorcycle/6a2081efec9a4564a93519475a0cc40a.jpg")
    newImage1.setAttribute("src", "../gallery/motorcycle/2015-Yamaha-YZF-R3.jpg")
    newImage2.setAttribute("src", "../gallery/motorcycle/bmw-k100-motorcycle-bike-side-view-4k_1536018804.jpg")
    newImage3.setAttribute("src","../gallery/motorcycle/ducati-zero-we-buy-any-bike-webuyanybike-electric-motorcycles-motorbike-bike-uk-sell-motorbike-1200x853.jpg")
    
    for (let i = 0; i < wrapper.length; i++) {
        imgs[i].parentElement.removeChild(imgs[i])
        console.log(wrapper[i]);
        wrapper[0].appendChild(newImage)
        wrapper[1].appendChild(newImage1)
        wrapper[2].appendChild(newImage2)
        wrapper[3].appendChild(newImage3)
    }
    // history.pushState(null, null,'Motorcycle')
    // dataSrorage('7%') 
   

})


citadine.addEventListener('click',()=> {
    for (let i = 0; i < wrapper.length; i++) {
        ecl[i].classList.toggle('active')
        Electrique[i].classList.toggle('active')
        hyb[i].classList.remove('active')
        es[i].classList.remove('active')
        dis[i].classList.remove('active')
        auto[i].classList.remove('active')
        pop_btn[i].classList.toggle('active')

        Hybird[i].classList.remove('active')
        Essence[i].classList.remove('active')
        Diesel[i].classList.remove('active')
        autos[i].classList.remove('active')
        Electrique[i].classList.add('non-w')
    }
    for (let i = 0; i < choice_wrapper.length; i++) {
        Electrique[i].addEventListener('click',()=> {
        Enrgie(Electrique,electriquePerc)
    })
    Hybird[i].addEventListener('click', ()=> {
        localStorage.setItem('HybirdPerc', HybirdPerc)

    Enrgie(Hybird,HybirdPerc)
    })
    
    Essence[i].addEventListener('click', ()=> {
        localStorage.setItem('Essence', EssencePre)
    Enrgie(Essence,EssencePre)
    })
    
    Diesel[i].addEventListener('click', ()=> {
        localStorage.setItem('DieselPer', DieselPer)
    Enrgie(Diesel,DieselPer)
    })
    
    }

    localStorage.removeItem('discount')
    
    // dataSrorage('9%')
    replaceName('Citadine')
    ReplacePrices('12 ???')
    newImage.setAttribute("src", "../gallery/cars/va-t-on-assister-a-la-premiere-victoire-d-un-vehicule-electrique-cette-annee-possible-si-on-en-croit-le-capital-sympathie-de-cette-petite-peugeot-photo-peugeot-1578417014.jpg")
    newImage1.setAttribute("src", "../gallery/cars/3309305.jpg")
    newImage2.setAttribute("src", "../gallery/cars/308561_original.jpg")
    newImage3.setAttribute("src", "../gallery/cars/1_rangerover_tracking.jpg")
    for (let i = 0; i < wrapper.length; i++) {
        imgs[i].parentElement.removeChild(imgs[i])
        console.log(wrapper[i]);
        wrapper[0].appendChild(newImage)
        wrapper[1].appendChild(newImage1)
        wrapper[2].appendChild(newImage2)
        wrapper[3].appendChild(newImage3)
    }
    
})


compact.addEventListener('click',()=> {
    for (let i = 0; i < wrapper.length; i++) {
        ecl[i].classList.toggle('active')
        Electrique[i].classList.toggle('active')
        hyb[i].classList.remove('active')
        es[i].classList.remove('active')
        dis[i].classList.remove('active')
        auto[i].classList.remove('active')
        pop_btn[i].classList.toggle('active')


        Hybird[i].classList.remove('active')
        Essence[i].classList.remove('active')
        Diesel[i].classList.remove('active')
        autos[i].classList.remove('active')
        Electrique[i].classList.add('non-w')


    }
    for (let i = 0; i < choice_wrapper.length; i++) {
        Electrique[i].addEventListener('click',()=> {
        alert('Compact is not Availbale with Electrique Custom')
    })
    Hybird[i].addEventListener('click', ()=> {
    localStorage.setItem('HybirdPerc', HybirdPerc)
    Enrgie(Hybird,HybirdPerc)
    })
    
    Essence[i].addEventListener('click', ()=> {
    localStorage.setItem('Essence', EssencePre)
    Enrgie(Essence,EssencePre)
    })
    
    Diesel[i].addEventListener('click', ()=> {
    localStorage.setItem('DieselPer', DieselPer)
    Enrgie(Diesel,DieselPer)
    })
    
    }
   

    // dataSrorage('7%')
    replaceName('Compact')
    ReplacePrices('14 ???')
    newImage.setAttribute("src", "../gallery/cars/compact-imgs/990208.jpg")
    newImage1.setAttribute("src", "../gallery/cars/compact-imgs/990209.jpg")
    newImage2.setAttribute("src", "../gallery/cars/compact-imgs/carpixel.net-2019-mg-hs-uk-95849-hd.jpg")
    newImage3.setAttribute("src", "../gallery/cars/compact-imgs/2011_chevrolet_new_small_car-1920x1200.jpg")
    
    for (let i = 0; i < wrapper.length; i++) {
        imgs[i].parentElement.removeChild(imgs[i])
        console.log(wrapper[i]);
        wrapper[0].appendChild(newImage)
        wrapper[1].appendChild(newImage1)
        wrapper[2].appendChild(newImage2)
        wrapper[3].appendChild(newImage3)
    }  
})

berline.addEventListener('click',()=> {
    for (let i = 0; i < wrapper.length; i++) {
        ecl[i].classList.toggle('active')
        Electrique[i].classList.toggle('active')
        hyb[i].classList.remove('active')
        es[i].classList.remove('active')
        dis[i].classList.remove('active')
        auto[i].classList.remove('active')
        pop_btn[i].classList.toggle('active')


        Hybird[i].classList.remove('active')
        Essence[i].classList.remove('active')
        Diesel[i].classList.remove('active')
        autos[i].classList.toggle('active')
        Electrique[i].classList.add('non-w')
    }
    for (let i = 0; i < choice_wrapper.length; i++) {
        Electrique[i].addEventListener('click',()=> {
        alert('Berline is not Availbale with Electrique Custom')
    })
    Hybird[i].addEventListener('click', ()=> {
    localStorage.setItem('HybirdPerc', HybirdPerc)
    Enrgie(Hybird,HybirdPerc)
    })
    
    Essence[i].addEventListener('click', ()=> {
    localStorage.setItem('Essence', EssencePre)
    Enrgie(Essence,EssencePre)
    })
    
    Diesel[i].addEventListener('click', ()=> {
    localStorage.setItem('DieselPer', DieselPer)
    Enrgie(Diesel,DieselPer)
    })
    
    }
    replaceName('Berline')
    ReplacePrices('20 ???')
    newImage.setAttribute("src", "../gallery/berline/Acura-Type-S-02.jpg")
    newImage1.setAttribute("src", "../gallery/berline/shad19_002_crop.jpg")
    newImage2.setAttribute("src", "../gallery/berline/S0-citadine-berline-suv-monospace-le-guide-des-categories-561286.jpg")
    newImage3.setAttribute("src", "../gallery/berline/461740-les-berlines-en-2021-resister-aux-vus.jpeg")

    for (let i = 0; i < wrapper.length; i++) {
        imgs[i].parentElement.removeChild(imgs[i])
        console.log(wrapper[i]);
        wrapper[0].appendChild(newImage)
        wrapper[1].appendChild(newImage1)
        wrapper[2].appendChild(newImage2)
        wrapper[3].appendChild(newImage3)
    }

   
})
commercial.addEventListener('click',()=> {
    for (let i = 0; i < wrapper.length; i++) {
        ecl[i].classList.toggle('active')
        Electrique[i].classList.toggle('active')
        hyb[i].classList.toggle('active')
        es[i].classList.toggle('active')
        dis[i].classList.remove('active')
        auto[i].classList.toggle('active')
        pop_btn[i].classList.toggle('active')

        Hybird[i].classList.add('non-w')
        Essence[i].classList.add('non-w')
        Diesel[i].classList.remove('active')
        autos[i].classList.add('non-w')
        Electrique[i].classList.add('non-w')
    }
    for (let i = 0; i < choice_wrapper.length; i++) {
        Electrique[i].addEventListener('click',()=> {
            alert('Commercial Car Are Not Availbale with this customasation')
        })
        Hybird[i].addEventListener('click', ()=> {
            alert('Commercial Car Are Not Availbale with this customasation')
        })
        Essence[i].addEventListener('click', ()=> {
            alert('Commercial Car Are Not Availbale with this customasation')
        })
        Diesel[i].addEventListener('click', ()=> {
            localStorage.setItem('DieselPer', DieselPer)
            Enrgie(Diesel,DieselPer)
    })

    }
    replaceName('Commercial')
    ReplacePrices('16 ???')
    newImage.setAttribute("src", "../gallery/commercial/AdobeStock_243360779.jpeg")
    newImage1.setAttribute("src", "../gallery/commercial/USC80FOT115A021001.jpg")
    newImage2.setAttribute("src", "../gallery/commercial/14-transit-van.jpg")
    newImage3.setAttribute("src", "../gallery/commercial/1-5-1210x642.jpg")

    for (let i = 0; i < wrapper.length; i++) {
        imgs[i].parentElement.removeChild(imgs[i])
        console.log(wrapper[i]);
        wrapper[0].appendChild(newImage)
        wrapper[1].appendChild(newImage1)
        wrapper[2].appendChild(newImage2)
        wrapper[3].appendChild(newImage3)
    }
    
   
})

construction.addEventListener('click',()=> {
    for (let i = 0; i < wrapper.length; i++) {
        ecl[i].classList.toggle('active')
        Electrique[i].classList.toggle('active')
        hyb[i].classList.toggle('active')
        es[i].classList.remove('active')
        dis[i].classList.remove('active')
        auto[i].classList.toggle('active')
        pop_btn[i].classList.toggle('active')


        Hybird[i].classList.add('non-w')
        Essence[i].classList.remove('active')
        Diesel[i].classList.remove('active')
        autos[i].classList.add('non-w')
        Electrique[i].classList.add('non-w')

    }
    for (let i = 0; i < choice_wrapper.length; i++) {
        Electrique[i].addEventListener('click',()=> {
        alert('Construction Machines is not Availbale with Electrique Custom')
    })
    Hybird[i].addEventListener('click', ()=> {
    alert('Construction Machines is not Availbale with Electrique Custom')
    })
    
    Essence[i].addEventListener('click', ()=> {
    localStorage.setItem('Essence', EssencePre)
    Enrgie(Essence,EssencePre)
    })
    
    Diesel[i].addEventListener('click', ()=> {
    localStorage.setItem('DieselPer', DieselPer)
    Enrgie(Diesel,DieselPer)
    })
    
    }
    replaceName('Construction')
    ReplacePrices('900 ???')
    newImage.setAttribute("src", "../gallery/construction/102707278-YC_-_CAT_D9T_Dozer_Image.jpg")
    newImage1.setAttribute("src", "../gallery/construction/CM20200303-d9659-aba32.jpg")
    newImage1.setAttribute("src", "../gallery/construction/csm_web0055_82505453bd.jpg")
    
    for (let i = 0; i < wrapper.length; i++) {
        imgs[i].parentElement.removeChild(imgs[i])
        console.log(wrapper[i]);
        wrapper[0].appendChild(newImage)
        wrapper[1].appendChild(newImage1)
        wrapper[2].appendChild(newImage1)
    }
   
})

trucks.addEventListener('click',()=> {
    for (let i = 0; i < wrapper.length; i++) {
        ecl[i].classList.toggle('active')
        Electrique[i].classList.toggle('active')
        hyb[i].classList.toggle('active')
        es[i].classList.toggle('active')
        dis[i].classList.remove('active')
        auto[i].classList.toggle('active')
        pop_btn[i].classList.toggle('active')



        Hybird[i].classList.add('non-w')
        Essence[i].classList.add('non-w')
        Electrique[i].classList.add('non-w')
        autos[i].classList.add('non-w')


    }
    for (let i = 0; i < choice_wrapper.length; i++) {
        Electrique[i].addEventListener('click',()=> {
        alert('Trucks is not Availbale with Electrique Custom')
    })
    Hybird[i].addEventListener('click', ()=> {
    alert('Trucks is not Availbale with Electrique Custom')
    })
    
    Essence[i].addEventListener('click', ()=> {
        alert('Trucks is not Availbale with Electrique Custom')
    })
    
    Diesel[i].addEventListener('click', ()=> {
    localStorage.setItem('DieselPer', DieselPer)
    Enrgie(Diesel,DieselPer)
    })
    
    }
    replaceName('Trucks')
    ReplacePrices('250 ???')
    newImage.setAttribute("src", "../gallery/trucks/fastest-trucks-lead.jpg")
    newImage1.setAttribute("src", "../gallery/trucks/fxslide1.jpg")
    newImage2.setAttribute("src", "../gallery/trucks/images.jpg")
    newImage3.setAttribute("src", "../gallery/trucks/1616580985226.jpeg")

    for (let i = 0; i < wrapper.length; i++) {
        imgs[i].parentElement.removeChild(imgs[i])
        console.log(wrapper[i]);
        wrapper[0].appendChild(newImage)
        wrapper[1].appendChild(newImage1)
        wrapper[2].appendChild(newImage2)
        wrapper[3].appendChild(newImage3)
    }
   
})

