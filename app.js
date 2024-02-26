function encriptar() {

    let texto = document.querySelector(".campo__texto").value;

    let muestra = document.querySelector(".mensaje-encriptado");

    if (texto.trim() !== "") {

        let advertencia = document.createElement("p");
        let aviso = document.querySelector(".aviso")

        if(/[A-Z]/.test(texto) || /[!@#$%^&*()_+{}\[\]:áéíóúüñÁÉÍÓÚÜÑ;<>,.?~\\/-]/.test(texto)){
            advertencia.textContent = "Solo son admitidas minisculas y sin acentos."
            aviso.appendChild(advertencia)
            advertencia.classList.add("error-aviso")
        }else {



            let textoCifrado = texto
                .replace(/e/gi, "enter")
                .replace(/i/gi, "imes")
                .replace(/a/gi, "ai")
                .replace(/o/gi, "ober")
                .replace(/u/gi, "ufat");


                muestra.innerHTML = textoCifrado;
                muestra.classList.add("texto-encriptado")


                let botonCopiar = document.createElement("button");
                botonCopiar.textContent = "Copiar";
                muestra.appendChild(botonCopiar)
                botonCopiar.classList.add("boton-copiar")

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
            muestra.classList.add("texto-encriptado")

            botonCopiar = document.createElement("button");
            botonCopiar.textContent = "Copiar";
            muestra.appendChild(botonCopiar)
            botonCopiar.classList.add("boton-copiar")

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