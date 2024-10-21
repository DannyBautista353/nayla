
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");
var lyricsData = [

 
  
  
    { text: "[Música]", time: 0.06 },
    { text: "cuánto tiempo que ha pasado y todavía no", time: 14.83 },
    { text: "te he olvidado", time: 19.08 },
    { text: "tomamos camino que fueron separados pero", time: 26.06 },
    { text: "Pero", time: 27.61 },
    { text: "últimamente ando demasiado loco miro a", time: 31.43 },
    { text: "la gente y solo veo tu rostro nunca", time: 33.78 },
    { text: "decidimos separarnos pero bueno acá", time: 36.48 },
    { text: "estamos intentando olvidarnos de todo y", time: 39.48 },
    { text: "si te digo que me encuentro muy mal y si", time: 42.78 },
    { text: "te digo que no puedo olvidar solo vivido", time: 45.89 },
    { text: "cuando estuvo a tu lado y si te digo Y", time: 49.44 },
    { text: "si te digo Y si te digo que no me voy", time: 52.32 },
    { text: "acá hasta que me mire Como me haces", time: 55.26 },
    { text: "atrás todo este vacío no se me va a", time: 58.19 },
    { text: "sanar Si no te tengo para la eternidad", time: 61.16 },
    { text: "sé que no peleamos y que nos odiamos", time: 64.31 },
    { text: "pero no podemos near que si nos amamos", time: 67.14 },
    { text: "esto ya no es sano Claro que te extraño", time: 70.50 },
    { text: "me vea sin tu amor es un fracaso Y estoy", time: 73.50 },
    { text: "pensando muy desesperado el tiempo que", time: 76.43 },
    { text: "perdí por orgulloso enojado tuve mis", time: 79.61 },
    { text: "errores eso me hace humano pero", time: 81.68 },
    { text: "afrontarnos me hacen alguien dedicado y", time: 84.47 },
    { text: "eso que ahora hablan hablan deja lo que", time: 87.42 },
    { text: "mueran de rabia", time: 89.11 },
    { text: "ellos buscan derrumbar lo nuestro porque", time: 92.22 },
    { text: "lo suyo nunca le va bien y eso que ahora", time: 96.72 },
    { text: "hablan hablan deja lo que mueran de", time: 99.47 },
    { text: "rabia", time: 100.46 },
    { text: "ellos buscan de arrumbarnos nuestro", time: 103.07 },
    { text: "porque es lo suyo nunca le va bien Hey", time: 107.15 },
    { text: "últimamente ando demasiado loco miro a", time: 110.52 },
    { text: "la gente y solo veo tu rostro nunca", time: 112.79 },
    { text: "decidimos separarnos pero bueno acá", time: 115.61 },
    { text: "estamos intentando olvidarnos de todo y", time: 118.43 },
    { text: "si te digo que me encuentro muy mal y si", time: 121.79 },
    { text: "te digo que no puedo olvidar solo vivido", time: 124.97 },
    { text: "cuando estuvo a tu lado y si te digo Y", time: 128.52 },
    { text: "si te digo Y si te que no me voy acá", time: 131.81 },
    { text: "hasta que me mire Como me haces atrás", time: 134.72 },
    { text: "todo esté vacío no se me va a sanar Si", time: 138.30 },
    { text: "no te tengo para la eternidad", time: 141.06 },
    { text: "[Música]", time: 147.22 }







];
function updateLyrics() {
  var time = audio.currentTime; // Mantén el tiempo en formato decimal
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}


// Animar las letras
/* function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
} */

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);