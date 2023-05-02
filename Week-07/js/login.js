window.onload = function () {
    var logButton = document.getElementById('login');
    var divTxt = document.getElementsByClassName('login-input');
    emailTxtDiv = divTxt[0];
    passwordTxtDiv = divTxt[1];
    emailInput = emailTxtDiv.children[1];
    passwordInput = passwordTxtDiv.children[1];
    logButton.addEventListener('click', logClick);
    var form = document.getElementById('form'); 

    emailInput.onfocus = function(){
        myFocus(emailInput, emailTxtDiv)
    }
    emailInput.onblur = function (){
        myBlur(emailInput, emailTxtDiv);
    }
    passwordInput.onfocus = function(){
        myFocus(passwordInput, passwordTxtDiv)
    }
    passwordInput.onblur = function (){
        myBlur(passwordInput, passwordTxtDiv);
    }
}

function myFocus(input, divTxtBox){
   hError(divTxtBox);
}

function myBlur(input, divTxtBox){
    if (input.value == "") {
        sError(divTxtBox);
    }else{
        hError(divTxtBox);
    }
}
function validateEmail(email) {
    var eRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    if (!eRegex.test(email)) {
        return false;
    }else{
        return true; 
    }
}

function validatePassword(password, txtBoxes) {
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var num = 0;
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "l", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var char = 0;
    var mayus = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "M", "N", "L", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var mayusCount = 0;
    var signs = false;
    for (i = 0; i < password.length; i++) {
        if (numbers.includes(password[i])) {
            num++;
        } else if(letters.includes(password[i])){
            char++;
        } else if (mayus.includes(password[i])) {
            mayusCount++;
        }else{
            signs = true;
        }
    }
    if (password.length >= 8 && num >= 1 && char >=1 && !signs) {
        return true;
    } else{
        return false;
    }
}

function sError(divsTxt) {
    var divChild = divsTxt.children;
    divChild[1].classList.add('error');
    divChild[1].classList.add('input-error');
    divChild[2].classList.remove('error-view');
}

function hError(divsTxt){
    var divChild = divsTxt.children;
    divChild[1].classList.remove('error');
    divChild[1].classList.remove('input-error');
    divChild[2].classList.add('error-view');
}

function request(emailValue, passwordValue, url){
    fetch((url + '?email=' + emailValue + '&password=' + passwordValue), {
        method : 'GET',
        params : {
            email : emailValue,
            password : passwordValue,
        }
    })
    .then(function(response){
        return response.json();
    })
    .then(function(jsonResponse){
        console.log(jsonResponse)
        alert(jsonResponse.msg);
    })
    .catch(function(error){
        console.warn(error);
    });
}

function logClick() {
    var email = emailInput.value;
    var password = passwordInput.value;
    var errors = [];
    var errorAlert = '';
    if (!validateEmail(email)) {
        errors.push('\nEmail');
        sError(emailTxtDiv);
    }else{
        hError(emailTxtDiv);
    }
    if (!validatePassword(password)) {
        errors.push('\nPassword');
        sError(passwordTxtDiv);
    }else{
        hError(passwordTxtDiv);
    }
    if (validateEmail(email) && validatePassword(password)) {
        request(email, password, 'https://api-rest-server.vercel.app/login')
    }else{
        for (var i = 0; i < errors.length; i++) {
            errorAlert = errorAlert + errors[i] + ' ';
            
        }
        alert('The parameters are invalid: ' + errorAlert);
        
    }
}
