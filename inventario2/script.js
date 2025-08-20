function agregarProducto(tipo) {
    const nombre = document.getElementById(`nombre-${tipo}`).value.trim();
    const codigo = document.getElementById(`codigo-${tipo}`).value.trim();
    const cantidad = document.getElementById(`cantidad-${tipo}`).value.trim();
    const error = document.getElementById(`error-${tipo}`);

    if (!nombre || !codigo || !cantidad) {
        error.textContent = "Complete todos los campos";
        return;
    }

    error.textContent = ""; // limpiar error

    const tabla = document.getElementById(`tabla-${tipo}`);
    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td contenteditable="true">${nombre}</td>
        <td contenteditable="true">${codigo}</td>
        <td contenteditable="true">${cantidad}</td>
    `;

    tabla.appendChild(fila);

    // Limpiar inputs
    document.getElementById(`nombre-${tipo}`).value = "";
    document.getElementById(`codigo-${tipo}`).value = "";
    document.getElementById(`cantidad-${tipo}`).value = "";
}
