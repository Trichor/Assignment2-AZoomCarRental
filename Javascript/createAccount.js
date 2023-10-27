function createAccount(){
    const createEmail = document.getElementById("signupEmail");
    const createPassword = document.getElementById("signupPassword");
    const verifyPassword = document.getElementById("confirmSignupPassword");
    const alert = document.getElementById("alertBoxSignup");
    const emailAlert = document.getElementById("signupEmailAlert");
    const passwordAlert = document.getElementById("signupPasswordAlert");
    const verifyPasswordAlert = document.getElementById("confirmSignupPasswordAlert");
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let validEmail = false;
    let validPassword = false;
    let verifyValidPassword = false;

    emailAlert.innerHTML = "";
    passwordAlert.innerHTML = "";
    verifyPasswordAlert.innerHTML = "";

    if(createEmail.value == ""){
        emailAlert.innerHTML = "Please enter your email";
        validEmail = false;
    }
    else{
        if(createEmail.value.match(validRegex)){
            validEmail = true;
        }
        else{
            emailAlert.innerHTML = "Invalid email address";
            validEmail = false;
        }
    }

    if(createPassword.value === ""){
        passwordAlert.innerHTML = "Please enter your password";
        validPassword = false;
    }
    else{
        validPassword = true;
    }

    if(verifyPassword.value == ""){
        verifyPasswordAlert.innerHTML = "Please reconfirm your password";
        verifyValidPassword = false;
    }
    else{
        verifyValidPassword = true;
    }

    if(createPassword.value == verifyPassword.value && validEmail == true && validPassword == true && verifyValidPassword == true){
        cAccount.push({email:createEmail.value, password:createPassword.value});
        console.log(cAccount);
        createEmail.value = "";
        createPassword.value = "";
        verifyPassword.value = "";
        alert.innerHTML = "You have successfully created your account!";
    }
    else if(validPassword == true && verifyValidPassword == true && createPassword.value != verifyPassword.value){
        verifyPasswordAlert.innerHTML = "Your passwords do not match, please try again"
    }
}