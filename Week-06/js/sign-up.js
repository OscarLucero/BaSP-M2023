window.onload = function () {
    var signButton = document.getElementById('sign-up');
    signButton.addEventListener('click', signClick);
    getTodayDate();
    var divTxt = document.getElementsByClassName('sign-up');
    divTxtName = divTxt[0];
    nameInput = divTxtName.children[1];
    divLName = divTxt[1];
    lNameInput = divLName.children[1];
    divDni = divTxt[2];
    dniInput = divDni.children[1];
    divDate = divTxt[3];
    dateInput = divDate.children[1];
    divPhone = divTxt[4];
    phoneInput = divPhone.children[1];
    divAddress = divTxt[5];
    addressInput = divAddress.children[1];
    divLocate = divTxt[6];
    locateInput = divLocate.children[1];
    divCode = divTxt[7];
    codeInput = divCode.children[1];
    divEmail = divTxt[8];
    emailInput = divEmail.children[1];
    divPass = divTxt[9];
    passInput = divPass.children[1];
    divConfPass = divTxt[10];
    confPassInput = divConfPass.children[1];

    

    nameInput.onfocus = function(){
        myFocus(nameInput, divTxtName);
    }
    nameInput.onblur = function (){
        myBlur(nameInput, divTxtName);
    }

    lNameInput.onfocus = function(){
        myFocus(lNameInput, divLName);
    }
    lNameInput.onblur = function (){
        myBlur(lNameInput, divLName);
    }

    dniInput.onfocus = function(){
        myFocus(dniInput, divDni);
    }
    dniInput.onblur = function (){
        myBlur(dniInput, divDni);
    }

    dateInput.onfocus = function(){
        myFocus(dateInput, divDate);
    }
    dateInput.onblur = function (){
        myBlur(dateInput, divDate);
    }

    phoneInput.onfocus = function(){
        myFocus(phoneInput, divPhone);
    }
    phoneInput.onblur = function (){
        myBlur(phoneInput, divPhone);
    }

    addressInput.onfocus = function(){
        myFocus(addressInput, divAddress);
    }
    addressInput.onblur = function (){
        myBlur(addressInput, divAddress);
    }

    locateInput.onfocus = function(){
        myFocus(locateInput, divLocate);
    }
    locateInput.onblur = function (){
        myBlur(locateInput, divLocate);
    }

    codeInput.onfocus = function(){
        myFocus(codeInput, divCode);
    }
    codeInput.onblur = function (){
        myBlur(codeInput, divCode);
    }

    emailInput.onfocus = function(){
        myFocus(emailInput, divEmail);
    }
    emailInput.onblur = function (){
        myBlur(emailInput, divEmail);
    }

    passInput.onfocus = function(){
        myFocus(passInput, divPass);
    }
    passInput.onblur = function(){
        myBlur(passInput, divPass);
    }

    confPassInput.onfocus = function(){
        myFocus(confPassInput, divConfPass);
    }
    confPassInput.onblur = function (){
        myBlur(confPassInput, divConfPass);
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

function signClick() {
    var textBoxes = document.getElementsByClassName('sign-up');
    //console.log(textBoxes)
    var data = {
        nameValue : document.getElementById('name').value,
        lastName : document.getElementById('l-name').value,
        dni : document.getElementById('dni').value,
        birthDate : document.getElementById('date').value,
        phone : document.getElementById('phone').value,
        address : document.getElementById('address').value,
        location : document.getElementById('locate').value,
        code : document.getElementById('code').value,
        email : document.getElementById('email').value,
        password : document.getElementById('password').value,
        confPassword : document.getElementById('conf-password').value,
    }
    var allIsValid = true;
    if (!validateNameLastName(data.nameValue, textBoxes[0])) {
        alert('ERROR\nName is invalid')
        allIsValid = false;
    }
    if (!validateNameLastName(data.lastName, textBoxes[1])) {
        alert('ERROR\nLast Name is invalid')
        allIsValid = false;
    }
    if (!validateDNI(data.dni, textBoxes[2])) {
        alert('ERROR\nDNI is invalid')
        allIsValid = false
    }
    if (!isFullAge(data.birthDate, textBoxes[3])) {
        alert('ERROR\nDate of Birth is invalid. You must have more than 18 years')
        allIsValid = false;
    }
    if (!validatePhone(data.phone, textBoxes[4])) {
        alert('ERROR\nPhone is invalid')
        allIsValid = false;
    }
    if (!validateAddress(data.address, textBoxes[5])) {
        alert('ERROR\nThe address is invalid');
        allIsValid = false;
    }
    if (!validateLocation(data.location, textBoxes[6])) {
        alert('ERROR\nLocation is invalid')
        allIsValid = false;
    }
    if (!validateCode(data.code, textBoxes[7])) {
        alert('ERROR\nArea Code is invalid')
        allIsValid = false;
    }
    if (!validateEmail(data.email, textBoxes[8])) {
        alert('ERROR\nInvalid Email')
        allIsValid = false;
    }
    if (!validatePassword(data.password, textBoxes[9])) {
        alert('ERROR\nInvalid Password')
        allIsValid = false;
    }
    if (!validatePassword2(data.password, data.confPassword, textBoxes[10])) {
        alert('ERROR\nPassword do not match')
        allIsValid = false;
    }
    if (allIsValid) {
        alert('¡Register succesfully!\nName: ' + data.nameValue + '\nLast Name: ' + data.lastName + 
        '\nDNI: ' + data.dni + '\nDate of Birth: ' + data.birthDate + '\nPhone Number: ' + data.phone + 
        '\nAddress: ' + data.address + '\nLocation: ' + data.location + '\nArea Code: ' + data.code + 
        '\nEmail: ' + data.email + '\nPassword: ' + data.password + '\nConfirm Password: ' + data.confPassword);
    }
}

function validateNameLastName(x, txtBoxes) {
    var minLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "l", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var mayusLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "M", "N", "L", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var isValid = true;
    var name = x.toLowerCase();
    for (i = 0; i < name.length; i++) {
        if (!minLetters.includes(name[i]) && !mayusLetters.includes(name[i])) {
            isValid = false;
        }
    }
    if (name.length >= 3 && isValid) {
        hError(txtBoxes);
        return true;
    } else{
        sError(txtBoxes);
        return false;
    }
}

function validateDNI(dni, txtBoxes){
    var nums = ['0','1','2','3','4','5','6','7','8','9'];
    var isValid = true;
    for (i = 0; i < dni.length; i++){
        if (!nums.includes(dni[i])) {
            isValid = false;
        }
    }
    if (dni.length >= 7 && isValid) {
        hError(txtBoxes);
        return true;
    }else {
        sError(txtBoxes);
        return false;
    }
}

function getTodayDate(){
    var dateInput = document.getElementById('date');
    var currentDate = new Date();
    var day = currentDate.getDate().toString();
    var month = currentDate.getMonth();
    month++;
    if (month < 10) {
        month = '0' + month;
    }
    month = month.toString();
    var year = currentDate.getFullYear().toString();
    var maxValue = year + '-' + (month) + '-' + day;
    dateInput.setAttribute('max', maxValue);
}

function isFullAge(date, txtBoxes){
    var dateInput = new Date(date);
    var thisMoment = new Date(Date.now());
    var isMajor = new Date(thisMoment - dateInput).getFullYear() - 1970 >= 18;
    if (isMajor) {
        hError(txtBoxes);
        return true;
    }else{
        sError(txtBoxes);
        return false;
    }
}

function validatePhone(phone, txtBoxes){
    var nums = ['0','1','2','3','4','5','6','7','8','9'];
    var isValid = true;
    for(i = 0; i < phone.length; i++){
        if (!nums.includes(phone[i])) {
            isValid = false;
        }
    }
    if (phone.length >= 10 && isValid) {
        hError(txtBoxes);   
        return true;     
    }else {
        sError(txtBoxes);
        return false;
    }
}

function validateAddress(address, txtBoxes){
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
    var space = ' ';
    var isValid = true;
    var char = [];
    for (i = 0; i < address.length; i++) {
        if (letters.includes(address[i])) {
            char.push('l');
            if (i !== 0 && char[(i-1)] === 'n') {
                isValid = false;
            }
        } else if (space === address[i]) {
            char.push('s');
        } else if (numbers.includes(address[i])) {
            char.push('n');
            if (i !== 0 && char[(i-1)] === 'l') {
                isValid = false;
            }
        }
    }
    if(address.length >= 5 && isValid){
        hError(txtBoxes);
        return true;
    } else{
        sError(txtBoxes);
        return false;
    }
}


function validateLocation(locate, txtBoxes){
    var nums = ['0','1','2','3','4','5','6','7','8','9'];
    var minLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "l", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var mayusLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "M", "N", "L", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var locateLower = locate.toLowerCase();
    var numCount = 0;
    var lettMinCount = 0;
    var lettMayusCount = 0;
    var special = false;
    for (i = 0; i < locateLower.length; i++){
        if (nums.includes(locateLower[i])) {
            numCount++;
        }else if (minLetters.includes(locateLower[i])) {
            lettMinCount++;
        }else if (mayusLetters.includes(locateLower[i])) {
            lettMayusCount++;
        }else{
            special = true;
        }
    }
    if (locateLower.length >= 3 && !special) {
        hError(txtBoxes);
        return true;
    }else{
        sError(txtBoxes);
        return false;
    }
}

function validateCode(code, txtBoxes){
    var nums = ['0','1','2','3','4','5','6','7','8','9'];
    var isValid = true;
    for (i = 0; i < code.length; i++) {
        if (!nums.includes(code[i])) {
            isValid = false;
        } 
    }
    if (code.length >= 4 && code.length <= 5 && isValid) {
        hError(txtBoxes);
        return true;
    }else {
        sError(txtBoxes);
        return false
    }
}

function validateEmail(email, txtBoxes){
    var eRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    if (!eRegex.test(email)) {
        sError(txtBoxes)
        return false;
    }else{
        hError(txtBoxes)
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
        hError(txtBoxes)
        return true;
    } else{
        sError(txtBoxes)
        return false;
    }
}

function validatePassword2(password, confPassword, txtBoxes){
    if (password === confPassword) {
        hError(txtBoxes);
        return true;
    }else{
        sError(txtBoxes);
        return false;
    }
}

function sError(divsTxt) {
    var divChild = divsTxt.children;
    divChild[1].classList.add('input-error')
    divChild[2].classList.remove('error-view');
}

function hError(divsTxt){
    var divChild = divsTxt.children;
    divChild[1].classList.remove('input-error')
    divChild[2].classList.add('error-view');
}