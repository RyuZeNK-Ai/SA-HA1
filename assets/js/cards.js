// Función para voltear las cartas
function flipCard(cardWrapper) {
    // Remover la clase flipped de todas las cartas
    const allCards = document.querySelectorAll('.card-wrapper');
    allCards.forEach(card => {
        if (card !== cardWrapper) {
            card.classList.remove('flipped');
        }
    });
    
    // Alternar la clase flipped en la carta clickeada
    cardWrapper.classList.toggle('flipped');
}

// Prevenir el flip al hacer click en el botón
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.card-back-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            // Aquí puedes cambiar la redirección según tu sitio
            window.location.href = button.getAttribute('href');
        });
    });
});