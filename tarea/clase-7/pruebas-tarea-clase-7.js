function probarValidarCiudad() {
    console.assert(
        validarCiudad("") === "Debe seleccionar una opción",
        "validarCiudad no reconoció que no se seleccionó una opción"
    );
}
probarValidarCiudad();

function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo("") === "Por favor, describa su regalo",
        "validarDescripcionRegalo no validó que la descripción esté vacía"
    );

    console.assert(
        validarDescripcionRegalo(
            "........................................................................................................................................................................................................................................................................................")
        === "El límite es de 280 carácteres",
        "validarDescripcionRegalo no validó que la descripción no supere los 280 carácteres" 
    );
}
probarValidarDescripcionRegalo();
