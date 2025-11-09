let currentYear = document.querySelector("#current-year");
let year = new Date().getFullYear();
currentYear.textContent = `${year}`;

let modified = document.lastModified;
document.querySelector("#last-modified").innerHTML = `Last Modification: ${modified}`;