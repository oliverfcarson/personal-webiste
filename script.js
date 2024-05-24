document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('.content-section');

    tabs.forEach(tab => {
        tab.addEventListener('click', event => {
            event.preventDefault();
            const targetSection = document.querySelector(tab.getAttribute('href'));

            sections.forEach(section => {
                section.classList.remove('active');
            });

            targetSection.classList.add('active');
        });
    });

    // Activate the first tab by default
    document.querySelector('nav ul li a').click();
});
