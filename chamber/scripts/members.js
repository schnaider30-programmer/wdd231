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
        let para1 = document.createElement("p");
        let para2 = document.createElement("p");
        let link = document.createElement("a");
        let logo = document.createElement("img");

        card.classList.add("business-card");

        para1.textContent= `${member.address}`;
        para2.textContent = `${member.phone}`;

        link.setAttribute("href", `${member.website}`)
        link.innerHTML = `${member.website}`;

        logo.setAttribute("src", `${member.image}`);
        logo.setAttribute("alt", `${member.name} Logo`);
        logo.setAttribute("loading", "lazy");

        card.appendChild(logo);
        card.appendChild(para1);
        card.appendChild(para2);
        card.appendChild(link);

        cards.appendChild(card);
    })
}