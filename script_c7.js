//Javascript Document

window.addEventListener('load', iniciar, false);

function iniciar(){
    boton.addEventListener('click', gestionarSueldo);
}

function gestionarSueldo() {

    var sueldo = prompt('Ingrese el sueldo que gana: ');
    var aumento = prompt('Ingrese el aumento que se aplicara: ')
    subirSueldo(sueldo, aumento);
}

function subirSueldo(sueldoRecibido, aumentoRecibido){
    var nuevoSueldo = sueldoRecibido * aumentoRecibido;
    document.write('El nuevo sueldo es de: <strong>' + nuevoSueldo + '$</strong>');
}