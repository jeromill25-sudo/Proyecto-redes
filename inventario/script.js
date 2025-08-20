const tabla = document.getElementById("tablaInventario")

function agregarProducto() {
    const nombre = document.getElementById("nombre").value.trim();
    const codigo = document.getElementById("codigo").value.trim();
    const cantidad = document.getElementById("cantidad").value.trim();
    const error = document.getElementById("error");

    if (!nombre || !codigo || !cantidad) {
        error.textContent = "Complete todos los campos";
        return;
    }

    error.textContent = ""; // Limpiar mensaje de error

    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td contenteditable="true">${nombre}</td>
        <td contenteditable="true">${codigo}</td>
        <td contenteditable="true">${cantidad}</td>
    `;

    tabla.appendChild(fila);

    // Limpiar inputs
    document.getElementById("nombre").value = "";
    document.getElementById("codigo").value = "";
    document.getElementById("cantidad").value = "";
}
