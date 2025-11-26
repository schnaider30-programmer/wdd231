const nonProfit = ['Small Fee for Approved Membership', 'Community Recognition (featured in chamber newsletters as a valued partner)', 'Networking Access (invitations to monthly mixers and community events)', 'Collaboration Opportunities (priority in joint projects with other non-profits)'];

const bronze = ['All non-profit benefits', 'Event Discounts (reduced rates for chamber-hosted workshops and seminars)', 'Basic Advertising (occasional spotlight in chamber communications)', 'Training Access (entry-level professional development sessions)'];

const silver = ['All bronze benefits', 'Priority Event Registration (secure seats early at popular events)', "Homepage Spotlight (rotating feature on the chamber's homepage)", 'Discounted Advertising Packages (reduced rates for promotional campaigns)'];

const gold = ['All silver benefits', 'Premium Advertising Placement (top visibility on chamber platforms)', 'VIP Event Access (free or heavily discounted entry to flagship events)', 'Mentorship & Training (advanced workshops and one-on-one mentorship opportunities)', 'Recognition & Awards (eligibility for annual chamber excellence awards)'];

// Button
const npButton = document.querySelector("#np-button");
const bronzeButton = document.querySelector("#bronze-button");
const silverButton = document.querySelector("#silver-button");
const goldButton = document.querySelector("#gold-button");

// Dialog
const dialogBox = document.querySelector("#dialogBox");
const membershipName = document.querySelector(".dialog-header p");
const benefitsList = document.querySelector(".benefits-list");
const closeButton = document.querySelector("#close-button");

document.addEventListener("DOMContentLoaded", () => {
    const options = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        year: "numeric",
        month: "long",
        day: "2-digit"
    }
    const timeStamp = document.querySelector("#timestamp");
    timeStamp.value = new Date().toLocaleDateString("en-US", options)
});

closeButton.addEventListener("click", () => {
    dialogBox.close();
})

npButton.addEventListener("click", () => {
    dialogBox.showModal();
    membershipName.textContent = "Non-Profit Membership ⭐";
    benefitsList.innerHTML = "";

    displayBenefits(nonProfit, 5000);

});

bronzeButton.addEventListener("click", () => {
    dialogBox.showModal();
    membershipName.textContent = "Bronze Membership 🥉";
    benefitsList.innerHTML = "";

    displayBenefits(bronze, 10000);
});

silverButton.addEventListener("click", () => {
    dialogBox.showModal();
    membershipName.textContent = "Silver Membership 🥈";

    benefitsList.innerHTML = "";

    displayBenefits(silver, 25000);
})

goldButton.addEventListener("click", () => {
    dialogBox.showModal();
    membershipName.textContent = "Gold Membership 🥇";
    benefitsList.innerHTML = "";

    displayBenefits(gold, 45000);
})

function displayBenefits(benefits, price = 0) {
    const text = document.createElement("p");
    const fee = document.createElement("p");
    fee.className = "price"
    text.textContent = "Benefits: "
    fee.innerHTML = `Price: ${price}HTG/month`

    const listContainer = document.createElement("ul");

    benefits.forEach(benefit => {
        const listBenefit = document.createElement("li");
        listBenefit.textContent = benefit;
        listContainer.appendChild(listBenefit);
    })
    benefitsList.appendChild(text);
    benefitsList.appendChild(listContainer);
    benefitsList.appendChild(fee)
}