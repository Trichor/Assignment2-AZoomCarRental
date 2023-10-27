var modal = document.getElementById('reserveOverlay');

function searchCars(){
    let query = document.getElementById("searchCarName").value;
    let filter = query.toUpperCase();
    let container = document.getElementById("carContainerReservation");
    container.innerHTML = "";
    availableCars.forEach(car => {
        if (car.name.toUpperCase().indexOf(filter) > -1){
            const carCard = document.createElement("div");
            carCard.className = "carCard";
            carCard.id = car.id;
            carCard.addEventListener("click", function(){
                displayCarReservationDetails(car.id);
            });
            carCard.innerHTML = `<img src="${car.img}" alt="Car" style="width:100%">
                                <div class="carDetails">
                                    <h4><b>${car.name}</b></h4> 
                                </div>`;
            container.appendChild(carCard);
        }
    });

}

function loadCars(){
    availableCars.forEach(car => {
        const carCard = document.createElement("div");
        carCard.className = "carCard";
        carCard.id = car.id;
        carCard.addEventListener("click", function(){
            displayCarReservationDetails(car.id);
         });
        carCard.innerHTML = `<img src="${car.img}" alt="Car" style="width:100%">
                            <div class="carDetails">
                                <h4><b>${car.name}</b></h4> 
                            </div>`;
        document.getElementById("carContainerReservation").appendChild(carCard);
    });

    updateNavbar();
}

function displayCarReservationDetails(id) {
    let date = new Date();
    let year = date.getFullYear().toString();
    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();
    let today = year + "-" + month + "-" + day;
    availableCars.forEach(car => {
        if(car.id == id){
            document.getElementById("displayClickedCar").src = car.img;
            document.getElementById("displayClickedCarName").innerHTML = car.name;
            document.getElementById("displayClickedCarDesc").innerHTML = car.desc;
            document.getElementById("displayClickedCarStartDate").min = today;
            document.getElementById("displayClickedCarStartDate").value = today;
            setEndDate();
            document.getElementById("displayClickedCarSubmit").addEventListener("click", function(){
                reserveCar(car.id);
            });
        }
    });

    

    document.getElementById('reserveOverlay').style.display='block'
}

function setEndDate(){
    let startDate = new Date(document.getElementById("displayClickedCarStartDate").value);
    //console.log(startDate);
    let duration = document.getElementById("displayClickedCarDuration").value;
    let endDate = document.getElementById("displayClickedCarEndDate");
    let length;

    if (duration == "daily"){
        length = 1;
    }
    else if (duration == "weekly"){
        length = 7;
    }
    else{
        length = 30;
    }

    let newDate = new Date(startDate);
    newDate.setDate(startDate.getDate() + length);
    let year = newDate.getFullYear().toString();
    let month = (newDate.getMonth() + 1).toString();
    let day = newDate.getDate().toString();
    let end = day + "-" + month + "-" + year;
    console.log(end);
    endDate.innerHTML = end;
}

function reserveCar(id){
    if(sessionStorage.getItem("email") !== null){

        alert("You have successfully reserved this car!");
        document.getElementById(id).remove();
        modal.style.display = "none";
    }
    else{
        if (confirm("You need to log in first!")) {
            window.location.href = "../HTML/loginAccount.html"
        } 
        else {
            
        }
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

