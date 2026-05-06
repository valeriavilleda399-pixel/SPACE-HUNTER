const destino = "index2.html"; 
const audio = document.getElementById('espacio-musica');
const loader = document.getElementById('loader');
const startScreen = document.getElementById('start-screen');
const fill = document.getElementById('fill');
const count = document.getElementById('count');
const status = document.getElementById('status');

function iniciarCarga() {
    startScreen.style.opacity = '0';
    setTimeout(() => {
        startScreen.style.display = 'none';
        loader.style.display = 'block';
        setTimeout(() => loader.style.opacity = '1', 50);
    }, 800);
    
    if(audio) {
        audio.play().catch(error => console.log("Audio bloqueado"));
    }

    let progreso = 0;
    const interval = setInterval(() => {
        progreso++;
        fill.style.width = progreso + "%";
        count.innerText = progreso + "%";

        if(progreso === 30) status.innerText = "Saliendo de la atmósfera...";
        if(progreso === 60) status.innerText = "Calculando coordenadas...";
        if(progreso === 85) status.innerText = "Activando salto hiperespacial...";

        if (progreso >= 100) {
            clearInterval(interval);
            status.innerText = "¡LLEGADA A DESTINO!";
            
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    window.location.href = destino;
                }, 1000);
            }, 1000);
        }
    }, 50);
}