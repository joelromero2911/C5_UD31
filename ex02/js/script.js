// Punto 1
let date = prompt("introduce una fecha: ")

if (date.match("[0-9]{2}([/])[0-9]{2}[/][0-9]{4}")) {
    alert("fecha formato correcto")
} else {
    alert("fecha formato incorrecto")
}

// Punto 2
let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

let email = prompt("introduce un email: ")

if (regexEmail.test(email)) {
    alert("email formato correcto")
} else {
    alert("email formato incorrecto")
}

// Punto 3

let text = prompt("introduce texto al que reemplazar caracteres especiales")

function escapeHTML (text) {

    text = text.replace('&','&amp;').replace('/', '&quot;').replace('<','&lt;').replace('>', '&gt;');

    return text
}

text = escapeHTML(text)

document.write(text)

// Punto 4

let frase = prompt("introduce frase")
let palabras = []
let cadena = ""

palabras = frase.split(" ")
palabras = palabras.reverse()
for (let i = 0; i < palabras.length; i++) {
    if (i == palabras.length-1){
        cadena += (palabras[i])
    } else {
        cadena += (palabras[i] + ", ")
    }
}

alert(cadena)

// Punto 5

let sc = prompt("introduce frase con <script>")

let regex5 = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi

sc = sc.replace(regex5, "script eliminado")

document.write(sc)