const formulario = document.getElementById("formulario");
const tabla = document.getElementById("tablaEstudiantes");

mostrarEstudiantes();

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    let cedula = document.getElementById("cedula").value;
    let apellidos = document.getElementById("apellidos").value;
    let nombres = document.getElementById("nombres").value;
    let direccion = document.getElementById("direccion").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    let facultad = document.getElementById("facultad").value;
    let nivel = document.getElementById("nivel").value;
    let paralelo = document.getElementById("paralelo").value;

    // Expresiones regulares

    let cedulaRegex = /^\d{10}$/;
    let telefonoRegex = /^09\d{8}$/;
    let nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{2,50}$/;
    let correoRegex =
    /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com|live\.com|live\.uleam\.edu\.ec)$/;
    let facultadRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{3,60}$/;
    let nivelRegex = /^(10|[1-9])$/;
    let paraleloRegex = /^[A-Z]$/;
    if(!cedulaRegex.test(cedula)){
        alert("Cédula inválida");
        return;
    }

    if(!nombreRegex.test(apellidos)){
        alert("Apellidos inválidos");
        return;
    }

    if(!nombreRegex.test(nombres)){
        alert("Nombres inválidos");
        return;
    }

    if(!telefonoRegex.test(telefono)){
        alert("Teléfono inválido");
        return;
    }

    if(!correoRegex.test(correo)){
        alert("Correo inválido");
        return;
    }

    let estudiante = {
        cedula,
        apellidos,
        nombres,
        direccion,
        telefono,
        correo,
        facultad,
        nivel,
        paralelo
    };

    let estudiantes =
        JSON.parse(localStorage.getItem("estudiantes")) || [];

    estudiantes.push(estudiante);

    localStorage.setItem(
        "estudiantes",
        JSON.stringify(estudiantes)
    );

    formulario.reset();

    mostrarEstudiantes();
});

function mostrarEstudiantes(){

    tabla.innerHTML = "";

    let estudiantes =
        JSON.parse(localStorage.getItem("estudiantes")) || [];

    estudiantes.forEach(estudiante => {

        tabla.innerHTML += `
        <tr>
            <td>${estudiante.cedula}</td>
            <td>${estudiante.apellidos} ${estudiante.nombres}</td>
            <td>${estudiante.direccion}</td>
            <td>${estudiante.telefono}</td>
            <td>${estudiante.correo}</td>
            <td>${estudiante.facultad}</td>
            <td>${estudiante.nivel}</td>
            <td>${estudiante.paralelo}</td>
        </tr>
        `;
    });
}