// Acceder a elemento HTML con getElementById
const campo = document.getElementById("idTxtNumero");

// Función anónima para validar ingreso de números en tiempo real
const validarNumero = function (e) {
    // Expresión regular para validar solo números
    let creamosUna = /[0-9]/g;
    let tecla = e.key;
    // Validar que no se ingresen letras u otros caracteres
    if (!creamosUna.test(tecla)) e.preventDefault();
};

// Evento keypress para el campo
campo.addEventListener("keypress", validarNumero);

// Trabajar con el botón Calcular
const boton = document.getElementById("idBtnCalcular");

// Función anónima para calcular factorial
function calcularFactorial(numero) {
    return numero < 2 ? 1 : numero * calcularFactorial(numero - 1);
}

// Función flecha para imprimir resultado
const imprimir = (numero, resultado) => {
    const contenedor = document.getElementById("idDivResultado");
    contenedor.innerHTML = `El factorial de ${numero} es ${resultado}`;
};

// Función tradicional para calcular
function calcular() {
    let numero = document.getElementById("idTxtNumero").value;
    if (numero !== "") {
        // Calcular factorial
        let resultado = calcularFactorial(parseInt(numero));
        // Mostrar resultado
        imprimir(numero, resultado);
    } else {
        alert("Debe ingresar un número válido");
    }
};

// Evento click para el botón
boton.addEventListener("click", calcular);