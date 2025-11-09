const gridView = document.querySelector("#grid-btn");
const listView = document.querySelector("#list-btn");

const cards = document.querySelector("#cards");

gridView.addEventListener("click", () => {
    cards.classList.add("grid-view");
    cards.classList.remove("list-view");
})

listView.addEventListener("click", () => {
    cards.classList.add("list-view");
    cards.classList.remove("grid-view");
})

