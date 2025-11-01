const hamBtn = document.querySelector("#ham-btn");
const navLinks = document.querySelector("#nav-links");

hamBtn.addEventListener("click", () => {
    hamBtn.classList.toggle("show");
    navLinks.classList.toggle("show");
})