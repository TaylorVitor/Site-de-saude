

//---------------------- borrar a pagina----------------------------//

const bg = document.querySelector("#bg")
const porcento = document.querySelector(".porcento")

let start = 0

let time = setInterval(blurring, 30)

function blurring() {
    start++

    if(start > 99) {
        clearInterval(time)
    }
    porcento.innerHTML = `${start}%`
    porcento.style.opacity = scale(start, 0, 100, 3, 0)
    bg.style.filter = `blur(${scale(start, 0, 100, 30, 0)}px)`
}

const scale = (num, inMin, inMax, outMin, outMax) => {
    return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}


//--------------------- Botão menu//----------------------------//

let search = document.querySelector(".search")
let input = document.querySelector(".input")
let btn = document.querySelector(".btn")

btn.addEventListener("click", () => {
    search.classList.toggle("active")
    input.focus()
})



//-------------------- menu Hamburguer ------------------------//

let InscreverSe = document.querySelector(".Inscrever-se")
let abrirFechar = document.querySelector(".abrirFechar")


let aberto = false

function abrirFecharMenu() {

    if(aberto === true) {
        aberto = false
        InscreverSe.classList.remove("aberto")

    } else if(aberto === false) {
        aberto = true 
        InscreverSe.classList.add("aberto")
    }

}



//--------------------- botão de inscrever-se -----------------------//

let concluido = document.querySelector(".concluido")
let btnInscrito  = document.querySelector(".btn-inscrito ")

btnInscrito.addEventListener("click", () => {
    concluido.classList.add("visivel")

    setTimeout(function (){
        concluido.classList.remove("visivel")
    }, 3000)
})

