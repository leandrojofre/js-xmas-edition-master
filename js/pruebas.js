/*
function sumar(a, b) {
    return a + b;
}
console.assert(sumar(1,2) === 3, "La suma de 1 y 2 no dio 3");
*/

function probarValidarNombre() {
    console.assert(
        validarNombre("") === "Este campo debe tener al menos 1 caracter", 
        "Validar nombre no validó que un string no sea vacío"
    );
    
    console.assert(
        validarNombre("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!") === 
        "Este campo debe tener menos de 50 caracteres", 
        "Validar nombre no validó que un string no tenga más de 50 carácteres"
    );
}
probarValidarNombre();
