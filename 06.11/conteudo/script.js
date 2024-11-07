console.log("locadora(versão estendida)")  

const meuTitulo = document.getElementById("titulo")


meuTitulo.style.color = "#6e150d"


const meuSubtitulo = document.getElementByIdClassName("subtitulo")

for (let i=0; i < meuSubtitulo.length; i++){
    meuSubtitulo[i].style.color = "#1e415c"
}





meuTitulo.textContent = "Tempos de Glória" ///muda texto

// criando elementos novos

const meuParagrafo = document.createElement('Super'); // significa criar
meuParagrafo.textContent = "Modo de Dizer, sempre foi sobre nós"
document.body.appendChild(meuParagrafo) // adiciona um filho aqui eu estou dizendo: dentro HTML no body

// remover elemento

const paragrafo = document.getElementById("remover");

const paragrafoRemover = document.getElementById("remover")
paragrafoRemover.remove()//remove é remover o elemento de TUDO