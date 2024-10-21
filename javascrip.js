/* // Función para generar un color aleatorio
function generarColorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Función para generar un degradado aleatorio
function generarDegradadoAleatorio() {
    const color1 = generarColorAleatorio();
    const color2 = generarColorAleatorio();
    const angulo = Math.floor(Math.random() * 360);  // Ángulo aleatorio entre 0 y 360 grados
    return `linear-gradient(${angulo}deg, ${color1}, ${color2})`;
}

// Cambiar el fondo a un degradado aleatorio
function cambiarDegradadoDeFondo() {
    const degradadoAleatorio = generarDegradadoAleatorio();
    document.body.style.background = degradadoAleatorio;
}

// Iniciar el cambio automático del degradado
setInterval(cambiarDegradadoDeFondo, 1000);  // Cambia cada segundo

 */
// Función para generar un color aleatorio
// Función para generar un degradado aleatorio con colores celeste, rojo y morado con menos opacidad
function generarDegradadoAleatorio() {
    const colores = [
        'rgba(135, 206, 235, 0.7)', // Celeste con 70% de opacidad
        'rgba(255, 0, 0, 0.7)',      // Rojo con 70% de opacidad
        'rgba(128, 0, 128, 0.7)'     // Morado con 70% de opacidad
    ];
    const color1 = colores[Math.floor(Math.random() * colores.length)];
    const color2 = colores[Math.floor(Math.random() * colores.length)];
    const angulo = Math.floor(Math.random() * 360);  // Ángulo aleatorio entre 0 y 360 grados
    return `linear-gradient(${angulo}deg, ${color1}, ${color2})`;
}

// Cambiar el fondo a un degradado aleatorio con los colores seleccionados
function cambiarDegradadoDeFondo() {
    const degradadoAleatorio = generarDegradadoAleatorio();
    document.body.style.background = degradadoAleatorio;
}

// Iniciar el cambio automático del degradado
setInterval(cambiarDegradadoDeFondo, 3000);  // Cambia cada 3 segundos

// Establecer una transición suave para el fondo
document.body.style.transition = 'background 1s ease';  // Transición suave de 1 segundo


