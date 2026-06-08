function irAlBuzon() {
    const correo = document.getElementById('input-correo').value;
    
    if (correo === "") {
        alert("Por favor, ingresa una dirección");
        return;
    }

    // Cambiar texto del correo en la segunda página
    document.getElementById('correo-generado').innerText = correo;

    // Ocultar inicio y mostrar buzón
    document.getElementById('vista-inicio').style.display = 'none';
    document.getElementById('vista-buzon').style.display = 'block';
}

function recargar() {
    alert("Buscando nuevos mensajes...");
}
