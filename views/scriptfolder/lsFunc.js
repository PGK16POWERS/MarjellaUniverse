const divChild = document.querySelectorAll(".sect-child");

divChild.forEach((child) => {
  const radioBtn = child.querySelector(".radio-button");

  radioBtn.classList.remove("time-selected");

  child.addEventListener("click", () => {
    // Remove the "selected" class from all buttons
    divChild.forEach((otherChild) => {
      otherChild.querySelector(".radio-button").classList.remove("time-selected");
    });

    // Toggle the "selected" class on the clicked button
    radioBtn.classList.toggle("time-selected");

    var name = child.getAttribute("data-name");
    var price = child.getAttribute("data-price");
    var timeDemand = {
        "name": name,
        "price": price
    }
    console.log(timeDemand)

    localStorage.setItem("timeDemand",JSON.stringify(timeDemand))
  });
});