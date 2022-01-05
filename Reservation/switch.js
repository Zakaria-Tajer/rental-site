const Motorcycle = document.getElementById('Motorcycle')
const citadine = document.getElementById('citadine')
const compact = document.getElementById('compact')
const berline = document.getElementById('berline')
const commercial = document.getElementById('commercial')
const construction = document.getElementById('construction')
const trucks = document.getElementById('trucks')


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
        actual_price[0].textContent = '10 €'
        actual_price[1].textContent = '20 €'
        actual_price[2].textContent = '250 €'
        actual_price[3].textContent = '14 €'
        
    }

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
function Enrgie(Energie,TypeOfEnergie){
    for (let i = 0; i < Energie.length; i++) {
        if(days_counter > 1){
            let percentage = parseInt(TypeOfEnergie) / 100
            let add_Number_Moto = parseInt(VieValue) * percentage
            let sum = add_Number_Moto + parseInt(VieValue)
            let total_Moto = sum + 500
            let tota_days = parseInt(days_counter) * total_Moto
            localStorage.setItem('Total_Of_Sums', tota_days)
            console.log(tota_days);
        }else {
            let percentage = parseInt(TypeOfEnergie) / 100
            let add_Number_Moto = parseInt(VieValue) * percentage
            let sum = add_Number_Moto + parseInt(VieValue)
            let total_Moto = sum + 500
            localStorage.setItem('Total_Of_Sums', total_Moto)
            console.log(total_Moto);
        }
    }
}
for (let i = 0; i < Electrique.length; i++) {
    // Electrique[i].addEventListener('click',()=> {
    //     localStorage.setItem('electriEnr', electriquePerc)
    //     Enrgie(Electrique,electriquePerc)
    // })

    // Hybird[i].addEventListener('click', ()=> {
    // localStorage.setItem('HybirdPerc', HybirdPerc)
    // Enrgie(Hybird,HybirdPerc)
    // })

    // Essence[i].addEventListener('click', ()=> {
    // localStorage.setItem('Essence', EssencePre)
    // Enrgie(Essence,EssencePre)
    // })

    // Diesel[i].addEventListener('click', ()=> {
    // localStorage.setItem('DieselPer', DieselPer)
    // Enrgie(Diesel,DieselPer)
    // })

    pay_btn[i].addEventListener('click', ()=> {
        location.assign('./payment/index.html')
        
    })
}

Motorcycle.addEventListener('click',()=> {
    for (let i = 0; i < choice_wrapper.length; i++) {
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
    ReplacePrices('10 €')
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
    //  localStorage.removeItem('discount')
    // localStorage.removeItem('electrique')
    // localStorage.removeItem('HybirdPerc')
    // localStorage.removeItem('Essence')
    // localStorage.removeItem('DieselPer')

})


citadine.addEventListener('click',()=> {
    for (let i = 0; i < choice_wrapper.length; i++) {
        Electrique[i].addEventListener('click',()=> {
            localStorage.setItem('electriEnr', electriquePerc)
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
    // case 'Citadine':
    //     for (let i = 0; i < localStorage.length; i++) {
    //         Hybird[i].addEventListener('click', ()=> {
    //             alert('Motocycle Are Not Availbale with this customasation')
    //         })
    //         Essence[i].addEventListener('click', ()=> {
    //              alert('Motocycle Are Not Availbale with this customasation')
    //         })
    //         Electrique[i].addEventListener('click', ()=> {
    //             localStorage.setItem('electrique', electriquePerc)
    //         })
    //         Diesel[i].addEventListener('click', ()=> {
    //             alert('Motocycle Are Not Availbale with this customasation')
    //         })
    //     }
    //     break


    localStorage.removeItem('discount')
    
    // dataSrorage('9%')
    replaceName('Citadine')
    ReplacePrices('12 €')
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
    localStorage.removeItem('discount')
    for (let i = 0; i < choice_wrapper.length; i++) {
        Hybird[i].addEventListener('click', ()=> {
            switch (Car_Name) {
                case 'Compact':
                     localStorage.setItem('HybirdPerc', HybirdPerc)
            default:
                break;
            }
        })
        Essence[i].addEventListener('click',()=> {
            switch (Car_Name) {
                case 'Compact':
                    localStorage.removeItem('HybirdPerc')
                    localStorage.removeItem('discount')
                     localStorage.setItem('Essence', EssencePre)
                default:
                    break;
            }
        })
        Diesel[i].addEventListener('click', ()=> {
            switch (Car_Name) {
                case 'Compact':
                    localStorage.removeItem('EssencePre')
                    localStorage.removeItem('discount')
                     localStorage.setItem('DieselPer', DieselPer)
                    break;
            
                default:
                    break;
            }
        })
        Electrique[i].addEventListener('click',()=> {
            switch (Car_Name) {
                case 'Compact':
                    alert('Compact Cars Are Not Availbale with this customasation')
                    break;
            
                default:
                    break;
            }
        })
    }

    // dataSrorage('7%')
    replaceName('Compact')
    ReplacePrices('14 €')
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
    for (let i = 0; i < choice_wrapper.length; i++) {
        Hybird[i].addEventListener('click', ()=> {
            switch (Car_Name) {
                case 'Berline':
                    localStorage.removeItem('discount')
                     localStorage.setItem('HybirdPerc', HybirdPerc)
            default:
                break;
            }
        })
        Essence[i].addEventListener('click',()=> {
            switch (Car_Name) {
                case 'Berline':
                    localStorage.removeItem('HybirdPerc')
                    localStorage.removeItem('discount')
                     localStorage.setItem('Essence', EssencePre)
                    break;
                default:
                    break;
            }
        })
        Diesel[i].addEventListener('click', ()=> {
            switch (Car_Name) {
                case 'Berline':
                    localStorage.removeItem('EssencePre')
                    localStorage.removeItem('discount')
                     localStorage.setItem('DieselPer', DieselPer)
                    break;
            
                default:
                    break;
            }
        })
        Electrique[i].addEventListener('click',()=> {
            switch (Car_Name) {
                case 'Berline':
                    alert('Compact Cars Are Not Availbale with this customasation')
                    break;
            
                default:
                    break;
            }
        })
    }
    replaceName('Berline')
    ReplacePrices('20 €')
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
    for (let i = 0; i < choice_wrapper.length; i++) {
        Diesel[i].addEventListener('click', ()=> {
            switch (Car_Name) {
                case 'Commercial':
                    localStorage.removeItem('EssencePre')
                    localStorage.removeItem('discount')
                     localStorage.setItem('DieselPer', DieselPer)
                    break;
            
                default:
                    break;
            }
        })
        
    }
    replaceName('Commercial')
    ReplacePrices('16 €')
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
    for (let i = 0; i < choice_wrapper.length; i++) {
        Diesel[i].addEventListener('click', ()=> {
            switch (Car_Name) {
                case 'Construction':
                    localStorage.removeItem('EssencePre')
                    localStorage.removeItem('discount')
                     localStorage.setItem('DieselPer', DieselPer)
                    break;
            
                default:
                    break;
            }
        })
        Essence[i].addEventListener('click',()=> {
            switch (Car_Name) {
                case 'Commercial':
                    localStorage.removeItem('HybirdPerc')
                    localStorage.removeItem('discount')
                     localStorage.setItem('Essence', EssencePre)
                    break;
                default:
                    break;
            }
        })
        
    }
    replaceName('Construction')
    ReplacePrices('900 €')
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
    for (let i = 0; i < choice_wrapper; i++) {
        Diesel[i].addEventListener('click', ()=> {
            switch (Car_Name) {
                case 'Trucks':
                    localStorage.removeItem('EssencePre')
                    localStorage.removeItem('discount')
                     localStorage.setItem('DieselPer', DieselPer)
                    break;
            
                default:
                    break;
            }
        })
        
    }
    replaceName('Trucks')
    ReplacePrices('250 €')
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

