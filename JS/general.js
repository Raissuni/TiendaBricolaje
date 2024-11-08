document.addEventListener("DOMContentLoaded", function() {
    // Función para ir a la página anterior del historial
    function goBack() {
        window.history.back();
    }

    // Función para ir a la siguiente página del historial
    function goForward() {
        window.history.forward();
    }

    // Añadir event listeners a los botones
    document.getElementById('atras').addEventListener('click', goBack);
    document.getElementById('adelante').addEventListener('click', goForward);
});
