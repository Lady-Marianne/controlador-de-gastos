let listaNombresGastos =  [];
let listaValoresGastos =  [];

function clickBoton() {
    let nombreGasto = document.getElementById("nombreGasto").value;
    let valorGasto = document.getElementById("valorGasto").value;
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
        //const valorGasto = listaValoresGastos [indice];
        htmlLista += `<li>${elemento} - $ ${listaValoresGastos[indice] }
        <button onclick="eliminarGasto(${indice})">Eliminar</button>
        </li>`;
        totalGastos += parseInt(listaValoresGastos[indice]);
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
}