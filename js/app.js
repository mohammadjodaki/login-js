const btnsignup  = document.getElementById('btnup')
const btnsignin  = document.getElementById('btnin')
const fsignup    = document.getElementById('fsignup')
const fsignin    = document.getElementById('fsignin')
const sign_up    = document.getElementById('signup')
const password   = document.getElementById('pass')


btnsignup.addEventListener('click' , ()=>{
    fsignin.classList.add('active1')
    sign_up.classList.add('active2')
    fsignup.style.visibility = 'hidden'
    sign_up.style.visibility = 'visible'
})

btnsignin.addEventListener('click' , ()=>{
    fsignin.classList.remove('active1')
    sign_up.classList.remove('active2')
    fsignup.style.visibility = 'visible'
    sign_up.style.visibility = 'hidden'
    fsignin.style.transition = '0.6s'
})

password.addEventListener('input' , ()=>{
    let power = 0
    let temp = password.value
    if (temp.length > 8 ) power++
    if (temp.match(/[a-z]/)) power++
    if (temp.match(/[A-Z]/)) power++
    if (temp.match(/[0-9]/)) power++
    if (temp.match(/[~!@#$%^&*(_)]/)) power++
    switch(power){
        case 0: password.style.border='5px solid black'; break;
        case 1: password.style.border='5px solid red'; break;
        case 2: password.style.border='5px solid orange'; break;
        case 3: password.style.border='5px solid yellow'; break;
        case 4: password.style.border='5px solid green'; break;
        case 5: password.style.border='5px solid blue'; break;
    }
})

