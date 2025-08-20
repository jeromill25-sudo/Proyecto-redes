// datos a evualuar
const user = "cecomsa";
const pass = "grupo1"

document.getElementById("loginForm").addEventListener("submit", function (e){
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");

    if (username === user && password === pass){
        window.location.href = "inventario/index.html"
    } else {
        error.textContent = "Usuario o contraseña incorrectos"
    }
});