const fullName = document.getElementById('FullName')
const phone = document.getElementById('Phone')
const email = document.getElementById('Email')
const btn = document.getElementById('btn')

console.log(1);


btn.addEventListener('click', ()=> {
    alert(`Full Name: ${fullName.value}
    Phone: ${phone.value}
    Email: ${email.value}`)
})




