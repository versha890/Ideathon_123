document.addEventListener('DOMContentLoaded', function () {
    // Add event listener to the "OFF" button
    const offButton = document.querySelector('.open');
    offButton.addEventListener('click', function () {
        // Select all <i> elements inside the .life div
        const lifeIcons = document.querySelectorAll('.life i');

        // Loop through the icons and find the first one with class "fa-heart"
        for (let icon of lifeIcons) {
            if (icon.classList.contains('one')) {
                icon.classList.remove('fa-heart'); // Remove heart icon
                icon.classList.add('fa-heart-broken'); // Add broken heart icon
                break; // Stop after changing one icon
            }
        }

        // Disable the button after one click
        offButton.disabled = true;
    });
});
const button = document.getElementById("blastButton");

button.addEventListener("click", () => {
    for (let i = 0; i < 100; i++) {
        createConfetti();
    }
});

function createConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    document.body.appendChild(confetti);

    const size = Math.random() * 10 + 5;
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;

    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#F3FF33"];
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = "-50px";

    const animationDuration = Math.random() * 2 + 1;
    confetti.style.animationDuration = `${animationDuration}s`;

    setTimeout(() => {
        confetti.remove();
    }, animationDuration * 1000);
}

const buttoon = document.getElementById("blastbutton");

buttoon.addEventListener("click", () => {
    for (let i = 0; i < 100; i++) {
        createConfetti();
    }
});

function createConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    document.body.appendChild(confetti);

    const size = Math.random() * 10 + 5;
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;

    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#F3FF33"];
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = "-50px";

    const animationDuration = Math.random() * 2 + 1;
    confetti.style.animationDuration = `${animationDuration}s`;

    setTimeout(() => {
        confetti.remove();
    }, animationDuration * 1000);
}

