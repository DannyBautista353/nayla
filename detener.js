/* function reproducirAudio() {
    var audio = document.getElementById('miAudio');
    audio.play().catch(function(error) {
        console.log("No se pudo reproducir automáticamente debido a las políticas del navegador.");
    });
}

// Función para detener la música y redirigir a otra página
function detenerMusicaYRedirigir() {
    var audio = document.getElementById('miAudio');
    audio.pause(); // Pausar la música
    audio.currentTime = 0; // Reiniciar el audio (opcional)

    // Redirigir a la otra página (reemplaza con la URL deseada)
    window.open("flores con corazones.html", "_blank");
   /*  window.location.href  = "flores con corazones.html"; */ // Cambia "otra-pagina.html" por la URL a la que deseas ir

        window.onload = function() {
            setTimeout(function() {
                reproducirAudio();
            }, 100); // Espera 100 ms antes de intentar reproducir
        };

        function reproducirAudio() {
            var audio = document.getElementById('miAudio');
            audio.play().catch(function(error) {
                console.log("No se pudo reproducir automáticamente debido a las políticas del navegador.");
            });
        }

        function detenerMusicaYRedirigir() {
            var audio = document.getElementById('miAudio');
            audio.pause(); // Pausar la música
            audio.currentTime = 0; // Reiniciar el audio (opcional)

            // Redirigir a la otra página
            window.open("flores con corazones.html", "_blank");
        }
   