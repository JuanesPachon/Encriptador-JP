function encriptar() {

    let texto = document.querySelector(".campo__texto").value;

    let muestra = document.querySelector(".mensaje-encriptado");

    if (texto.trim() !== "") {

        let textoCifrado = texto
            .replace(/e/gi, "enter")
            .replace(/i/gi, "imes")
            .replace(/a/gi, "ai")
            .replace(/o/gi, "ober")
            .replace(/u/gi, "ufat");


            muestra.innerHTML = textoCifrado;
            muestra.classList.add("texto-encriptado")
    } else {
        muestra.innerHTML = "Ingresa el texto que desees encriptar o desencriptar.";
        muestra.classList.add("texto-vacio")
    }
}

function desencriptar() {
    let texto = document.querySelector(".campo__texto").value;

    let muestra = document.querySelector(".mensaje-encriptado");

    if (texto.trim() !== "") {

        let textoCifrado = texto
            .replace(/enter/gi, "e")
            .replace(/imes/gi, "i")
            .replace(/ai/gi, "a")
            .replace(/ober/gi, "o")
            .replace(/ufat/gi, "u");


            muestra.innerHTML = textoCifrado;
            muestra.classList.add("texto-encriptado")
    } else {
        muestra.innerHTML = "Ingresa el texto que desees encriptar o desencriptar.";
        muestra.classList.add("texto-vacio")
    }
}