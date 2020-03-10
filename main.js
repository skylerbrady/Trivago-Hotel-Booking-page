// Initializing Hotel Static Data on initial page render
let hotelsData = [{
        //Array object hodling a multiple hotel infos
        hotelName: "ZConrad Bengaluru ",
        price: "1500",
        location: "Bengaluru",
        imageUrl: "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/11/34/11341556.jpeg"
    },
    {
        hotelName: "Radisson Bengaluru",
        price: "1400",
        location: "Bengaluru",
        imageUrl: "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/93/39/9339262_v2.jpeg",

    },
    {
        price: "999",
        location: "Bengaluru",
        hotelName: "The Lark ",
        imageUrl: "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/75/66/7566748_v1.jpeg"

    },
    {
        hotelName: "JW Marriott ",
        price: "5000",
        location: "Bengaluru",
        imageUrl: "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/23/74/2374388.jpeg",
    },
    {
        hotelName: "Purple Cloud ",
        price: "25000",
        location: "Bengaluru",
        imageUrl: "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/99/54/9954060_v3.jpeg",
    }
]

// Initail page render function
function cardHTML() {
    var html = `<div class="card">
     <div class="card-left-side">
     <div class="hotle-image">
     <img src="$(imageUrl)" alt="hotle-image" width="200px" height="200px">
     </div>
    </div>
    <div class="card-right-side">
        <div class="hotel-information">
            <h3>$(hotelName)</h3>
            <p>Hotel</p>
            <hr>
            <p>$(location)</p>
            <hr>
            <p>Excellent (3222 revies)</p>
            <p>Excellent Location . very clean</p>
        </div>
    </div>

    <div class="hotel-price">
        <ul class="price-list">
            <li>Treebo Hotel</li>
            <span>1,505 </span>
            <li>Expedia</li>
            <span>2,008</span>
            <li>Hotels.com</li>
            <span>5,678<span>
            <li>More deals From</li>
            <span>1,404</span>
        </ul>
    </div>
     <div class="view-right">
         <p>Treebo Hotel</p>
         <h2>$(price)</h2>
         <input type="submit " id="submit " value="Free-breakfast " class="submit-style-break">
        <div class="submit-style-div"
         <div class="submit-style-div">
        <input type="submit " id="submit " value="View Deal " class="submit-style">
    </div>
     </div>
    </div> `;
    return html;
}

// Display Dynamic Data
function displayHotelCards(hotels) {
    let cardData = cardHTML(); // storing cardHTML function to carData
    var result = '';
    hotels.forEach(element => {
        let card = cardData;
        let props = Object.keys(element); //selecting all the key element in object, if length is greater then zero and
        if (props.length > 0) {
            props.forEach(prop => { // if html element name and key name both are equal
                card = card.replace('$(' + prop + ')', element[prop]); //replacing html element name with key name
            });
        }
        result += card;
    });

    document.getElementById('card-container').innerHTML = result; //displaying the result to div element 
}

// Sort the Data by Title
function sortByName() { //  this function sorts hotelName in accending order //
    byName = hotelsData.slice(0);
    byName.sort((a, b) => {
        var x = a.hotelName.toLowerCase();
        var y = b.hotelName.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
    });
    displayHotelCards(byName) // calling displayHotelCards function
}

// Sort the Data by Hotel Price
function sortByNumber() { //this function sorts hotelName in accending order
    byNumber = hotelsData.slice(0);
    byNumber.sort((a, b) => {
        var x = a.price;
        var y = b.price;
        return x - y
    });
    displayHotelCards(byNumber) //calling displayHotelCards function

}

// 
function sorting(e) { // to check the value, whether current value is name  
    if (this.value == 'name') { // it calls the sortByName function
        sortByName();
    } else if (this.value == 'price') { // else current value is price it calls sortByNumber function
        sortByNumber();
    } else {
        displayHotelCards(hotelsData); // else it displays the default values
    }
}

var UserInputData = { city: "", checkIn: "", checkOut: "", roomObj: "" }

// when 'click' event triggerd, it calls search function
function search() {
    var cityValue = document.getElementById("select_city").value;
    var checkInDate = document.getElementById("check_in").value;
    var checkOutDate = document.getElementById("check_out").value;
    var room = document.getElementById("room").value;

    var typeselect = document.getElementById("typeselect");
    var typeImg = document.getElementById('typeselectIMG');
    var secondstep = document.getElementById("secondstep");
    var quantInput = document.getElementById("quantity");
    var quantImg = document.getElementById("quantityIMG");
    typeselect.onchange = function() {
        if (this.value != 'off') {
            typeImg.style.visibility = 'visible';
            secondstep.style.visibility = 'visible';
        } else {
            typeImg.style.visibility = 'hidden';
            quantImg.style.visibility = 'hidden';
            secondstep.style.visibility = 'hidden';
        }
    };
    //input changed event
    quantInput.oninput = function() {
        if (this.value != '') {
            quantImg.style.visibility = 'visible';
        } else {
            quantImg.style.visibility = 'hidden';
        }
    };
};


var letters = /^[A-Za-z]+$/;
var numbers = /^[0-9]+$/;
var minimum = document.getElementById("check_in").min = "2019-01-01"
var validation = true
    // if (!cityValue.match(letters)) {
if (cityValue == "") {
    document.getElementById("error1").innerHTML = "Enter City ";
    validation = false;
} else
    document.getElementById("error1").innerHTML = "";


if (checkInDate == "") {
    document.getElementById("error2").innerHTML = "Enter Check-In_date ";
    validation = false;
} else
    document.getElementById("error2").innerHTML = "";
if (checkInDate < minimum) {
    document.getElementById("error6").innerHTML = "It should more then 2019-01-01";
    validation = false;
} else
    document.getElementById("error6").innerHTML = "";
if (checkOutDate == "") {
    document.getElementById("error3").innerHTML = "Enter Check-Out-date ";
    validation = false
} else
    document.getElementById("error3").innerHTML = "";

if ((Date.parse(checkOutDate) <= Date.parse(checkInDate))) {
    document.getElementById("error5").innerHTML = "CheckOut Date should be greater than CheckIN Date"
    document.getElementById("check_out").value = ""
    validation = false;
}
// } else if (!room.match(numbers)) {
else
    document.getElementById("error5").innerHTML = ""
if (room == "") {
    document.getElementById("error4").innerHTML = "Enter Room"
    validation = false;
} else {
    document.getElementById("error4").innerHTML = "";
    return validation
}
UserInputData.city = cityValue;
UserInputData.checkIn = checkInDate;
UserInputData.checkOut = checkOutDate;
UserInputData.roomObj = room;

document.getElementById("select_city_display").value = UserInputData.city;
document.getElementById("check_in_display").value = UserInputData.checkIn;
document.getElementById("check_out_display").value = UserInputData.checkOut;
document.getElementById("room_display").value = UserInputData.roomObj;

document.getElementById("hiding").style.display = "none";
document.getElementById("first-page-input").style.display = "none";
document.getElementById("main-container-second").style.display = "block"
document.getElementById("sort_by").style.display = "block"
displayHotelCards(hotelsData) // displays all hotel informatiom (cards)

}

function clearFields() {
    document.getElementById("select_city").value = ""
    document.getElementById("check_in").value = ""
    document.getElementById("check_out").value = ""
    document.getElementById("room").value = ""

    document.getElementById("error1").innerText = ""
    document.getElementById("error2").innerText = ""
    document.getElementById("error3").innerText = ""
    document.getElementById("error4").innerText = ""

}






function initApp() {
    document.getElementById("submit").addEventListener('click', search) //when  load event triggerd this function called
    document.getElementById('sort_by').addEventListener('change', sorting);
}


window.addEventListener('load', initApp, false); //init function called when onload event triggers.