const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
    //alert('I am in Error!')
    
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    //alert("I am success!!");
    
}

//Event Listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log("I am Listening");
    checkRequiredFields([username, email, password, password2]);
    console.log('I just called checkRequiredFields');
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordMatch(password, password2);
})

//Function - checkLength
function checkLength (input, min, max) {
    if (input.value.length < min) {
        showError (input, `${getFieldName(input)}` + " must be atleast " + `${min}` + "Characters.")
    }
    else if (input.value.length > max) {
        showError (input, `${getFieldName(input)}` + " must be atleast " + `${max}` + "Characters.")
    }
    else {
        showSuccess(input);
    }
}

//Function - checkRequiredFields
function checkRequiredFields(inputArr) {
    inputArr.forEach(function(input) {
    if (input.value.trim() === '') {        
        showError(input, `${getFieldName(input)} is required`)
    }
    else {
        showSuccess(input)
    }            

    })
}
//Function getFieldName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


//Function checkEmail
function checkEmail(email)
{
    const res = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value));
    
    if (res == true) {
        showSuccess(email);
    }
    else {
        showError(email, "Email entered is not valid");
    }

}
//CheckPasswordMatch
function checkPasswordMatch (input1, input2)
{
    if ((input1.value !== input2.value)) {
        showError(input2, "Password doesn't match!!");
    }
    else if ((input1.value === "") && (input2.value === "")) {
        showError(input1, "Password cannot be empty!")
        showError(input2, "Password cannot be empty!")
    }
    else {
        showSuccess(input2);
    }
}


