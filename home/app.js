var swiper = new Swiper('.swiper-container', {
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev'
	},
	slidesPerView: 1,
	spaceBetween: 10,
	// init: false,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},

  
	breakpoints: {
	  620: {
		slidesPerView: 1,
		spaceBetween: 20,
	  },
	  680: {
		slidesPerView: 2,
		spaceBetween: 40,
	  },
	  920: {
		slidesPerView: 3,
		spaceBetween: 40,
	  },
	  1240: {
		slidesPerView: 4,
		spaceBetween: 50,
	  },
	} 
    });


const first_section = document.getElementById('first-section')
const second_section = document.getElementById('second-section')
const Motos = document.getElementById('Motos')
const Cars = document.getElementById('Cars')
const Van = document.getElementById('Van')



const img_container = document.createElement('div')
const liter_img = document.createElement('img')
// pic2
const img2 = document.createElement('div')
const lite2 = document.createElement('img')
// pic3
const img3 = document.createElement('div')
const lite3 = document.createElement('img')
/////smalller imgs
const smaller_container = document.createElement('div')
const smaller_img = document.createElement('img')

const smaller_container1 = document.createElement('div')
const smaller_img1 = document.createElement('img')

const smaller_container2 = document.createElement('div')
const smaller_img2 = document.createElement('img')

const smaller_container3 = document.createElement('div')
const smaller_img3 = document.createElement('img')

////////////////////////////////////////////////Cars//////////////////////

const cars_Container = document.createElement('div')
const cars_img = document.createElement('img') 

const cars_Container1 = document.createElement('div')
const cars_img1 = document.createElement('img') 

const cars_Container2 = document.createElement('div')
const cars_img2  = document.createElement('img') 


////////////////////////////////Samller Cars COntainer /////////////////////

const smaller_Cars_Container = document.createElement('div')
const smaller_Cars_img = document.createElement('img') 

const smaller_Cars_Container1 = document.createElement('div')
const smaller_Cars_img1 = document.createElement('img') 

const smaller_Cars_Container2 = document.createElement('div')
const smaller_Cars_img2  = document.createElement('img') 

const smaller_Cars_Container3  = document.createElement('div')
const smaller_Cars_img3 = document.createElement('img') 

////////////////////////////////////////////////Cars//////////////////////

const Van_Container = document.createElement('div')
const Van_img = document.createElement('img') 

const Van_Container1 = document.createElement('div')
const Van_img1 = document.createElement('img') 

const Van_Container2 = document.createElement('div')
const Van_img2  = document.createElement('img') 


/////////////////////////////////////////////smallersVan///////////////////

const smaller_Van_Container = document.createElement('div')
const smaller_Van_img = document.createElement('img') 

const smaller_Van_Container1 = document.createElement('div')
const smaller_Van_img1 = document.createElement('img') 

const smaller_Van_Container2 = document.createElement('div')
const smaller_Van_img2  = document.createElement('img') 

const smaller_Van_Container3  = document.createElement('div')
const smaller_Van_img3 = document.createElement('img') 

///////////////////////////////////////////////VAns///////////////////////

window.onload = () => {
    img_container.classList.add('imgs')
    first_section.appendChild(img_container)
    liter_img.src = './moto/10-best-motorcycles-of-2021.jpg'
    img_container.appendChild(liter_img)
    liter_img.classList.add('img-format')


    img2.classList.add('imgs')
    first_section.appendChild(img2)
    lite2.src = './moto/2017-Kawasaki-Ninja-300-ABS.jpg '
    img2.appendChild(lite2)
    lite2.classList.add('img-format')

    img3.classList.add('imgs')
    first_section.appendChild(img3)
    lite3.src = './moto/MotoGP_620x374.jpg'
    img3.appendChild(lite3)
    lite3.classList.add('img-format')


    smaller_container.classList.add('smaller_container')
    second_section.appendChild(smaller_container)
    smaller_img.src = './moto/Motorbike.jpg'
    smaller_img.classList.add('smaller-imgs')
    smaller_container.appendChild(smaller_img)

    smaller_container1.classList.add('smaller_container')
    second_section.appendChild(smaller_container1)
    smaller_img1.src = './moto/home-krgt-1-side-2-min.jpg'
    smaller_img1.classList.add('smaller-imgs')
    smaller_container1.appendChild(smaller_img1)

    smaller_container2.classList.add('smaller_container')
    second_section.appendChild(smaller_container2)
    smaller_img2.src = './moto/ddba5372c86be47a168cab7f44869f60.jpg'
    smaller_img2.classList.add('smaller-imgs')
    smaller_container2.appendChild(smaller_img2)

    smaller_container3.classList.add('smaller_container')
    second_section.appendChild(smaller_container3)
    smaller_img3.src = './moto/195885_2020_HONDA_CBR1000RR-R_SP.jpg'
    smaller_img3.classList.add('smaller-imgs')
    smaller_container3.appendChild(smaller_img3)
}

function removeCars(){
    cars_Container.classList.remove('imgs')
    cars_img.parentNode.removeChild(cars_img)

    cars_Container1.classList.remove('imgs')
    cars_img1.parentNode.removeChild(cars_img1)

    cars_Container2.classList.remove('imgs')
    cars_img2.parentNode.removeChild(cars_img2)

    // /small cars
    smaller_Cars_Container.classList.remove('smaller_container')
    smaller_Cars_img.parentNode.removeChild(smaller_Cars_img)

    smaller_Cars_Container1.classList.remove('smaller_container')
    smaller_Cars_img1.parentNode.removeChild(smaller_Cars_img1)

    smaller_Cars_Container2.classList.remove('smaller_container')
    smaller_Cars_img2.parentNode.removeChild(smaller_Cars_img2)

    smaller_Cars_Container3.classList.remove('smaller_container')
    smaller_Cars_img3.parentNode.removeChild(smaller_Cars_img3)
}
function removeMotos(){
    img_container.classList.remove('imgs')
    liter_img.parentNode.removeChild(liter_img)

    img2.classList.remove('imgs')
    lite2.parentNode.removeChild(lite2)

    img3.classList.remove('imgs')
    lite3.parentNode.removeChild(lite3)

    // smalller img remover
    smaller_container.classList.remove('smaller_container')
    smaller_img.parentNode.removeChild(smaller_img)

    smaller_container1.classList.remove('smaller_container')
    smaller_img1.parentNode.removeChild(smaller_img1)

    smaller_container2.classList.remove('smaller_container')
    smaller_img2.parentNode.removeChild(smaller_img2)

    smaller_container3.classList.remove('smaller_container')
    smaller_img3.parentNode.removeChild(smaller_img3)
}

function vanRemover(){
    Van_Container.classList.remove('imgs')
    Van_img.parentNode.removeChild(Van_img)

    Van_Container1.classList.remove('imgs')
    Van_img1.parentNode.removeChild(Van_img1)

    Van_Container2.classList.remove('imgs')
    Van_img2.parentNode.removeChild(Van_img2)

    // smalller img remover
    smaller_Van_Container.classList.remove('smaller_container')
    smaller_Van_img.parentNode.removeChild(smaller_Van_img)

    smaller_Van_Container1.classList.remove('smaller_container')
    smaller_img1.parentNode.removeChild(smaller_Van_img1)

    smaller_Van_Container2.classList.remove('smaller_container')
    smaller_Van_img2.parentNode.removeChild(smaller_Van_img2)

    smaller_Van_Container3.classList.remove('smaller_container')
    smaller_Van_img3.parentNode.removeChild(smaller_Van_img3)

}

Motos.addEventListener('click', ()=> {
    img_container.classList.add('imgs')
    first_section.appendChild(img_container)
    liter_img.src = './moto/10-best-motorcycles-of-2021.jpg'
    img_container.appendChild(liter_img)
    liter_img.classList.add('img-format')

    
    img2.classList.add('imgs')
    first_section.appendChild(img2)
    lite2.src = './moto/2017-Kawasaki-Ninja-300-ABS.jpg '
    img2.appendChild(lite2)
    lite2.classList.add('img-format')
    
    img3.classList.add('imgs')
    first_section.appendChild(img3)
    lite3.src = './moto/MotoGP_620x374.jpg'
    img3.appendChild(lite3)
    lite3.classList.add('img-format')
    
    
    smaller_container.classList.add('smaller_container')
    second_section.appendChild(smaller_container)
    smaller_img.src = './moto/Motorbike.jpg'
    smaller_img.classList.add('smaller-imgs')
    smaller_container.appendChild(smaller_img)
    
    smaller_container1.classList.add('smaller_container')
    second_section.appendChild(smaller_container1)
    smaller_img1.src = './moto/home-krgt-1-side-2-min.jpg'
    smaller_img1.classList.add('smaller-imgs')
    smaller_container1.appendChild(smaller_img1)
    
    smaller_container2.classList.add('smaller_container')
    second_section.appendChild(smaller_container2)
    smaller_img2.src = './moto/ddba5372c86be47a168cab7f44869f60.jpg'
    smaller_img2.classList.add('smaller-imgs')
    smaller_container2.appendChild(smaller_img2)
    
    smaller_container3.classList.add('smaller_container')
    second_section.appendChild(smaller_container3)
    smaller_img3.src = './moto/195885_2020_HONDA_CBR1000RR-R_SP.jpg'
    smaller_img3.classList.add('smaller-imgs')
    smaller_container3.appendChild(smaller_img3)
    
    removeCars()
    
})



Cars.addEventListener('click', ()=> {
    // remove the class and img of fast
    cars_Container.classList.add('imgs')
    first_section.appendChild(cars_Container)
    cars_img.src = './cars/308561_original.jpg'
    cars_Container.appendChild(cars_img)
    cars_img.classList.add('img-format')
    
    
    cars_Container1.classList.add('imgs')
    first_section.appendChild(cars_Container1)
    cars_img1.src = './cars/FordEV-1200x800.jpeg'
    cars_Container1.appendChild(cars_img1)
    cars_img1.classList.add('img-format')
    
    cars_Container2.classList.add('imgs')
    first_section.appendChild(cars_Container2)
    cars_img2.src = './cars/JDPA_2020 Cadillac CT5 Luxury Sedan.jpg'
    cars_Container2.appendChild(cars_img2)
    cars_img2.classList.add('img-format')
    
    
    ///smaller cars//
    smaller_Cars_Container.classList.add('smaller_container')
    second_section.appendChild(smaller_Cars_Container)
    smaller_Cars_img.src = './cars/luxury-cars-lead.jpg'
    smaller_Cars_img.classList.add('smaller-imgs')
    smaller_Cars_Container.appendChild(smaller_Cars_img)
    
    smaller_Cars_Container1.classList.add('smaller_container')
    second_section.appendChild(smaller_Cars_Container1)
    smaller_Cars_img1.src = './cars/small.jpeg'
    smaller_Cars_img1.classList.add('smaller-imgs')
    smaller_Cars_Container1.appendChild(smaller_Cars_img1)
    
    smaller_Cars_Container2.classList.add('smaller_container')
    second_section.appendChild(smaller_Cars_Container2)
    smaller_Cars_img2.src = './cars/SONATA-hero-option1-764A5360-edit-640x354.jpg'
    smaller_Cars_img2.classList.add('smaller-imgs')
    smaller_Cars_Container2.appendChild(smaller_Cars_img2)
    
    smaller_Cars_Container3.classList.add('smaller_container')
    second_section.appendChild(smaller_Cars_Container3)
    smaller_Cars_img3.src = './cars/1_rangerover_tracking.jpg'
    smaller_Cars_img3.classList.add('smaller-imgs')
    smaller_Cars_Container3.appendChild(smaller_Cars_img3)
    
    vanRemover()
})


Van.addEventListener('click', ()=> {
    removeMotos()
    Van_Container.classList.add('imgs')
    first_section.appendChild(Van_Container)
    Van_img.src = './vans/2020_ford_transit-passenger-van_passenger-van_350-hd-xlt-high-roof_fq_oem_1_1280.jpg'
    Van_Container.appendChild(Van_img)
    Van_img.classList.add('img-format')


    Van_Container1.classList.add('imgs')
    first_section.appendChild(Van_Container1)
    Van_img1.src = './vans/most-popular-vans-2021.jpg'
    Van_Container1.appendChild(Van_img1)
    Van_img1.classList.add('img-format')

    Van_Container2.classList.add('imgs')
    first_section.appendChild(Van_Container2)
    Van_img2.src = './vans/2021-savana-passenger-details-mh-lg-21PGSV00060-v2.webp'
    Van_Container2.appendChild(Van_img2)
    Van_img2.classList.add('img-format')


    smaller_Van_Container.classList.add('smaller_container')
    second_section.appendChild(smaller_Van_Container)
    smaller_Van_img.src = './vans/maxresdefault.jpg'
    smaller_Van_img.classList.add('smaller-imgs')
    smaller_Van_Container.appendChild(smaller_Van_img)

    smaller_Van_Container1.classList.add('smaller_container')
    second_section.appendChild(smaller_Van_Container1)
    smaller_Van_img1.src = './vans/small_van_2.jpg'
    smaller_Van_img1.classList.add('smaller-imgs')
    smaller_Van_Container1.appendChild(smaller_Van_img1)

    smaller_Van_Container2.classList.add('smaller_container')
    second_section.appendChild(smaller_Van_Container2)
    smaller_Van_img2.src = './vans/1200px-Chevy_Express.jpg'
    smaller_Van_img2.classList.add('smaller-imgs')
    smaller_Van_Container2.appendChild(smaller_Van_img2)

    smaller_Van_Container3.classList.add('smaller_container')
    second_section.appendChild(smaller_Van_Container3)
    smaller_Van_img3.src = './vans/6d1726c5db9ae2b4cdf667e8a939e4ed.jpeg'
    smaller_Van_img3.classList.add('smaller-imgs')
    smaller_Van_Container3.appendChild(smaller_Van_img3)

})

