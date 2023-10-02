// ACCESS LOCAL STORAGE
var serviceObject = JSON.parse(localStorage.getItem("ServiceType"));
var timeDemandObject = JSON.parse(localStorage.getItem("timeDemand"));

// ACCESS HTML ELEMENTS
var serviceName = document.querySelector("#serviceName");
var servicePrice = document.querySelector("#servicePrice"); 

var tdName = document.querySelector("#tdName");
var tdPrice = document.querySelector("#timeDemandPrice");

// ACCESS THE ELEMENTS WITH THE LOCAL STORAGE DATA
serviceName.textContent = serviceObject.name
servicePrice.textContent = serviceObject.price

tdName.textContent = timeDemandObject.name
tdPrice.textContent = timeDemandObject.price

// ACCESS THE TOTAL ELEMENT
const totalPrice = document.querySelector("#result");
