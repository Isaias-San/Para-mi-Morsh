// Agrega o modifica aquí todas las frases lindas que quieras dedicarle
const frasesDeAmor = [
    "Tú y yo, para siempre 💖",
    "Gracias por estar en mi vida ✨",
    "Tu sonrisa me ilumina ☀️",
    "Cada momento contigo es mágico ☁️",
    "Siempre pienso en ti 🥰",
    "Lo mejor de mi día eres tú 🌹",
    "Juntos por siempre 💘",
    "Eres mi persona favorita 🐱❤️",
    "Me haces el más feliz 😍",
    "Contigo todo es más bonito 🌸",
    "Eres mi lugar favorito en el mundo 🗺️",
    "Mi felicidad lleva tu nombre 🥰",
    "Contigo el mundo es más bonito 🌸",
    "Eres mi casualidad más hermosa 💖",
    "Un millón de veces tú ✨",
    "Me encantas más que ayer 😍",
    "A tu lado todo es perfecto 🌹",
    "Mi persona favorita 🐱❤️",
    "Te amo de aquí al infinito 🚀",
];

const contenedor = document.getElementById("contenedor-frases");

function crearFraseFlotante() {
    const frase = document.createElement("div");
    frase.classList.add("frase-flotante");
    
    frase.innerText = frasesDeAmor[Math.floor(Math.random() * frasesDeAmor.length)];
    
    // CORRECCIÓN AQUÍ: Tomamos el ancho del contenedor en lugar de window.innerWidth
    const contenedorTarjeta = document.querySelector(".contenedor-tarjeta");
    const anchoMaximo = contenedorTarjeta ? contenedorTarjeta.offsetWidth : window.innerWidth;
    
    // Centramos las letras para que queden flotando principalmente sobre el cuadro blanco
    const posicionX = Math.random() * (anchoMaximo - 180);
    frase.style.left = Math.max(10, posicionX) + "px"; 
    
    const duracion = Math.random() * 4 + 6;
    frase.style.animationDuration = duracion + "s";
    
    const escala = Math.random() * 0.2 + 0.9;
    frase.style.transform = `scale(${escala})`;
    
    // Añadimos las frases dentro del contenedor protegido
    const contenedorFrases = document.getElementById("contenedor-frases");
    if (contenedorFrases) {
        contenedorFrases.appendChild(frase);
    }
    
    setTimeout(() => {
        frase.remove();
    }, duracion * 1000);
}

// Lanza una frase nueva cada 1.2 segundos
setInterval(crearFraseFlotante, 1200);

for(let i = 0; i < 3; i++) {
    setTimeout(crearFraseFlotante, i * 300);
}

function mostrarFotoSecreta() {
    const musica = document.getElementById("musica-romantica");
    
    musica.play().catch(error => {
        console.log("El navegador bloqueó el audio momentáneamente:", error);
    });
    
    document.getElementById("vista-texto").style.display = "none";
    
    document.getElementById("vista-foto-secreta").style.display = "block";
}

function ocultarFotoSecreta() {
    document.getElementById("vista-foto-secreta").style.display = "none";
    document.getElementById("vista-texto").style.display = "block";
}
