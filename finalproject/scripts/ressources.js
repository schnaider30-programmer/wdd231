import displayBooks from "./displayBooks.mjs";
import { shuttleArray } from "./displayBooks.mjs";

const url = "https://openlibrary.org/search.json?q=computer+science";

const hamMenu = document.getElementById("ham-button");
const navMenu = document.getElementById("nav-bar");

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle("close");
    navMenu.classList.toggle("open");
})

let currentYear = document.querySelector("#current-year");
let year = new Date().getFullYear();
currentYear.textContent = `${year}`;

let modified = document.lastModified;
document.querySelector("#last-modified").innerHTML = `Last Modification: ${modified}`;

fetchData();

async function fetchData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const shuttle = shuttleArray(data.docs)
        console.log(data.docs)
        displayBooks(shuttle, 15);
    }
    catch (error) {
        throw new Error(`Your request failed. Error type: ${error}`);
    }
}

