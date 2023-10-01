document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#newsForm");
  
    form.addEventListener("submit", (e) => {
      const inpField = document.querySelector("#emailInp");
      const errMessage = document.querySelector("#errMess");
  
      if (inpField.value.length === 0) {
        e.preventDefault();
        errMessage.textContent = "Enter Valid Email";
      } else {
        errMessage.textContent = "";
      }
    });
  });
  