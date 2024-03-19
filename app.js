// Dark mode

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const lightLogo = document.querySelector(".light-logo");
const darkLogo = document.querySelector(".dark-logo");

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggleLogo();
});

function toggleLogo() {
    const isDarkMode = body.classList.contains('dark-mode');
    if (isDarkMode) {
        lightLogo.style.display = 'none';
        darkLogo.style.display = 'inline-block';
    } else {
        lightLogo.style.display = 'inline';
        darkLogo.style.display = 'none';
    }

    if (isDarkMode) {
        themeToggle.textContent = "Light mode"
    } else {
        themeToggle.textContent = "Dark mode"
    }
}


function encriptar() {

    let texto = document.querySelector(".campo__texto").value;

    let muestra = document.querySelector(".mensaje-encriptado");

    if (texto.trim() !== "") {

        let advertencia = document.createElement("p");
        let aviso = document.querySelector(".aviso");

        if(/[A-Z]/.test(texto) || /[!@#$%^&*()_+{}\[\]:áéíóúüñÁÉÍÓÚÜÑ;<>,.?~\\/-]/.test(texto)){
            advertencia.textContent = "Solo son admitidas minisculas y sin acentos.";
            aviso.appendChild(advertencia);
            advertencia.classList.add("error-aviso");
        }else {



            let textoCifrado = texto
                .replace(/e/gi, "enter")
                .replace(/i/gi, "imes")
                .replace(/a/gi, "ai")
                .replace(/o/gi, "ober")
                .replace(/u/gi, "ufat");


                muestra.innerHTML = textoCifrado;
                muestra.classList.add("texto-encriptado");


                let botonCopiar = document.createElement("button");
                botonCopiar.textContent = "Copiar";
                muestra.appendChild(botonCopiar);
                botonCopiar.classList.add("boton-copiar");

                botonCopiar.addEventListener("click", function () {
                    
                    let textoCopiado = textoCifrado;
                    navigator.clipboard.writeText(textoCopiado).then(function () {
                    ;
                    }).catch(function (err) {
                        console.error('Error al copiar al portapapeles: ', err);
                    });
                });
            }
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
            muestra.classList.add("texto-encriptado");

            botonCopiar = document.createElement("button");
            botonCopiar.textContent = "Copiar";
            muestra.appendChild(botonCopiar);
            botonCopiar.classList.add("boton-copiar");

            botonCopiar.addEventListener("click", function () {
                
                let textoCopiado = textoCifrado;
                navigator.clipboard.writeText(textoCopiado).then(function () {
                ;
                }).catch(function (err) {
                    console.error('Error al copiar al portapapeles: ', err);
                });
            });
    }
}