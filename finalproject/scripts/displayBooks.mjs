function displayBooks(arrayData, sliceCount) {
    const container = document.querySelector(".container");
    const slicedData = arrayData.slice(0, sliceCount);

    slicedData.forEach(array => {
        const card = document.createElement("div");
        card.className = "ressource-card";

        const coverUrl = array.cover_i ? `https://covers.openlibrary.org/b/id/${array.cover_i}-M.jpg` : "images/default-book.webp"; // image by default if a cover is not available

        card.innerHTML = `
        <img src="${coverUrl}" alt="Book Cover" loading="lazy">
        <h3> ${array.title}</h3>
        <p><span class="stronger">Author:</span> ${array.author_name ? array.author_name[0] : "Unknown"}</p>
        <p><span class="stronger">First Published:</span> ${array.first_publish_year || "N/A"}</p>
        <p><span class="stronger">Subject:</span> Computer Science
        `
        container.appendChild(card);
    });
}

export function shuttleArray(array) {
    for (let index = array.lenght - 1; index > 0; index--) {
        let randomIndex = Math.floor(Math.random() * (index + 1));
        [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
    }

    return array;
}


export default displayBooks;