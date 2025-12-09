// Gestion du dialog pour afficher score précédent
const learnMoreLink = document.getElementById('learnMoreLink');
const dialogBox = document.querySelector("#infoDialog")
const infoContent = document.querySelector(".content");
const closeButton = document.querySelector("#close-button");

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

if (learnMoreLink && infoContent) {
    learnMoreLink.addEventListener('click', () => {

        // Récupérer score précédent
        const saved = localStorage.getItem('quizScore');
        let message = '';

    if (saved) {
        let data;
        try {
            data = JSON.parse(saved);
            const lastAttempt = document.createElement('p');
            lastAttempt.innerHTML = '<strong>Last Attempt:</strong>';

            const explanation = document.createElement("p");
            explanation.textContent = "This quiz is designed to test your fundamentals in Computer Science. Each question has one correct answer. Your score will be calculated and displayed on the results page."

            const student = document.createElement('p');
            student.textContent = `Student: ${data.user}`;

            const email = document.createElement('p');
            email.textContent = `Email: ${data.userEmail || "Your email was not saved yet"} `;

            const phoneNumber = document.createElement('p');
            phoneNumber.textContent = `Phone Number: ${data.userPhone || "Your phone number was not saved yet"}`;

            const score = document.createElement('p');
            score.textContent = `Score: ${data.score} / 10`;

            const date = document.createElement('p');
            date.textContent = `Date: ${data.date}`;

            // Clear previous content
            infoContent.innerHTML = '';
            infoContent.appendChild(explanation);
            infoContent.appendChild(lastAttempt);
            infoContent.appendChild(student);
            infoContent.appendChild(email);
            infoContent.appendChild(phoneNumber);
            infoContent.appendChild(score);
            infoContent.appendChild(date);
        } catch (error) {
            message = `<p>Error reading previous score. Data may be corrupted.</p>`;
        }
    } else {
        message = `<p>No previous score recorded. You have not yet taken the test.</p>`;
    }

        if (!saved) {
            infoContent.innerHTML = message;
        }
        dialogBox.showModal();
    });
}

closeButton.addEventListener("click", () => {
    if (dialogBox) {
        dialogBox.close();
    }
})
