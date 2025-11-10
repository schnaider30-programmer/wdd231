const gridView = document.querySelector("#grid-btn");
const listView = document.querySelector("#list-btn");

const grid = document.querySelector("#cards");

gridView.addEventListener("click", () => {
    grid.classList.add("grid-view");
    grid.classList.remove("list-view");
})

listView.addEventListener("click", () => {
    grid.classList.add("list-view");
    grid.classList.remove("grid-view");
})

