document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.sidebar nav ul li a');
    const sections = document.querySelectorAll('.content-section');
    const menuToggle = document.getElementById('mobile-menu');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    });

    tabs.forEach(tab => {
        tab.addEventListener('click', event => {
            event.preventDefault();
            const targetSection = document.querySelector(tab.getAttribute('href'));

            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            sections.forEach(section => {
                section.classList.remove('active');
            });

            targetSection.classList.add('active');

            // Close sidebar on mobile after clicking a link
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
                overlay.classList.remove('active');
            }
        });
    });

    // Activate the first tab by default
    tabs[0].click();
});
