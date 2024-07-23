const btnsignup  = document.getElementById('btnup')
const btnsignin  = document.getElementById('btnin')
const fsignup    = document.getElementById('fsignup')
const fsignin    = document.getElementById('fsignin')
const sign_up    = document.getElementById('signup')
const passwordInput   = document.getElementById('pass')

//////////////////////////////////    transition  btn  ///////////////////////////////////

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

//////////////////////////////////    passwordInput    ///////////////////////////////////

passwordInput.addEventListener('input', function() {  
    const password = passwordInput.value;  
    const gradients = {  
        veryWeak: 'linear-gradient(to right, red 20%, transparent 20%)',  
        weak: 'linear-gradient(to right, red 40%, transparent 40%)',  
        medium: 'linear-gradient(to right, orange 60%, transparent 60%)',  
        strong: 'linear-gradient(to right, green 80%, transparent 80%)',  
        veryStrong: 'linear-gradient(to right, blue 100%, transparent 100%)',  
        default: 'linear-gradient(to right, transparent, transparent)'  
    };  

    if (password === '') {  
        passwordInput.style.borderImage = gradients.default;  
    } else {  
        const strength = getPasswordStrength(password);  
        passwordInput.style.borderImage = gradients[strength];  
    }  
    passwordInput.style.borderImageSlice = 1;  
});  
passwordInput.style.borderImage = gradients[strength] || gradients.default;  
passwordInput.style.borderImageSlice = 1;  


function getPasswordStrength(password) {
    let power = 0;

    if (password.length >= 6) power++;
    if (/[a-z]/.test(password)) power++;
    if (/[A-Z]/.test(password)) power++;
    if (/[0-9]/.test(password)) power++;
    if (/[^a-zA-Z0-9]/.test(password)) power++;

    if (power === 0 || power === 1) {
        return 'veryWeak';
    } else if (power === 2) {
        return 'weak';
    } else if (power === 3) {
        return 'medium';
    } else if (power === 4) {
        return 'strong';
    } else if (power === 5) {
        return 'veryStrong';
    } else {
        return 'veryWeak'; 
    }
}



