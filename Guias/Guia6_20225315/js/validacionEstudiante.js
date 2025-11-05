// Accediendo a los elementos del formulario
const inputCarnet = document.getElementById("idCarnet");
const inputNombreCompleto = document.getElementById("idNombreCompleto");
const inputDUI = document.getElementById("idDUI");
const inputNIT = document.getElementById("idNIT");
const inputFechaNacimiento = document.getElementById("idFechaNacimiento");
const inputCorreo = document.getElementById("idCorreo");
const inputEdad = document.getElementById("idEdad");
const btnValidar = document.getElementById("idBtnValidar");
const btnLimpiar = document.getElementById("idBtnLimpiarEstudiante");
const resultadoValidacion = document.getElementById("idResultadoValidacion");

// Expresiones regulares para cada campo
const regexCarnet = /^[A-Z]{2}\d{3}$/;
const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
const regexDUI = /^\d{8}-\d$/;
const regexNIT = /^\d{4}-\d{6}-\d{3}-\d$/;
const regexFecha = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexEdad = /^\d+$/;

// Función para validar un campo individual
const validarCampo = (input, regex) => {
    const valor = input.value.trim();
    const esValido = regex.test(valor);
    
    if (esValido) {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
    }
    
    return esValido;
};

// Validación en tiempo real para cada campo
inputCarnet.addEventListener("blur", () => validarCampo(inputCarnet, regexCarnet));
inputNombreCompleto.addEventListener("blur", () => validarCampo(inputNombreCompleto, regexNombre));
inputDUI.addEventListener("blur", () => validarCampo(inputDUI, regexDUI));
inputNIT.addEventListener("blur", () => validarCampo(inputNIT, regexNIT));
inputFechaNacimiento.addEventListener("blur", () => validarCampo(inputFechaNacimiento, regexFecha));
inputCorreo.addEventListener("blur", () => validarCampo(inputCorreo, regexCorreo));
inputEdad.addEventListener("blur", () => validarCampo(inputEdad, regexEdad));

// Función principal de validación
const validarFormulario = () => {
    let todosValidos = true;
    let mensajesError = [];
    
    // Validar cada campo
    if (!validarCampo(inputCarnet, regexCarnet)) {
        todosValidos = false;
        mensajesError.push("Carnet inválido");
    }
    
    if (!validarCampo(inputNombreCompleto, regexNombre)) {
        todosValidos = false;
        mensajesError.push("Nombre completo inválido");
    }
    
    if (!validarCampo(inputDUI, regexDUI)) {
        todosValidos = false;
        mensajesError.push("DUI inválido");
    }
    
    if (!validarCampo(inputNIT, regexNIT)) {
        todosValidos = false;
        mensajesError.push("NIT inválido");
    }
    
    if (!validarCampo(inputFechaNacimiento, regexFecha)) {
        todosValidos = false;
        mensajesError.push("Fecha de nacimiento inválida");
    }
    
    if (!validarCampo(inputCorreo, regexCorreo)) {
        todosValidos = false;
        mensajesError.push("Correo electrónico inválido");
    }
    
    if (!validarCampo(inputEdad, regexEdad)) {
        todosValidos = false;
        mensajesError.push("Edad inválida");
    }
    
    // Mostrar resultado
    resultadoValidacion.style.display = "block";
    
    if (todosValidos) {
        resultadoValidacion.className = "alert alert-success";
        resultadoValidacion.innerHTML = `
            <h5><i class="bi bi-check-circle-fill"></i> ¡Validación exitosa!</h5>
            <p>Todos los campos han sido validados correctamente.</p>
            <hr>
            <h6>Datos ingresados:</h6>
            <ul>
                <li><strong>Carnet:</strong> ${inputCarnet.value}</li>
                <li><strong>Nombre:</strong> ${inputNombreCompleto.value}</li>
                <li><strong>DUI:</strong> ${inputDUI.value}</li>
                <li><strong>NIT:</strong> ${inputNIT.value}</li>
                <li><strong>Fecha de nacimiento:</strong> ${inputFechaNacimiento.value}</li>
                <li><strong>Correo:</strong> ${inputCorreo.value}</li>
                <li><strong>Edad:</strong> ${inputEdad.value} años</li>
            </ul>
        `;
    } else {
        resultadoValidacion.className = "alert alert-danger";
        resultadoValidacion.innerHTML = `
            <h5><i class="bi bi-x-circle-fill"></i> Errores de validación</h5>
            <p>Por favor corrija los siguientes errores:</p>
            <ul>
                ${mensajesError.map(error => `<li>${error}</li>`).join('')}
            </ul>
        `;
    }
};

// Función para limpiar el formulario
const limpiarFormulario = () => {
    inputCarnet.value = "";
    inputNombreCompleto.value = "";
    inputDUI.value = "";
    inputNIT.value = "";
    inputFechaNacimiento.value = "";
    inputCorreo.value = "";
    inputEdad.value = "";
    
    // Remover clases de validación
    [inputCarnet, inputNombreCompleto, inputDUI, inputNIT, inputFechaNacimiento, inputCorreo, inputEdad].forEach(input => {
        input.classList.remove("is-valid");
        input.classList.remove("is-invalid");
    });
    
    resultadoValidacion.style.display = "none";
    inputCarnet.focus();
};

// Eventos de los botones
btnValidar.addEventListener("click", validarFormulario);
btnLimpiar.addEventListener("click", limpiarFormulario);

// Inicializar
inputCarnet.focus();