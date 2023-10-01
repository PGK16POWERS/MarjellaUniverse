const faqChild = document.querySelectorAll(".faq-child");


faqChild.forEach((div)=> {
    const more = div.querySelector("#more");
    const less = div.querySelector("#less");
    const ansDiv = div.querySelector(".ans-para");

    more.addEventListener("click",()=> {
        more.style.display = "none";
        less.style.display = "block";
        ansDiv.style.display = "block";

        less.addEventListener("click",()=> {
            more.style.display = "block";
            less.style.display = "none";
            ansDiv.style.display = "none";
        })
    })
})