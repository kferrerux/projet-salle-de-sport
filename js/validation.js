// Manipulations REGEX
//---------------------------------------------------------------------------------

// On liste les ID's que contenu dans notre formulaire
//---------------------------------------------------------------------------------
// inputNom / inputPrenom / inputTelephone / inputEmail / inputSujet / inputMessage

// On initialise les constantes correspondantes aux différents champs du formulaire
//---------------------------------------------------------------------------------
const inputNom = document.querySelector('#inputNom');
const inputPrenom = document.querySelector('#inputPrenom');
const inputTelephone = document.querySelector('#inputTelephone');
const inputEmail = document.querySelector('#inputEmail');
const inputSujet = document.querySelector('#inputSujet');
const inputMessage = document.querySelector('#inputMessage');
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
const userRegex = /^[a-zA-Z-]{3,23}$/;
const phoneNumberRegex = /^\+(?:\d{1,3})?\d{10}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const sujetRegex = /^[^<>{}$]{3,200}$/;
const messageRegex = /^[^<>{}$]{24,}$/;

// On crée la fonction addClass (manipulation de classList & de regex.test)
//---------------------------------------------------------------------------------
// On déclare la fontion 'addClass' avec pour paramètres (element, regex & value)
function addClass(element, regex, value) {
    // Si la valeur de regex.test renvoi 'vrai'
    if (regex.test(value)) {
        // Alors on ajoute la classe 'is-valid'
        element.classList.add('is-valid');
        // Alors on supprime la classe 'is-invalid'
        element.classList.remove('is-invalid');
    // Sinon (la valeur de regex.test est différente, donc fausse) 
    } else {
        // Alors on supprime la classe 'is-valid'
        element.classList.remove('is-valid');
        // Alors on ajoute la classe 'is-invalid'
        element.classList.add('is-invalid'); 
    }
}

// On va venir ajouter un écouteur d'évènement de type 'input' sur le champ concerné
//---------------------------------------------------------------------------------
// Evènement sur le champ inputNom
inputNom.addEventListener('input', (e) => {
    // Ci-dessous nous apellons la fonction 'addClass' avec pour paramètres le nom du champ concerné (inputNom),
    // La valeur de userRegex et nous pointons la valeur de e.target
    addClass(inputNom, userRegex, e.target.value); // Le e.target.value enregistre l'information de la saisie
    // Si le champ contenant l'ID "inputNom" contient la classe 'is-valid'
    if (inputNom.classList.contains('is-valid')) {
        // Alors la variable inputNomValid est vraie
        inputNomValid = true;
    // Sinon et si l'élément contenant l'ID "inputNom" ne contient pas la classe 'is-valid'
    } else {
        // Alors la variable inputNomValid est fausse
        inputNomValid = false;
    }
})
// Evènement sur le champ inputPrenom
inputPrenom.addEventListener('input', (e) => {
    // Ci-dessous nous apellons la fonction 'addClass' avec pour paramètres le nom du champ concerné (inputPrenom),
    // La valeur de userRegex et nous pointons la valeur de e.target
    addClass(inputPrenom, userRegex, e.target.value);
    // Si le champ contenant l'ID "inputPrenom" contient la classe 'is-valid'
    if (inputPrenom.classList.contains('is-valid')) {
        // Alors la variable inputPrenomValid est vraie
        inputPrenomValid = true;
    // Sinon et si l'élément contenant l'ID "inputPrenom" ne contient pas la classe 'is-valid'
    } else {
        // Alors la variable inputNomValid est fausse
        inputPrenomValid = false;
    }
})
// Evènement sur le champ inputEmail
inputEmail.addEventListener('input', (e) => {
    // Ci-dessous nous apellons la fonction 'addClass' avec pour paramètres le nom du champ concerné (inputEmail),
    // La valeur de userRegex et nous pointons la valeur de e.target
    addClass(inputEmail, emailRegex, e.target.value);
    // Si le champ contenant l'ID "inputEmail" contient la classe 'is-valid'
    if (inputEmail.classList.contains('is-valid')) {
        // Alors la variable inputEmailValid est vraie
        inputEmailValid = true;
    // Sinon et si l'élément contenant l'ID "inputEmail" ne contient pas la classe 'is-valid'
    } else {
        // Alors la variable inputEmailValid est fausse
        inputEmailValid = false;
    }
})
// Evènement sur le champ inputSujet
inputSujet.addEventListener('input', (e) => {
    // Ci-dessous nous apellons la fonction 'addClass' avec pour paramètres le nom du champ concerné (inputSujet),
    // La valeur de userRegex et nous pointons la valeur de e.target
    addClass(inputSujet, sujetRegex, e.target.value);
    // Si le champ contenant l'ID "inputSujet" contient la classe 'is-valid'
    if (inputSujet.classList.contains('is-valid')) {
        // Alors la variable inputSujetValid est vraie
        inputSujetValid = true;
    // Sinon et si l'élément contenant l'ID "inputSujet" ne contient pas la classe 'is-valid'
    } else {
        // Alors la variable inputSujetValid est fausse
        inputSujetValid = false;
    }
})
// Evènement sur le champ inputMessage
inputMessage.addEventListener('input', (e) => {
    // Ci-dessous nous apellons la fonction 'addClass' avec pour paramètres le nom du champ concerné (inputMessage),
    // La valeur de userRegex et nous pointons la valeur de e.target
    addClass(inputMessage, messageRegex, e.target.value);
    // Si le champ contenant l'ID "inputMessage" contient la classe 'is-valid'
    if (inputMessage.classList.contains('is-valid')) {
        // Alors la variable inputSujetValid est vraie
        inputMessageValid = true;
    // Sinon et si l'élément contenant l'ID "inputMessage" ne contient pas la classe 'is-valid'
    } else {
        // Alors la variable inputSujetValid est fausse
        inputMessageValid = false;
    }
})

// Evènement sur le champ inputTelephone
//---------------------------------------------------------------------------------
// Pour le téléphone, nous utilisons la méthode 'replace' pour remplacer le 0 par +33
// Nous initialisons deux variables 'phoneNumber' prends valeur 0 et 'newPhoneNumber' viendra remplacer 'phoneNumber' (0 par +33)
//---------------------------------------------------------------------------------
// let phoneNumber = '0';
// let newPhoneNumber = phoneNumber.replace(/^0/, '+33');
// console.log(newPhoneNumber);

// Evènement sur le champ inputTelephone
inputTelephone.addEventListener('input', (e) => {
    // On initialise une variable tel dans laquelle on encapsule la valeur de l'évènement
    let tel = e.target.value;
    // On va remplacer ce que l'utilisateur va écrire
    tel = tel.replace(/^0/, '+33');
    tel = tel.replace(/\s/g, '');
    // Ci-dessous nous apellons la fonction 'addClass' avec pour paramètres le nom du champ concerné (inputNom),
    // La valeur de userRegex et nous pointons la valeur de e.target
    addClass(inputTelephone, phoneNumberRegex, tel);
    // Si le champ contenant l'ID "inputNom" contient la classe 'is-valid'
    if (inputTelephone.classList.contains('is-valid')) {
        // Alors la variable inputNomValid est vraie
        inputTelephoneValid = true;
    // Sinon et si l'élément contenant l'ID "inputNom" ne contient pas la classe 'is-valid'
    } else {
        // Alors la variable inputNomValid est fausse
        inputTelephoneValid = false;
    }
})

// Evènement sur la soumission du formulaire
let message = 'Votre email a bien été envoyé, merci!';
let form = document.querySelector('#formulaire');

form.addEventListener("submit", (e) => {
    if (inputNomValid && inputPrenomValid && inputTelephoneValid && inputEmailValid && inputSujetValid && inputMessageValid) {
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "username",
            Password : "password",
            To : 'them@website.com',
            From : "you@isp.com",
            Subject : "This is the subject",
            Body : "And this is the body"
        }).then(
          message => alert(message)
        );
    } else {
        alert('Les pré-requis ne sont pas respectés.');
    }
})