let cName = document.getElementById("customerName");
let cPassword = document.getElementById("customerPassword");
let cConfirmPassword = document.getElementById("customerConfirmPassword");
let cEmail = document.getElementById("customerEmail");
let cPhone = document.getElementById("customerPhone");
let cCreditCard = document.getElementById("customerCC");
let cSaveDetails = document.getElementById("saveCustomerInfo");

let cNameAlert = document.getElementById("customerNameAlert");
let cPasswordAlert = document.getElementById("customerPasswordAlert");
let cConfirmPasswordAlert = document.getElementById("customerConfirmPasswordAlert");
let cEmailAlert = document.getElementById("customerEmailAlert");
let cPhoneAlert = document.getElementById("customerPhoneAlert");
let cCreditCardAlert = document.getElementById("customerCCAlert");

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

function activeForm(){
  if(document.getElementById("customerCheckbox").checked == true){
    cName.disabled = false;
    cPassword.disabled = false;
    cConfirmPassword.disabled = false;
    cEmail.disabled = false;
    cPhone.disabled = false;
    cCreditCard.disabled = false;
    cSaveDetails.disabled = false;
  }
  else{
    cName.disabled = true;
    cPassword.disabled = true;
    cConfirmPassword.disabled = true;
    cEmail.disabled = true;
    cPhone.disabled = true;
    cCreditCard.disabled = true;
    cSaveDetails.disabled = true;
  }
}

function loadReservedCars(){
  if (sessionStorage.getItem("email") !== null){
    reservedCars.forEach(car => {
      if (sessionStorage.getItem("email") == car.email){
        const carCard = document.createElement("div");
        carCard.className = "carCard";
        carCard.addEventListener("click", function(){
            displayReservedCarDetails(car.id);
        });
        carCard.innerHTML = `<img src="${car.img}" alt="Car" style="width:100%">
                            <div class="carDetails">
                                <h4><b>${car.name}</b></h4> 
                            </div>`;
        document.getElementById("reservedCarList").appendChild(carCard);
      }
    });

    cAccount.forEach(customer => {
      if(sessionStorage.getItem("email") == customer.email){
        cName.value = customer.name;
        cEmail.value = customer.email;
        cPassword.value = customer.password;
        cPhone.value = Number(customer.phone);
      }

    });

    updateNavbar();
  }
  else{
    window.location.href = "../HTML/home.html";
  }
}

function saveCustomerDetails(){
  let name = false;
  let password = false;
  let confirmPassword = false;
  let email = false;
  let phone = false;
  let cc = false;
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  cNameAlert.innerHTML = "";
  cPasswordAlert.innerHTML = "";
  cConfirmPasswordAlert.innerHTML = "";
  cEmailAlert.innerHTML = "";
  cPhoneAlert.innerHTML = "";
  cCreditCardAlert.innerHTML = "";

  if(cEmail.value == ""){
    cEmailAlert.innerHTML = "Please enter your email";
    email = false;
  }
  else{
    if(cEmail.value.match(validRegex)){
        email = true;
    }
    else{
        cEmailAlert.innerHTML = "Invalid email address";
        email = false;
    }
  }

  if(cName.value == ""){
    cNameAlert.innerHTML = "Please enter your name";
    name = false;
  }
  else{
    name = true;
  }

  if(cPassword.value == ""){
    cPasswordAlert.innerHTML = "Please enter your password";
    password = false;
  }
  else{
    password = true;
  }

  if(cConfirmPassword.value == ""){
    cConfirmPasswordAlert.innerHTML = "Please confirm your password";
    confirmPassword = false;
  }
  else{
    confirmPassword = true;
  }

  if(cPhone.value == ""){
    cPhoneAlert.innerHTML = "Please enter your phone number";
    phone = false;
  }
  else{
    phone = true;
  }

  if(cCreditCard.value == ""){
    cCreditCardAlert.innerHTML = "Please enter your credit card details";
    cc = false;
  }
  else{
    cc = true;
  }

  if (name == true && password == true && confirmPassword == true && email == true && phone == true && cc == true && cPassword.value == cConfirmPassword.value){
    alert("Your account details have been saved!");
  }
  else if (password == true && confirmPassword == true && cPassword.value !== cConfirmPassword.value){
    cConfirmPasswordAlert.innerHTML = "The passwords do not match";
  }

}

function displayReservedCarDetails(id){
  reservedCars.forEach(car => {
    if (car.id == id){
      document.getElementById("displayReservedCar").src = car.img;
      document.getElementById("displayReservedCarName").innerHTML = car.name;
      document.getElementById("displayReservedCarDesc").innerHTML = car.desc;
      document.getElementById("displayReservedCarDuration").innerHTML = car.start + " - " + car.end;
      document.getElementById("displayreservedCarSubmit").addEventListener("click", function(){
        returnCar(car.id);
      });
    }
  });


  

  document.getElementById('reservedCarOverlay').style.display='block'
}

function returnCar(id){

}
  
document.getElementById("defaultOpen").click();

window.onclick = function(event) {
  if (event.target == document.getElementById("reservedCarOverlay")) {
    document.getElementById("reservedCarOverlay").style.display = "none";
  }
}