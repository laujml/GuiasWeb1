const btnAddEstudiante = document.querySelector('#idBtnAgregarEstudiante');
const btnViewEstudiantes = document.querySelector('#idBtnMostrarEstudiantes');
const inputCarnet = document.querySelector('#inputCarnet');
const inputNombre = document.querySelector('#inputNombre');
const inputApellidos = document.querySelector('#inputApellidos');

// Array para almacenar los estudiantes
let arrayEstudiantes = [];

btnAddEstudiante.addEventListener('click', guardarEstudiante);
btnViewEstudiantes.addEventListener('click', mostrarEstudiantes);

function guardarEstudiante() {
    const nombre = inputNombre.value.trim();
    const carnet = inputCarnet.value.trim();
    const apellidos = inputApellidos.value.trim();
    
    const errores = validarDatos(carnet, nombre, apellidos);
    
    if (errores.length > 0) {
        alert("Errores: \n" + errores.join('\n'));
        return;
    } else {
        // Crear objeto estudiante
        const estudiante = {
            carnet: carnet,
            nombre: nombre,
            apellidos: apellidos
        };
        
        // Agregar al array
        arrayEstudiantes.push(estudiante);
        
        alert("Estudiante agregado correctamente");
        
        // Limpiar los campos
        inputCarnet.value = '';
        inputNombre.value = '';
        inputApellidos.value = '';
        
        // Enfocar en el campo carnet
        inputCarnet.focus();
    }
}

function mostrarEstudiantes() {
    // Buscar el contenedor donde se mostrarán los estudiantes
    const container = document.querySelector('#idContainerEstudiantes');
    
    if (arrayEstudiantes.length === 0) {
        container.innerHTML = '<p>Ninguno</p>';
        return;
    }
    
    let tabla = '<table class="table table-striped">';
    tabla += '<thead>';
    tabla += '<tr>';
    tabla += '<th>Carnet</th>';
    tabla += '<th>Nombre</th>';
    tabla += '<th>Apellidos</th>';
    tabla += '</tr>';
    tabla += '</thead>';
    tabla += '<tbody>';
    
    for (let estudiante of arrayEstudiantes) {
        tabla += '<tr>';
        tabla += `<td>${estudiante.carnet}</td>`;
        tabla += `<td>${estudiante.nombre}</td>`;
        tabla += `<td>${estudiante.apellidos}</td>`;
        tabla += '</tr>';
    }
    
    tabla += '</tbody>';
    tabla += '</table>';
    
    container.innerHTML = tabla;
}

function validarDatos(carnet, nombre, apellidos) {
    const errores = [];
    
    if (carnet.trim().length == 0) {
        errores.push('El carnet es requerido');
    }
    if (nombre.trim().length == 0) {
        errores.push('El nombre es requerido');
    }
    if (apellidos.trim().length == 0) {
        errores.push('Los apellidos son requeridos');
    }
    
    return errores;
}