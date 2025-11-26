const urlString = window.location.search;
const myInfo = new URLSearchParams(urlString)

const first = myInfo.get("first-name");
const last = myInfo.get("last-name");
const email = myInfo.get("email");
const phone = myInfo.get("phone");
const orgName = myInfo.get("organization-name")
const membershipLevel = myInfo.get("membership")
const loadTime = myInfo.get("timestamp");

const levelName = membershipLevel === "np" ? "Non-Profit" : membershipLevel;

const yourName = document.createElement("p");
const mail = document.createElement("p");
const phoneNum = document.createElement("p");
const organization = document.createElement("p");
const membership = document.createElement("p");
const time = document.createElement("p");

const memberInfo = document.querySelector(".member-info");

yourName.innerHTML = `<span>Name:</span> ${first} ${last}`;
mail.innerHTML = `<span>Email:</span> ${email}`;
phoneNum.innerHTML = `<span>Phone:</span> ${phone}`;
organization.innerHTML = `<span>Organization/Business:</span> ${orgName}`;
membership.innerHTML = `<span>Membership Level:</span> ${levelName} Member ${dislayMedal(levelName)} `;
time.innerHTML = `<span>Registration Date:</span> ${loadTime}`;

memberInfo.appendChild(yourName);
memberInfo.appendChild(phoneNum);
memberInfo.appendChild(mail);
memberInfo.appendChild(organization);
memberInfo.appendChild(membership);
memberInfo.appendChild(time);

function dislayMedal(level) {
    const medal= level === "np" ? "⭐" : level === "bronze" ? "🥉" : level === "silver" ? "🥈" : "🥇";
    return medal
}