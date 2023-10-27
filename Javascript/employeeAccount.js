let eName = document.getElementById("employeeName");
let ePassword = document.getElementById("employeePassword");
let eConfirmPassword = document.getElementById("employeeConfirmPassword");
let eEmail = document.getElementById("employeeEmail");
let eSaveInfo = document.getElementById("saveEmployeeInfo");
let ePhone = document.getElementById("employeePhone");

let eNameAlert = document.getElementById("employeeNameAlert");
let ePasswordAlert = document.getElementById("employeePasswordAlert");
let eConfirmPasswordAlert = document.getElementById("employeeConfirmPasswordAlert");
let eEmailAlert = document.getElementById("employeeEmailAlert");
let ePhoneAlert = document.getElementById("employeePhoneAlert");

function openAccountTab(evt, tab) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
}

function activeEmployeeForm(){
    if(document.getElementById("employeeCheckbox").checked == true){
      eName.disabled = false;
      ePassword.disabled = false;
      eEmail.disabled = false;
      eSaveInfo.disabled = false;
      ePhone.disabled = false;
    }
    else{
      eName.disabled = true;
      ePassword.disabled = true;
      eEmail.disabled = true;
      eSaveInfo.disabled = true;
      ePhone.disabled = true;
    }
}

function loadCarReservations(){
    if (sessionStorage.getItem("email") !== null){
        returnCars.forEach(car => {
            const carCard = document.createElement("div");
            carCard.className = "carCard";
            carCard.addEventListener("click", function(){
                displayCarReservationDetails(car.id);
            });
            carCard.innerHTML = `<img src="${car.img}" alt="Car" style="width:100%">
                                <div class="carDetails">
                                    <h4><b>${car.name}</b></h4> 
                                    <p>Status: ${car.status}</p>
                                </div>`;
            document.getElementById("carReservationList").appendChild(carCard);
        });

        eAccount.forEach(employee => {
            if(sessionStorage.getItem("email") == employee.email){
              eName.value = employee.name;
              eEmail.value = employee.email;
              ePassword.value = employee.password;
              ePhone.value = Number(employee.phone);
            }
      
        });
  
        updateNavbar();
    }
    else{
      window.location.href = "../HTML/home.html";
    }
}

function saveEmployeeDetails(){
    let name = false;
    let password = false;
    let confirmPassword = false;
    let email = false;
    let phone = false;
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    eNameAlert.innerHTML = "";
    ePasswordAlert.innerHTML = "";
    eConfirmPasswordAlert.innerHTML = "";
    eEmailAlert.innerHTML = "";
    ePhoneAlert.innerHTML = "";

    if(eEmail.value == ""){
        eEmailAlert.innerHTML = "Please enter your email";
        email = false;
    }
    else{
        if(eEmail.value.match(validRegex)){
            email = true;
        }
        else{
            eEmailAlert.innerHTML = "Invalid email address";
            email = false;
        }
    }

    if(eName.value == ""){
        eNameAlert.innerHTML = "Please enter your name";
        name = false;
    }
    else{
        name = true;
    }

    if(ePassword.value == ""){
        ePasswordAlert.innerHTML = "Please enter your password";
        password = false;
    }
    else{
        password = true;
    }

    if(eConfirmPassword.value == ""){
        eConfirmPasswordAlert.innerHTML = "Please confirm your password";
        confirmPassword = false;
    }
    else{
        confirmPassword = true;
    }

    if(ePhone.value == ""){
        ePhoneAlert.innerHTML = "Please enter your phone number";
        phone = false;
    }
    else{
        phone = true;
    }

    if (name == true && password == true && confirmPassword == true && email == true && phone == true && ePassword.value == eConfirmPassword.value){
        alert("Your account details have been saved!");
    }
    else if (password == true && confirmPassword == true && ePassword.value !== eConfirmPassword.value){
        eConfirmPasswordAlert.innerHTML = "The passwords do not match";
    }
}

function displayCarReservationDetails(id){
    returnCars.forEach(car => {
      if (car.id == id){
        document.getElementById("displayCarReservation").src = car.img;
        document.getElementById("displayCarReservationName").innerHTML = car.name;
        document.getElementById("displayCarReservationStatus").innerHTML = car.status;
        document.getElementById("displayCarReservationDuration").innerHTML = car.start + " - " + car.end;
        if (car.status == "Returned"){
            document.getElementById("displayCarReservationLocation").innerHTML = car.location;
        }
        else{
            document.getElementById("displayCarReservationLocation").innerHTML = "Not set.";
        }

        if (car.status == "Reserved"){
            document.getElementById("displayCarReservationSubmit").addEventListener("click", function(){
                onLoan(car.email, car.id);
            });

            document.getElementById("displayCarReservationSubmit").innerHTML = "Set On Loan";
        }

        else if (car.status == "Returned"){
            document.getElementById("displayCarReservationSubmit").addEventListener("click", function(){
                finalPayment(car.email, car.id);
            });

            document.getElementById("displayCarReservationSubmit").innerHTML = "Final Payment";
        }
      }
    });
  
  
    
  
    document.getElementById('carReservationOverlay').style.display='block'
}

function onLoan(email, id){

}

function finalPayment(email, id){
    let changedStatus = document.getElementById("displayCarReservationChangeStatus");

    if(changedStatus.value == "onLoan"){

    }
}

document.getElementById("defaultEOpen").click();

window.onclick = function(event) {
  if (event.target == document.getElementById("carReservationOverlay")) {
    document.getElementById("carReservationOverlay").style.display = "none";
  }
}