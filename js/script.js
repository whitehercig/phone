document.querySelectorAll('.left-menu-buttons').forEach(button => {
    button.addEventListener('click', () => {
        const sectionId = button.dataset.section;
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Предотвращаем сброс скролла после закрытия меню
const menuToggle = document.getElementById('menu__toggle');
menuToggle.addEventListener('change', (e) => {
    if (!e.target.checked) {
        e.preventDefault(); // Запрещаем автоматический сброс
    }
});
