// Particles animation
function createParticles({
    selector = '.particles',
    particleCount = 50
} = {}) {
    const particlesContainer = document.querySelector(selector);
    if (!particlesContainer) return;

    // Limpa partículas antigas
    particlesContainer.innerHTML = '';

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Cria partículas ao carregar a página
document.addEventListener('DOMContentLoaded', () => createParticles());