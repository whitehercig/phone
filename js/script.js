document.querySelectorAll('.left-menu-buttons').forEach(button => {
    button.addEventListener('click', () => {
        const sectionId = button.dataset.section;
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});