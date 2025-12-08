// Récupérer les paramètres de l'URL
const params = new URLSearchParams(window.location.search);

const hamMenu = document.getElementById("ham-button");
const navMenu = document.getElementById("nav-bar");

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle("close");
    navMenu.classList.toggle("open");
})

// Infos participant
const firstName = params.get('firstName');
const lastName = params.get('lastName');
const email = params.get('email');
const phone = params.get('phone');

// Calcul du score
let score = 0;
if (params.get('q1') === 'a') score++;
if (params.get('q2') === 'b') score++;
if (params.get('q3') === 'a') score++;
if (params.get('q4') === 'c') score++;
if (params.get('q5') === 'a') score++;
if (params.get('q6') === 'b') score++;
if (params.get('q7') === 'b') score++;
if (params.get('q8') === 'c') score++;
if (params.get('q9') === 'a') score++;
if (params.get('q10') === 'a') score++;

// Affichage des résultats
const resultsDiv = document.getElementById('results');
if (resultsDiv) {
    resultsDiv.innerHTML = `
    <div class="card">
      <h2>Participant Information</h2>
      <p><strong>First Name:</strong> ${firstName || ''}</p>
      <p><strong>Last Name:</strong> ${lastName || ''}</p>
      <p><strong>Email:</strong> ${email || ''}</p>
      <p><strong>Phone:</strong> ${phone || ''}</p>

      <h2>Quiz Score</h2>
      <p><strong>Score:</strong> ${score} / 10</p>
    </div>
  `;
}

// Sauvegarder score dans localStorage
if (firstName && lastName) {
    const userKey = `${firstName} ${lastName}`;
    localStorage.setItem('quizScore', JSON.stringify({
        user: userKey,
        score: score,
        date: new Date().toLocaleString()
    }));
}