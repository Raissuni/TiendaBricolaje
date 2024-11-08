document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar todas las imágenes de productos
    const productImages = document.querySelectorAll('.product-image');

    // Añadir un evento onclick a cada imagen de producto
    productImages.forEach(function(image) {
        image.onclick = function() {
            alert('Has añadido al carrito este producto.');
        };
    });
});
