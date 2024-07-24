const btnsignup       = document.getElementById('btnup')
const btnsignin       = document.getElementById('btnin')
const fsignup         = document.getElementById('fsignup')
const fsignin         = document.getElementById('fsignin')
const signup          = document.getElementById('signup')
const signin          = document.getElementById('signin')
const passwordInput   = document.getElementById('pass')
const passwordStrength = document.querySelectorAll('.pass-str')
const userName        = document.getElementById('username')

//////////////////////////////////    transition  btn  ///////////////////////////////////

btnsignup.addEventListener('click' , ()=>{
    fsignup.classList.add('active')
    fsignin.classList.add('active')
    signup.classList.remove('active')
    signin.classList.remove('active')
    fsignup.style.visibility = 'hidden'
    signin.style.visibility = 'hidden'
    fsignup.style.opacity = '0'
    signin.style.opacity = '0'
})

btnsignin.addEventListener('click' , ()=>{
    fsignup.classList.remove('active')
    fsignin.classList.remove('active')
    signup.classList.add('active')
    signin.classList.add('active')
    fsignup.style.visibility = 'visible'
    signin.style.visibility = 'visible'
    fsignup.style.opacity = '1'
    signin.style.opacity = '1'
})

//////////////////////////////////    passwordInput    ///////////////////////////////////

function getPasswordStrength(password) {
    let power = 0;

    if (password.length >= 6) power++
    if (/[0-9]/.test(password)) power++
    if (/[A-Z]/.test(password)) power++
    if (/[#?!@$%^&*]/.test(password)) power++

    return power;
}

passwordInput.addEventListener('input', function(event) {  
    let password = event.target.value;
    let strength = getPasswordStrength(password)
    let degree = strength * 90; 

    let gradientColor;
    if (strength <= 1) {
        gradientColor = '#ff2c1c'
    } else if (strength <= 2) {
        gradientColor = '#ff9800'
    } else if (strength <= 3) {
        gradientColor = '#00bcd4'
    } else if (strength <= 4) {
        gradientColor = '#8bc34a'
    }

    passwordStrength.forEach(strengthElement => {
        strengthElement.style.background = `conic-gradient(${gradientColor} ${degree}deg, #cac9c9 ${degree}deg)`;
    });
});

