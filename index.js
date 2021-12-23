const fullName = document.getElementById('FullName')
const phone = document.getElementById('Phone')
const email = document.getElementById('Email')
const btn = document.getElementById('btn')



function navSlide(){
    const icon = document.querySelector('.icon-container')
    const nav = document.querySelector('.nav-links')
    const NavLinks = document.querySelectorAll('.nav-links li')

    icon.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active')

    NavLinks.forEach((link, index)=> {
        if(link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `NavLinksFade 0.5s ease forwards ${index / 5 + 0.3}s`
        }
    })

    }) 
}

navSlide()

/// pop Up

btn.addEventListener('click', getValues)

function getValues(){
    alert(`    Full Name: ${fullName.value}
    Phone: ${phone.value}
    Phone: ${email.value}
    `)
    




}