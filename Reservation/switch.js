const imgs = document.querySelectorAll('#imgs')
const wrapper = document.querySelectorAll('.img-container')

const rmv = document.querySelectorAll('#rmv')
console.log(rmv);


function verfying(checkbox) {
    let checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked =  false
    })
}


const Motorcycle = document.getElementById('Motorcycle')
const citadine = document.getElementById('citadine')
const compact = document.getElementById('compact')
const berline = document.getElementById('berline')
const commercial = document.getElementById('commercial')
const construction = document.getElementById('construction')
const trucks = document.getElementById('trucks')







const newImage = document.createElement('img')
const newImage1 = document.createElement('img')
const newImage2 = document.createElement('img')
const newImage3 = document.createElement('img')


Motorcycle.addEventListener('click',()=> {    
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
})


citadine.addEventListener('click',()=> {
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

