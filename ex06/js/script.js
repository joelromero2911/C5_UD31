let reloj = document.querySelector(".reloj")

function relojLoop() {
    setTimeout(function() {
        let tiempo = new Date();
        // let horas = tiempo.getHours()
        let horas = ("0" + (tiempo.getHours())).slice(-2)
        let minutos = ("0" + (tiempo.getMinutes())).slice(-2)
        let segundos = ("0" + (tiempo.getSeconds())).slice(-2)
        reloj.innerHTML = horas + " : " + minutos + " : " + segundos
        relojLoop()
    }, 1000)
}

relojLoop()