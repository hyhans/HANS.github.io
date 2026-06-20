document.addEventListener('DOMContentLoaded', () => {
    const mainText = document.getElementById('main-text');
    const hiddenText = document.getElementById('hidden-text');

    if (mainText && hiddenText) {
        mainText.addEventListener('click', () => {
            // Toggle the 'show' class on the speechless text
            hiddenText.classList.toggle('show');
            
            // Toggle the 'slow-rgb' class on the HANS text
            mainText.classList.toggle('slow-rgb');
        });
    }
});
