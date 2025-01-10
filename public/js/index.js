document.addEventListener('DOMContentLoaded', function () {
    // Add event listener to the "OFF" button
    const offButton = document.querySelector('.open');
    offButton.addEventListener('click', function () {
        // Select all <i> elements inside the .life div
        const lifeIcons = document.querySelectorAll('.life i');

        // Loop through the icons and find the first one with class "fa-heart"
        for (let icon of lifeIcons) {
            if (icon.classList.contains('fa-heart')) {
                icon.classList.remove('fa-heart'); // Remove heart icon
                icon.classList.add('fa-heart-broken'); // Add broken heart icon
                break; // Stop after changing one icon
            }
        }

        // Disable the button after one click
        offButton.disabled = true;
    });
});

