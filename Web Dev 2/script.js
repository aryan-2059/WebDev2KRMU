const form = document.getElementById("event-form");
const titleInput = document.getElementById("title");
const dateInput = document.getElementById("date");
const categoryInput = document.getElementById("category");
const descriptionInput = document.getElementById("Description");
const gridCard = document.getElementById("grid-card");
const eventCount = document.getElementById("event-count");

let cardDetails = [];

const populate = () => {
    gridCard.innerHTML = '';
    
    if (cardDetails.length === 0) {
        gridCard.innerHTML = '<p style="color: #64748b;">No events scheduled yet.</p>';
        eventCount.innerText = "0 Events Total";
        return;
    }

    eventCount.innerText = `${cardDetails.length} Event${cardDetails.length > 1 ? 's' : ''} Total`;

    cardDetails.forEach((card, index) => {
        gridCard.innerHTML += `
        <div class="card">
            <button class="cancel-btn" data-index="${index}" title="Delete Event">✕</button>
            <span class="category-tag">${card.category}</span>
            <h4>${card.title}</h4>
            <p class="date">📅 ${card.date}</p>
            <p class="des">${card.description || 'No description provided.'}</p>
        </div>`;
    });
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    cardDetails.push({
        title: titleInput.value,
        date: dateInput.value,
        category: categoryInput.value,
        description: descriptionInput.value,
    });

    populate();
    form.reset(); // Cleaner than manual clearing
});

gridCard.addEventListener('click', (e) => {
    // Check if the click was on the button OR the span inside it
    if (e.target.classList.contains("cancel-btn")) {
        const index = e.target.getAttribute("data-index");
        cardDetails.splice(index, 1);
        populate();
    }
});

// Initial call to show empty state
populate();