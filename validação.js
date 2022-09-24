let nome = document.getElementById('nome')
let form = document.getElementById('form')
let sobre = document.getElementById('sobrenome')
let rg = document.getElementById('rg')
let cpf = document.getElementById('cpf')
let ddd = document.getElementById('ddd')
let tel = document.getElementById('telefone')
let email = document.getElementById('email')
let confirme = document.getElementById('confirm')

form.addEventListener('submit' , (e) => {
    e.preventDefault();


    checkIputs();
});

function checkIputs(){
    let nomeValue = nome.value;
    let sobrenomeValue = sobre.value;
    let rgValue = rg.value;
    let cpfValue = cpf.value;
    let dddvalue = ddd.value;
    let telValue = tel.value;
    let emailValue = email.value;
    let confirmValue = confirme.value;

    if(nomeValue === ""){
        errorfor(nome);
    } else{
        sucessfor(nome);
    }


    if(sobrenomeValue === ""){
        errorfor(sobre);
    }else{
        sucessfor(sobre);
    }


    if(cpfValue === ""){
        errorfor(cpf);
    }else{
        sucessfor(cpf);
    }


    if(rgValue === ""){
        errorfor(rg);
    }else{
        sucessfor(rg);
    }


    if(dddvalue === ""){
        errorfor(ddd);
    }else{
        sucessfor(ddd);
    }


    if(telValue === ""){
        errorfor(tel);
    }else{
        sucessfor(tel);
    }


    if(emailValue === ""){
        errorfor(email);
    }else{
        sucessfor(email);
    }


    if(confirmValue === ""){
        errorfor(confirme);
    }else{
        sucessfor(confirme);
    }
}


function sucessfor(input){
    let baryd = input.parentElement;
    
     
    baryd.className = 'text sucess'
    


}

function errorfor(input){
    let baryde = input.parentElement;

    baryde.className = 'text error marginal'

}


let bory = document.querySelector('.nome')

bory.addEventListener('keypress', function(e){
    let max = 80
    let min = bory.value.length;

    if(min >= max){
        e.preventDefault()
    }
})

let money = document.querySelector('.sobrenome')

money.addEventListener('keypress', function(e){
    let max = 80
    let min = money.value.length;

    if(min >= max){
        e.preventDefault()
    }
});


let ref = document.querySelector('.cpf');

ref.addEventListener('keypress', (e) => {
    let ferd = ref.value.length

    if(ferd >= 14){
        e.preventDefault()
    }

    if(ferd === 3  || ferd === 7 ) {
         
        ref.value += "."    
    }else if(ferd === 11){
        ref.value += "-"
    }else{
   
    }

    

})

let hery = document.querySelector('.rg');

hery.addEventListener('keypress', (e) => {
    let pass = hery.value.length

    if(pass >= 13){
        e.preventDefault()
    }

    if(pass === 2  || pass === 6 ) {
         
        hery.value += "."    
    }else if(pass === 10){
        hery.value += "-"
    }else{
   
    }

    

})

let relss = document.querySelector('.ddd');

relss.addEventListener('keypress', (e) => {
    let heyt = relss.value.length;

    if(heyt >= 2){
        e.preventDefault()
    }
})


let telef = document.querySelector('.telef');

telef.addEventListener('keypress', (e) => {
    let telss = telef.value.length

    if(telss >= 13){
        e.preventDefault()
    }

    if(telss === 2 ) {
         
        telef.value += " "    
    }else if(telss === 8){
        telef.value += "-"
    }else{
   
    }
})