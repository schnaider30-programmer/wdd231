const cards = document.querySelector("#cards");
const url = 'https://raw.githubusercontent.com/schnaider30-programmer/wdd231/main/chamber/data/members.json';

async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();

    displayMembersInfo(data.companies);

}

getBusinessData();

function displayMembersInfo(members) {
    members.forEach(member => {
        let card = document.createElement("section");
        let name = document.createElement("p");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let link = document.createElement("a");
        let logo = document.createElement("img");

        card.classList.add("business-card");

        name.textContent = `${member.name}`;
        name.className = "company-name";
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;

        link.setAttribute("href", `${member.website}`)
        link.innerHTML = `${member.website}`;

        logo.setAttribute("src", `${member.image}`);
        logo.setAttribute("alt", `${member.name} Logo`);
        logo.setAttribute("loading", "lazy");
        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(link);

        cards.appendChild(card);
    })
}