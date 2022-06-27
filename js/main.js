const $form = document.querySelector("#carta-a-santa");

const nombreUsuario = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form["descripcion-regalo"].value;

function validarNombre(nombre) {
    if (nombre.length === 0) {
        return "Este campo debe tener al menos 1 caracter";
    }

    if (nombre.length >= 50) {
        return "Este campo debe tener menos de 50 caracteres";
    }

    return "";
}

function verValoresDeLaCarta() {
    const nombreUsuario = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const comportamiento = $form.comportamiento.value;
    const descripcionRegalo = $form["descripcion-regalo"].value;

    console.log(nombreUsuario);
    console.log(ciudad);
    console.log(comportamiento);
    console.log(descripcionRegalo);

    event.preventDefault();
}

$form.onsubmit = verValoresDeLaCarta;
