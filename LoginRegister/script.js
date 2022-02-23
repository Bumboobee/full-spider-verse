var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})


const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');
});

// function register(event){
    
//     event.preventDefault();

//     const formData = new FormData(event.target);    

//     localStorage.setItem('name',formData.get('name'));
//     localStorage.setItem('email',formData.get('email'));
//     localStorage.setItem('password',formData.get('password'));
    
//     location.href = '/LoginRegister/Login.html';
// }

// function logar(event){
//     event.preventDefault();
//     const formData = new FormData(event.target); 

//     const email = formData.get('email');
//     const senha = formData.get('password');

//     if(email == localStorage.getItem('email') && senha == localStorage.getItem('password')){
//         location.href = 'Index.html';
//     }else{
//         alert('Email e/ou senha não correspondem.');
//     }
// }