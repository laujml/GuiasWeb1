// Accedemos al contenedor donde se muestra los elementos
const containerArreglo = document.querySelector("#idcontainerArreglo");
const containerArregloOrdenado = document.querySelector("#idcontainerArregloOrdenado");

// Accedemos a cada botón por medio de la API DOM
const btnAgregar = document.querySelector("#idBtnAgregar");
const btnOrdenar = document.querySelector("#idBtnOrdenar");
const inputNumero = document.querySelector("#inputNumero");

// Agregamos el evento click a los botones
btnAgregar.addEventListener("click", agregarElemento);
btnOrdenar.addEventListener("click", ordenarElementos);

let arreglo = [];

function agregarElemento() {
    const numero = parseInt(inputNumero.value);

    if (isNaN(numero)) {
        alert("Debe ingresar un número válido");
    } else {
        arreglo.push(numero);

        // Obtenemos el row interno y lo limpiamos
        let rowInterno = containerArreglo.querySelector(".row:nth-child(2)");
        rowInterno.innerHTML = "";

        // Añadimos los elementos en el row interno
        arreglo.forEach(num => {
            let caja = document.createElement("div");
            caja.className = "colum col-md-2";
            let valor = document.createElement("h3");
            valor.textContent = num;
            valor.className = "text-center";
            caja.appendChild(valor);
            rowInterno.appendChild(caja);
        });

        inputNumero.value = "";
    }
}

function ordenarElementos() {
    const arregloOrdenado = [...arreglo].sort((a, b) => a - b);

    // Obtenemos el row interno y lo limpiamos
    let rowInterno = containerArregloOrdenado.querySelector(".row:nth-child(2)");
    rowInterno.innerHTML = "";

    // Añadimos los elementos ordenados en el row interno
    arregloOrdenado.forEach(num => {
        let caja = document.createElement("div");
        caja.className = "colum-green col-md-2";
        let valor = document.createElement("h3");
        valor.textContent = num;
        valor.className = "text-center";
        caja.appendChild(valor);
        rowInterno.appendChild(caja);
    });
}