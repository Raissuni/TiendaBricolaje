// Función para evitar que se envíe el formulario por defecto y validar los campos
// Esta funcion hara como nuentro main n java, dede ellamas llamaremos a distintas funciones 
function validarFormulario(event) {
    event.preventDefault(); 

    // Obtener los valores del formulario
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var telefono = document.getElementById('telefono').value;
    var edad = document.getElementById('edad').value;
    var email = document.getElementById('email').value;
    var ciudad = document.getElementById('ciudad').value;

    // Validar campos
    if (!validarCampos(nombre, apellido, telefono, edad, email)) return;
    if (!validarCorreo(email)) return;
    if (!validarEdad(edad)) return;
    if (!verificarTexto(nombre)) return;

    // Cambiar la imagen de fondo según la ciudad seleccionada
    cambiarImagenCiudad(ciudad);

    alert('Formulario enviado correctamente.');
}

// Comprobar que no haya campos vacíos
function validarCampos(nombre, apellido, telefono, edad, email) {
    if (nombre.trim() === '' || apellido.trim() === '' || telefono.trim() === '' || edad.trim() === '' || email.trim() === '') {
        alert('Por favor, complete todos los campos.');
        return false;
    }
    return true;
}

// Validar el formato del correo electrónico
function validarCorreo(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, introduzca un correo electrónico válido.');
        return false;
    }
    return true;
}

// Validar la edad
function validarEdad(edad) {
    if (edad < 18 || edad > 100) {
        alert('Por favor, introduzca una edad válida (entre 18 y 100 años).');
        return false;
    }
    return true;
}

// Función para prevenir inyecciones de SQL
function verificarTexto(nombre) {
    var nombreMayuscula = nombre.toUpperCase();
    const prohibido = ['DROP', 'SELECT', 'ALERT'];

    for (var i = 0; i < prohibido.length; i++) {
        if (nombreMayuscula.includes(prohibido[i])) {
            alert("Lo siento, no está permitido, a hackear a tu casa");
            return false;
        }
    }
    return true;
}

// Función para cambiar el fondo y la imagen según la ciudad seleccionada
function cambiarImagenCiudad(ciudad) {
    var body = document.body;
    var imagenCiudad = document.getElementById('imagenCiudad');

    switch (ciudad) {
        case 'madrid':
            body.style.backgroundImage = "url('D:/LENGUAJE/Proyecto web/fotos/Madrid.jpg')";
            imagenCiudad.src = "D:/LENGUAJE/Proyecto web/fotos/Madrid.jpg";
            break;
        case 'barcelona':
            body.style.backgroundImage = "url('D:/LENGUAJE/Proyecto web/fotos/barcelona.jpg')";
            imagenCiudad.src = "D:/LENGUAJE/Proyecto web/fotos/barcelona.jpg";
            break;
        case 'valencia':
            body.style.backgroundImage = "url('D:/LENGUAJE/Proyecto web/fotos/valencia.jpg')";
            imagenCiudad.src = "D:/LENGUAJE/Proyecto web/fotos/valencia.jpg";
            break;
        default:
            body.style.backgroundImage = "none";
            imagenCiudad.src = "";
            break;
    }
}

// Event listener para el envío del formulario
document.getElementById('formulario').addEventListener('submit', validarFormulario);

// Event listener para el cambio de ciudad
document.getElementById('ciudad').addEventListener('change', function() {
    cambiarImagenCiudad(this.value);
});
