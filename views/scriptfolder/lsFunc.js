const divChild = document.querySelectorAll(".sect-child");

divChild.forEach((child) => {
  const radioBtn = child.querySelector(".radio-button");

  radioBtn.classList.remove("selected");

  child.addEventListener("click", () => {
    // Remove the "selected" class from all buttons
    divChild.forEach((otherChild) => {
      otherChild.querySelector(".radio-button").classList.remove("selected");
    });

    // Toggle the "selected" class on the clicked button
    radioBtn.classList.toggle("selected");

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