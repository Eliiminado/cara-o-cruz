function Jugar(trigger) {
    let NumRandom = Math.random();
    let NumRandomRound = Math.round(NumRandom);
    if (trigger.target.id == "Cara") {
        if (NumRandomRound == 0) {
            document.querySelector("#ResultadoFinal").innerHTML = `<div class="alert alert-info" role="alert"> Has ganado! Ha tocado Cara!</div>`
            document.querySelector("#Gift").innerHTML = `<div> <img src="https://i.giphy.com/media/LYOij7iLA2B1uaReZB/giphy.webp"></div>`
        }
        else {
            document.querySelector("#ResultadoFinal").innerHTML = `<div class="alert alert-danger" role="alert"> Has perdido! Ha tocado Cruz!</div>`
            document.querySelector("#Gift").innerHTML = `<div> <img src="https://64.media.tumblr.com/3360968a18790f197bb37c4198804cc6/tumblr_memzypGt941qgepq0o1_500.gifv"></div>`
        }

    }
    if (trigger.target.id == "Cruz") {
        if (NumRandomRound == 1) {
            document.querySelector("#ResultadoFinal").innerHTML = `<div class="alert alert-info" role="alert"> Has ganado! Ha tocado Cruz!</div>`
            document.querySelector("#Gift").innerHTML = `<div> <img src="https://muymolon.com/wp-content/uploads/2015/05/tumblr_ltzgeux7sq1qfu11go1_500.gif"></div>`
        }
        else {
            document.querySelector("#ResultadoFinal").innerHTML = `<div class="alert alert-danger" role="alert"> Has perdido! Ha tocado Cara!</div>`
            document.querySelector("#Gift").innerHTML = `<div> <img src="https://socialnewsdaily.com/wp-content/uploads/2013/12/ouch.gif"></div>`
        }

    }
}


document.querySelector("#Cara").addEventListener("click", Jugar);
document.querySelector("#Cruz").addEventListener("click", Jugar);