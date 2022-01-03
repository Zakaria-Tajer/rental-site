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




const reservation = document.getElementById('reservation')

reservation.addEventListener('click', ()=> {
  location.assign('../Reservation/index.html')
})



const first_section = document.getElementById('first-section')
const second_section = document.getElementById('second-section')
const Motos = document.getElementById('Motos')
const Cars = document.getElementById('Cit')
const Ber = document.getElementById('Ber')
const Tru = document.getElementById('Tru')
const Comp = document.getElementById('Comp')


const Img = document.createElement('img')
const Img1 = document.createElement('img')
const Img2 = document.createElement('img')
const Img3 = document.createElement('img')
const Img4 = document.createElement('img')
const Img5 = document.createElement('img')
const Img6 = document.createElement('img')


window.onload = ()=> {
  first_section.appendChild(Img)
  first_section.appendChild(Img1)
  first_section.appendChild(Img2)
  Img.src = '../gallery/cars/compact-imgs/carpixel.net-2019-mg-hs-uk-95849-hd.jpg'
  Img1.src = '../gallery/trucks/2021-ford-f-150-red-front-3qtr.webp '
  Img2.src = '/home/moto/10-best-motorcycles-of-2021.jpg'

  Img.classList.add('imgs')
  Img1.classList.add('imgs')
  Img2.classList.add('imgs')

  second_section.appendChild(Img3)
  second_section.appendChild(Img4)
  second_section.appendChild(Img5)
  second_section.appendChild(Img6)
  
  Img3.src = '../gallery/cars/va-t-on-assister-a-la-premiere-victoire-d-un-vehicule-electrique-cette-annee-possible-si-on-en-croit-le-capital-sympathie-de-cette-petite-peugeot-photo-peugeot-1578417014.jpg'
 
  Img4.src = '../gallery/cars/compact-imgs/2011_chevrolet_new_small_car-1920x1200.jpg'

  Img5.src = './gallery/cars/thumb-1920-1042560.jpg'
  Img6.src = '../gallery/berline/image.MQ6.12.20190830113904.jpeg'
  

  Img3.classList.add('smaller_container')
  Img4.classList.add('smaller_container')
  Img5.classList.add('smaller_container')
  Img6.classList.add('smaller_container')
  
}


Motos.addEventListener('click', ()=> {

  first_section.appendChild(Img)
  first_section.appendChild(Img1)
  first_section.appendChild(Img2)
  Img.src = './home/moto/10-best-motorcycles-of-2021.jpg'
  Img1.src = './home/moto/2017-Kawasaki-Ninja-300-ABS.jpg '
  Img2.src = './home/moto/MotoGP_620x374.jpg'

  Img.classList.add('imgs')
  Img1.classList.add('imgs')
  Img2.classList.add('imgs')

  second_section.appendChild(Img3)
  second_section.appendChild(Img4)
  second_section.appendChild(Img5)
  second_section.appendChild(Img6)
  
  Img3.src = '/home/moto/Motorbike.jpg'
 
  Img4.src = './home/moto/home-krgt-1-side-2-min.jpg'

  Img5.src = './home/moto/ddba5372c86be47a168cab7f44869f60.jpg'
  Img6.src = './home/moto/195885_2020_HONDA_CBR1000RR-R_SP.jpg'
  

  Img3.classList.add('smaller_container')
  Img4.classList.add('smaller_container')
  Img5.classList.add('smaller_container')
  Img6.classList.add('smaller_container')
  console.log(1);
  
})

Cars.addEventListener('click', ()=> {

  first_section.appendChild(Img)
  first_section.appendChild(Img1)
  first_section.appendChild(Img2)
  Img.src = "../gallery/cars/va-t-on-assister-a-la-premiere-victoire-d-un-vehicule-electrique-cette-annee-possible-si-on-en-croit-le-capital-sympathie-de-cette-petite-peugeot-photo-peugeot-1578417014.jpg"
  Img1.src = "../gallery/cars/3309305.jpg"
  Img2.src =   "../gallery/cars/308561_original.jpg"


  Img.classList.add('imgs')
  Img1.classList.add('imgs')
  Img2.classList.add('imgs')

  second_section.appendChild(Img3)
  second_section.appendChild(Img4)
  second_section.appendChild(Img5)
  second_section.appendChild(Img6)
  
  Img3.src =  "../gallery/cars/1_rangerover_tracking.jpg"
 
  Img4.src = './gallery/cars/3309305.jpg'

  Img5.src = './gallery/cars/thumb-1920-1042560.jpg'
  Img6.src = './gallery/cars/S0-citadine-berline-suv-monospace-le-guide-des-categories-561296.jpg'
  

  Img3.classList.add('smaller_container')
  Img4.classList.add('smaller_container')
  Img5.classList.add('smaller_container')
  Img6.classList.add('smaller_container')
  console.log(1);

 
})
Ber.addEventListener('click', ()=> {

  first_section.appendChild(Img)
  first_section.appendChild(Img1)
  first_section.appendChild(Img2)
  Img.src = "../gallery/berline/461740-les-berlines-en-2021-resister-aux-vus.jpeg"
  Img1.src = '../gallery/berline/Acura-Type-S-02.jpg'
  Img2.src =   "../gallery/berline/ford-mustang-mach-e-debuts-in-europe.jpg"


  Img.classList.add('imgs')
  Img1.classList.add('imgs')
  Img2.classList.add('imgs')

  second_section.appendChild(Img3)
  second_section.appendChild(Img4)
  second_section.appendChild(Img5)
  second_section.appendChild(Img6)
  
  Img3.src =  "../gallery/berline/S0-Les-meilleures-berlines-familiales-626327.jpg"
 
  Img4.src = '../gallery/berline/S0-citadine-berline-suv-monospace-le-guide-des-categories-561286.jpg'

  Img5.src = '../gallery/berline/shad19_002_crop.jpg'
  Img6.src = '../gallery/berline/image.MQ6.12.20190830113904.jpeg'
  

  Img3.classList.add('smaller_container')
  Img4.classList.add('smaller_container')
  Img5.classList.add('smaller_container')
  Img6.classList.add('smaller_container')
  console.log(1);

 
})

Tru.addEventListener('click', ()=> {

  first_section.appendChild(Img)
  first_section.appendChild(Img1)
  first_section.appendChild(Img2)
  Img.src = "../gallery/trucks/2020_Chevrolet_Silverado_Midnight_Featured.jpg"
  Img1.src = '../gallery/trucks/2021-ford-f-150-red-front-3qtr.webp'
  Img2.src =   "../gallery/trucks/1616580985226.jpeg"


  Img.classList.add('imgs')
  Img1.classList.add('imgs')
  Img2.classList.add('imgs')

  second_section.appendChild(Img3)
  second_section.appendChild(Img4)
  second_section.appendChild(Img5)
  second_section.appendChild(Img6)
  
  Img3.src =  "../gallery/trucks/fastest-trucks-lead.jpg"
 
  Img4.src = '../gallery/trucks/fxslide1.jpg'

  Img5.src = '../gallery/trucks/images.jpg'
  Img6.src = '../gallery/trucks/Trucks-for-Sale-2019-Chevy-Colorado-Red-793x436.jpg'
  

  Img3.classList.add('smaller_container')
  Img4.classList.add('smaller_container')
  Img5.classList.add('smaller_container')
  Img6.classList.add('smaller_container')
  console.log(1);

 
})

Comp.addEventListener('click', ()=> {

  first_section.appendChild(Img)
  first_section.appendChild(Img1)
  first_section.appendChild(Img2)
  Img.src = "../gallery/cars/compact-imgs/2011_chevrolet_new_small_car-1920x1200.jpg"
  Img1.src = '../gallery/cars/compact-imgs/990208.jpg'
  Img2.src =   "../gallery/cars/compact-imgs/990209.jpg"


  Img.classList.add('imgs')
  Img1.classList.add('imgs')
  Img2.classList.add('imgs')

  second_section.appendChild(Img3)
  second_section.appendChild(Img4)
  second_section.appendChild(Img5)
  second_section.appendChild(Img6)
  
  Img3.src =  "../gallery/cars/compact-imgs/carpixel.net-2019-mg-hs-uk-95849-hd.jpg"
 
  Img4.src = '../gallery/cars/compact-imgs/HTUpvx.jpg'

  Img5.src = '../gallery/cars/compact-imgs/2021-hyundai-elantra-silver-front-3qtr-16x9-1.webp'
  Img6.src = '../gallery/cars/compact-imgs/2017-toyota-prius-prime-advanced-201-1599761815.jpg'
  

  Img3.classList.add('smaller_container')
  Img4.classList.add('smaller_container')
  Img5.classList.add('smaller_container')
  Img6.classList.add('smaller_container')
  console.log(1);

 
})