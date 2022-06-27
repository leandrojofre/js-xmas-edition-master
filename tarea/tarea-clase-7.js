/*
* Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
* Escribir pruebas para esas funciones.
*
* Adicional: Escribir pruebas para las funciones de tareas anteriores.
*
* */

function validarCiudad(seleccionCiudad) {
    if (seleccionCiudad === "") {
        return "Debe seleccionar una opción"; 
    }
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length === 0) {
        return "Por favor, describa su regalo"
    }

    if (descripcionRegalo.length >= 280) {
        return "El límite es de 280 carácteres"
    }
}
