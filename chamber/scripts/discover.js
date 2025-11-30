import { places } from "../data/places.mjs";

const placesCard = document.querySelector(".places-card");

const messageParagraph = document.getElementById("message");

//Retrieve last visit from local storage, will be empty if first visit
const lastVisit = localStorage.getItem("lastVisit");

//Retrieve today date in Milliseconds
const today = Date.now();

displayPlaces(places);

let message = "";

if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions.";
}
else { 
    const theDay = getDaysbetween(today, lastVisit);
    if (theDay < 1) {
        message = "Back so soon! Awesome!";
    }
    else {
        message = `You last visited ${theDay} day${theDay === 1 ? "" : "s"} ago.`
    }
}

messageParagraph.textContent = message;

localStorage.setItem("lastVisit", today.toString());

function displayPlaces(places) {

    places.forEach(place => {
        const card = document.createElement("div");

        const name = document.createElement("h2");
        name.textContent = `${place.name}`;
        
        const picture = document.createElement("picture");
        const photo = document.createElement("img");
        photo.setAttribute("src", `images/${place.imageUrl}`);
        photo.setAttribute("alt", `An image of ${place.name}`);
        photo.setAttribute("loading", "lazy");
        photo.setAttribute("width", "300");
        photo.setAttribute("height", "200");

        picture.appendChild(photo)

        const description = document.createElement("p");
        description.textContent = `${place.description}`;

        const address = document.createElement("address");
        address.textContent = `${place.address}`;

        const button = document.createElement("button");
        button.className = "cta-button";
        button.textContent = "Learn More";
        button.type = "button"

        card.appendChild(name);
        card.appendChild(picture);
        card.appendChild(description);
        card.appendChild(address);
        card.appendChild(button);

        placesCard.appendChild(card);

    });

};

function getDaysbetween(day1, day2) {
    //substract day2 from day1
    const subs = Math.abs(day2 - day1);

    // milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
    const msToDays = 86400000;

    //convert day value millisecond to day value in day
    const day = subs / msToDays;

    //delete decimales value

    return Math.floor(day);
}
