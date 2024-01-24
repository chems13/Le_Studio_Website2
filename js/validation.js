
// declaration de variables :

// <pour les inputs>
let nomInput = document.querySelector('#nom');
let prenomInput = document.querySelector('#prenom');
let telInput = document.querySelector('#tel');
let emailInput = document.querySelector('#email');
let sujetInput = document.querySelector('#sujet');
let messageInput = document.querySelector('#message');

/* <pour les boolean> */
let nomValid = false;
let prenomValid = false;
let telValid = false;
let emailValid = false;
let messageValid = false;
let sujetValid = false;

/* <pour les regex> */
const userRegex = /^[a-zA-Z-]{2,23}$/
const preuserRegex = /^[a-zA-Z-]{2,23}$/
const emailRegex = /^[a-zA-Z0-9-]+@+[a-zA-Z-]+.+[a-zA-Z-]{2,3}$/
const telRegex = /^(0|\+33|\+213)[1-9]( *[0-9]{2}){4}$/
const sujetRegex = /^[a-zA-Z-?!.,:;"\s]{1,50}$/
const messageRegex = /^[a-zA-Z0-9-?!.,:;"\s]{1,300}$/
// Autre expression regulière pour le formatage du tel : /^\+(?:\d{1,3})?\d{10}$/

// verification de la valeur dans le input avec regex
function addClass(input,regex,value){
    if(regex.test(value)) { 
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
    }
    else{
       input.classList.add("is-invalid");
        input.classList.remove("is-valid");

    }
    return true;
}
nomInput.addEventListener("input",(e)=>{
    console.log(e.target.value);
    addClass(nomInput,userRegex,e.target.value)
    if(nomInput.classList.contains("is-valid")){
        nomValid = true;
    }
    else{
        nomValid = false;
    }
})


telInput.addEventListener('input',(e) => {
     let telFormat = e.target.value;    
     telFormat = telFormat.replace(/^0/, '+33');
     telFormat = telFormat.replace(/\s/g, '');
     console.log(telFormat);
     addClass(telInput, telRegex, telFormat);
     if(telInput.classList.contains('is-valid')){
         telValid = true;
     }
     else{
         telValid = false;
     }
 })





prenomInput.addEventListener("input",(e)=>{
    console.log(e.target.value);
    addClass(prenomInput,preuserRegex,e.target.value)
    if(prenomInput.classList.contains("is-valid")){
        prenomValid = true;
    }
    else{
        prenomValid = false;
    }
})

emailInput.addEventListener("input",(e)=>{
    console.log(e.target.value);
    addClass(emailInput,emailRegex,e.target.value)
    if(emailInput.classList.contains("is-valid")){
        emailValid = true;
    }
    else{
        emailValid = false;
    }
})

sujetInput.addEventListener("input",(e)=>{
    console.log(e.target.value);
    addClass(sujetInput,sujetRegex,e.target.value)
    if(sujetInput.classList.contains("is-valid")){
        sujetValid = true;
    }
    else{
        sujetValid = false;
    }
})

messageInput.addEventListener("input",(e)=>{
    console.log(e.target.value);
    addClass(messageInput,messageRegex,e.target.value)
    if(messageInput.classList.contains("is-valid")){
        messageValid = true;
    }
    else{
        messageValid = false;
    }
})

let form = document.querySelector('form');

// Attention:quand j'appelle mon écouteur d'evenement c'est toujours addEventListener(type = "submit" ET NON PAS submitEventListener)

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(sujetValid && messageValid && nomValid&& prenomValid && telValid && emailValid){
    //    METTRE LES CODES SMTP ICI
    Email.send({
        SecureToken : "30b6e97c-3777-472f-82ab-c044275570f6",
        To : "schadevwwm@gmail.com",
        From : "schadevwwm@gmail.com",
        Subject : `${sujetInput.value}`,
        Body : `Bonjour vous avez reçu un message de : ${nomInput.value} ${prenomInput.value}  ${telInput.value} ${emailInput.value} ${sujetInput.value} ${messageInput.value}`
    }).then(
      message => alert(message)
    )
    }
    else{
        alert("Veuillez remplir correctement le formulaire");
    }
})

// MOT DE PASSE studiosite1

