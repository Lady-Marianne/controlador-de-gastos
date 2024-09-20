let listaNombresGastos =  [];
let listaValoresGastos =  [];

function clickBoton() {
    let nombreGasto = document.getElementById("nombreGasto").value;
    let valorGasto = parseFloat(document.getElementById("valorGasto").value);

    if (nombreGasto.trim() === "" || isNaN(valorGasto) || valorGasto <= 0) {
        alert("Por favor ingrese un nombre de gasto válido y un valor mayor a 0.");
        return;
    }

    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);
    actualizarListaGastos();
};

function actualizarListaGastos() {

    const listaDeGastos  = document.getElementById("listaDeGastos");
    const totalMensual = document.getElementById("totalGastos");
    let htmlLista = '';
    let totalGastos = 0;

    listaNombresGastos.forEach(function(elemento,indice) {
        htmlLista += `<li>${elemento} - $ ${listaValoresGastos[indice].toFixed(2)}
        <button onclick="eliminarGasto(${indice});">Eliminar</button>
        </li>`;
        totalGastos += parseFloat(listaValoresGastos[indice].toFixed(2));
    });

    listaDeGastos.innerHTML = htmlLista;    
    totalMensual.innerHTML = totalGastos;
    limpiar();
}

function limpiar() {
    document.getElementById("nombreGasto").value = "";
    document.getElementById("valorGasto").value = "";
}

function  eliminarGasto(indice) {
    listaNombresGastos.splice(indice,1);
    listaValoresGastos.splice(indice,1);
    actualizarListaGastos();
}