let eAccount = [{email: "employee1@gmail.com", password: "working247", name: "John Doe", phone: "87654329"}];
let cAccount = [{email: "trichortkj@gmail.com", password: "example98", name: "Tan Kun Jie", phone: "92345678"}];
let availableCars = [{id: "car1", name: "Mercedes-Benz EQS", img: "../Images/MercedesBenzEQS.jpg", desc: "The EQS grasps all the advantages an EV promises – smoothness, peace, effortless performance and clever body packaging – and blends all of the above with everything Mercedes has learned over several decades of building classy plutocrat barges. It’s an exquisite vehicle to cover distance in, to drive or in which to be driven, finished nigh-on perfectly and peppered with attention to detail."}, 
                    {id: "car2", name: "Volvo XC40 Recharge", img: "../Images/VolvoXC40Recharge.jpg", desc: "We loved the XC40 from the get-go but had a few reservations about the powertrains. Not any more. In battery-electric guise the XC40’s worthier attributes – the thoughtful packaging, sense of well-being and design – are augmented by a remarkable new turn of speed and handling smarts. Like the Tesla Model 3 (and related Polestar 2), the XC40 makes an almost irresistible case for electrification."}, 
                    {id: "car3", name: "Peugeot e-2008", img: "../Images/Peugeot_e_2008.jpg", desc: "With its second attempt, Peugeot has made the 2008 a properly appealing thing in its own right. It looks way more special than it did before, like it’s been sketched seperately to its base car where the last one resembled a 208 photocopied at 130 per cent. And with the combination of spangly 3D dials and electric power, it feels futuristic without any Back to the Future Part II naffness."}];
let reservedCars = [{id: "car3", email: "trichortkj@gmail.com", name: "Peugeot e-2008", img: "../Images/Peugeot_e_2008.jpg", start: "", end: "", desc: "With its second attempt, Peugeot has made the 2008 a properly appealing thing in its own right. It looks way more special than it did before, like it’s been sketched seperately to its base car where the last one resembled a 208 photocopied at 130 per cent. And with the combination of spangly 3D dials and electric power, it feels futuristic without any Back to the Future Part II naffness."}];
let returnCars = [{id: "car3", email: "trichortkj@gmail.com", name: "Peugeot e-2008", img: "../Images/Peugeot_e_2008.jpg", start: "", end: "", location: "Jurong East Branch", status: "Returned"}]

function updateNavbar(){
    //console.log(window.location.pathname);
    if(sessionStorage.getItem("email") !== null){
        const accountBtn = document.createElement("a");
        const logOutBtn = document.createElement("a");
        accountBtn.addEventListener("click", accountBtnOnClick);
        logOutBtn.addEventListener("click", logoutBtnOnClick);
        accountBtn.innerHTML = "Account";
        logOutBtn.innerHTML = "Log Out";
        accountBtn.className = "rightNavBtn";
        logOutBtn.className = "rightNavBtn";
        document.getElementById("navBar").appendChild(logOutBtn);        
        document.getElementById("navBar").appendChild(accountBtn);
    }
    else{
        const loginBtn = document.createElement("a");
        loginBtn.href = "../HTML/loginAccount.html"
        loginBtn.innerHTML = "Login";
        loginBtn.className = "rightNavBtn";
        document.getElementById("navBar").appendChild(loginBtn);
    }
}

function loginBtnOnClick(){
    if (sessionStorage.getItem("email") !== null){
        const type = sessionStorage.getItem("type");
        if (type == "employee"){
            window.location.href = "../HTML/employeeAccount.html";
        }
        else{
            window.location.href = "../HTML/customerAccount.html";
        }
    }
    else{
        window.location.href = "../HTML/loginAccount.html";
    }
}

function accountBtnOnClick(){
    const type = sessionStorage.getItem("type");
    if (type == "employee"){
        window.location.href = "../HTML/employeeAccount.html";
    }
    else{
        window.location.href = "../HTML/customerAccount.html";
    }
}

function logoutBtnOnClick(){
    sessionStorage.clear();
    window.location.href = "../HTML/home.html"
}