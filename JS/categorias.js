document.addEventListener('keypress', handleKeyPress);

function handleKeyPress(event) {
    var content = document.getElementById('tecla');
    var currentSize = window.getComputedStyle(content, null).getPropertyValue('font-size');
    var newSize;

    // Convierte el tamaño actual a un número
    currentSize = parseFloat(currentSize);

    if (event.key === 'g' || event.key === 'G') {
        // Incrementa el tamaño del texto en 12px
        newSize = currentSize + 5;
    } else if (event.key === 'p' || event.key === 'P') {
       
        newSize = currentSize - 5;
    }

    // Aplica el nuevo tamaño al html
    if (newSize) {
        content.style.fontSize = newSize + 'px';
    }
}
