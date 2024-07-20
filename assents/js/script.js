const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

function atualizarRelogio() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    // Adicionar zeros à esquerda se o número for menor que 10
    hr = (hr < 10) ? '0' + hr : hr;
    min = (min < 10) ? '0' + min : min;
    seg = (seg < 10) ? '0' + seg : seg;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
}

// Chama a função inicialmente para evitar um segundo de atraso
atualizarRelogio();

// Atualiza o relógio a cada segundo
setInterval(atualizarRelogio, 1000);


