// Seleciona os elementos
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

// Verifica se os elementos existem na página antes de adicionar o evento
if (mobileMenu && navList) {
    mobileMenu.addEventListener('click', () => {
        // Liga/Desliga a classe 'active' que criamos no CSS
        navList.classList.toggle('active');
        
        // Opcional: muda o ícone de 'barras' para um 'X' ao abrir
        const icon = mobileMenu.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    });
}

// Fecha o menu ao clicar em qualquer link (importante para Single Page ou fluidez)
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navList) {
            navList.classList.remove('active');
            // Volta o ícone para 'barras'
            const icon = mobileMenu.querySelector('i');
            if (icon) icon.classList.replace('fa-times', 'fa-bars');
        }
    });
});
