const audio = document.getElementById('musica-fondo');
const btnAudio = document.getElementById('btn-audio');
let activo = false;

// Control de Audio
btnAudio.addEventListener('click', () => {
    if (!activo) {
        audio.play();
        btnAudio.innerHTML = '<span class="icon">🔊</span>';
    } else {
        audio.pause();
        btnAudio.innerHTML = '<span class="icon">🔇</span>';
    }
    activo = !activo;
});

// Funciones para el juego
function iniciarJuego() {
    if (!activo) audio.play(); // Inicia música al empezar si no está puesta
    console.log("Cargando Space Hunter 3D...");
    // window.location.href = "juego.html"; // Descomenta cuando tengas el juego
}

// Créditos
function openCredits() {
    document.getElementById("credits-modal").style.display = "block";
}

function closeCredits() {
    document.getElementById("credits-modal").style.display = "none";
}

// Cerrar modal al hacer clic fuera
window.onclick = function(event) {
    let modal = document.getElementById("credits-modal");
    if (event.target == modal) modal.style.display = "none";
}