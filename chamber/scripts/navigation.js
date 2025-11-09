const navigation = document.querySelector("#nav-bar");
const hamburgerBtn = document.querySelector("#ham-button");

hamburgerBtn.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamburgerBtn.classList.toggle("close");
})