// Define a data do casamento
const weddingDate = new Date("Aug 08, 2026 16:30:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Cálculos de tempo
    const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30.44));
    const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    // Exibe os resultados nos elementos correspondentes
    document.getElementById("months").innerText = months.toString().padStart(2, '0');
    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');

    // Se a contagem terminar
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "<h3 class='text-white'>Chegou o grande dia!</h3>";
    }
}

// Atualiza o contador a cada 1 minuto (ou 1 segundo se preferir)
const countdownInterval = setInterval(updateCountdown, 1000);

// Executa uma vez ao carregar para não esperar o primeiro intervalo
updateCountdown();

// Scroll suave ao clicar no indicador
document.querySelector('.scroll-indicator').addEventListener('click', function () {
    document.querySelector('.info-section').scrollIntoView({ behavior: 'smooth' });
});

/* Oculta o indicador quando o usuário começa a scrollar */
window.addEventListener('scroll', function () {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (window.scrollY > 100) {
        scrollIndicator.style.opacity = '0';
        scrollIndicator.style.pointerEvents = 'none';
    } else {
        scrollIndicator.style.opacity = '1';
        scrollIndicator.style.pointerEvents = 'auto';
    }
});


function copyPix() {
    // COLOQUE SUA CHAVE PIX AQUI
const pixKey = "3186904351";
            
    navigator.clipboard.writeText(pixKey).then(() => {
        const toast = document.getElementById("toast");
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
            }).catch(err => {
                console.error('Erro ao copiar: ', err);
            });
        }
    
