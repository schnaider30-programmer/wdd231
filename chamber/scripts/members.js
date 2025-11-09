const cards = document.querySelector("#cards");
const url = 'https://github.com/schnaider30-programmer/wdd231/blob/main/chamber/data/members.json';

async function getBusinessData(business) {
    const response = await fetch(url);
    const data = response.json();

    displayMembersInfo(data.companies);
    
    }

function displayMembersInfo(members) {
    members.forEach(member => {
        let card = document.createElement("section");
        let para1 = document.createElement("p");
        let para2 = document.createElement("p");
        let link = document.createElement("a");
        let logo = document.createElement("img");

        card.classList.add("business-card");

        para1.textContent(`${member.adress}`);
        para2.textContent(`${member.phone}`);
        link.innerHTML = `${member.website}`;

        logo.setAttribute("href", `${member.image}`);
        logo.setAttribute("alt", `${member.name}`);
        logo.setAttribute("loading", "lazy");

        card.appendChild(logo);
        card.appendChild(para1);
        card.appendChild(para2);
        card.appendChild(link);

        cards.appendChild(card);


    })
}