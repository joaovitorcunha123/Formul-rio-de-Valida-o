let username = document.getElementById('username');
let password = document.getElementById('password');
let form = document.getElementById('form');






form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkIputs();
});



function checkIputs() {
    let usernameValue = username.value;
    let passwordValue = password.value;

   
  

    if(usernameValue === "") {
        errorValidation(username , 'preencha este campo!')
    }
    else{
        sucessValidation(username)
    }


  if(passwordValue === ""){
    errorValidation(password, 'preencha este campo!');
  }else if(passwordValue.length < 11){
    errorValidation(password ,'A senha deve conter 11 caracteres' )

  }
  else{
    sucessValidation(password);
  }
} 

function errorValidation(input,message) {
    let formControl = input.parentElement;
   let small = formControl.querySelector('small');
    
    small.innerText = message;

    formControl.className = 'rei'

}

function sucessValidation(input){
    let bary = input.parentElement;
    bary.className = 'errormain'

    
}



let senha = document.querySelector(".password")
let btn = document.querySelector(".fa-eye")



senha.addEventListener("keypress", function(e){
  let max = 11;
let min = senha.value.length;

if(min >= max){
  e.preventDefault();

}
});

btn.onclick = () => {
 
 if(senha.type == 'password'){
  senha.type = 'text'
 btn.src = 'olho1.png'
 }
 else{
  senha.type = 'password'
  btn.src = 'olho2.png'
 }

};




