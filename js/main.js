// Manipulations REGEX
//---------------------------------------------------------------------------------

// On liste les ID's que contenu dans notre formulaire
//---------------------------------------------------------------------------------
// inputNom / inputPrenom / inputTelephone / inputEmail / inputSujet / inputMessage

// On initialise les constantes correspondantes aux différents champs du formulaire
//---------------------------------------------------------------------------------
const inputNom = document.querySelector('#inputNom')
const inputPrenom = document.querySelector('#inputPrenom')
const inputTelephone = document.querySelector('#inputTelephone')
const inputEmail = document.querySelector('#inputEmail')
const inputSujet = document.querySelector('#inputSujet')
const inputMessage = document.querySelector('#inputMessage')
// console.log();

// On initialise nos variables de validation
//---------------------------------------------------------------------------------
let inputNomValid = false; 
let inputPrenomValid = false;
let inputTelephoneValid = false;
let inputEmailValid = false;
let inputSujetValid = false;
let inputMessageValid = false;

// On définit nos expressions régulières
//---------------------------------------------------------------------------------
const UserRegex = /^[a-zA-Z-]{3,23}$/
const PhoneNumberRegex = /^\+(?:\d{1,3})?\d{10}$/
const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const SujetRegex = /^[^<>{}$]{3,200}$/
const MessageRegex = /^[^<>{}$]{24,}$/

// On crée la fonction addClass (manipulation de classList & de regex.test)
//---------------------------------------------------------------------------------
// function addClass() {
//     if (input == UserRegex) {
//         input.classList.add('is-valid');
//     }
//     alert('non');
// }

// addClass(input);
// console.log();