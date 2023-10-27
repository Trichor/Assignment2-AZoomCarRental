function loginAccount(){
    const loginEmail = document.getElementById("loginEmail");
    const loginPassword = document.getElementById("loginPassword");
    const alert = document.getElementById("alertBoxLogin");
    const emailAlert = document.getElementById("loginEmailAlert");
    const passwordAlert = document.getElementById("loginPasswordAlert");
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let validEmail = false;
    let validPassword = false;

    emailAlert.innerHTML = "";
    passwordAlert.innerHTML = "";

    if(loginEmail.value == ""){
        emailAlert.innerHTML = "Please enter your email";
        validEmail = false;
    }
    else{
        if(loginEmail.value.match(validRegex)){
            validEmail = true;
        }
        else{
            emailAlert.innerHTML = "Invalid email address";
            validEmail = false;
        }
    }

    if(loginPassword.value === ""){
        passwordAlert.innerHTML = "Please enter your password";
        validPassword = false;
    }
    else{
        validPassword = true;
    }

    if(validEmail == true && validPassword == true){
        let accountFound = false;
        cAccount.forEach(account => {
            if (account.email == loginEmail.value){
                accountFound = true;
                if (account.password == loginPassword.value){
                    sessionStorage.setItem("email", loginEmail.value);
                    sessionStorage.setItem("status", "on");
                    sessionStorage.setItem("type", "customer");
                    window.location.href = "../HTML/customerAccount.html";
                }
                else{
                    passwordAlert.innerHTML = "Incorrect password";
                }
            }
        });

        if (accountFound == false){
            eAccount.forEach(account => {
                if (account.email == loginEmail.value){
                    accountFound = true
                    if (account.password == loginPassword.value){
                        sessionStorage.setItem("email", loginEmail.value);
                        sessionStorage.setItem("status", "on");
                        sessionStorage.setItem("type", "employee");
                        window.location.href = "../HTML/employeeAccount.html";
                    }
                    else{
                        passwordAlert.innerHTML = "Incorrect password";
                    }
                }
            });
        }

        if (accountFound == false){
            emailAlert.innerHTML = "Email Account does not exist";
        }
        
    }

}