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
servicePrice.textContent = `R ${serviceObject.price}`

tdName.textContent = timeDemandObject.name
tdPrice.textContent = `R ${timeDemandObject.price}`

// ACCESS THE TOTAL ELEMENT
const totalPrice = document.querySelector("#result");
var servCost = parseFloat(serviceObject.price);
var timeCost = parseFloat(timeDemandObject.price);
var tC = servCost + timeCost
totalPrice.textContent = `R ${tC}.00`;

// ACCESS DOWMLOAD LINK
var downloadBtn = document.querySelector("#download");

downloadBtn.addEventListener("click", ()=> {
    html2canvas(document.querySelector(".qoutation-div")).then(function(canvas) {
        const dataURL = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.href = dataURL;
        a.download = "quotation.png";
        a.click();
      });
})

