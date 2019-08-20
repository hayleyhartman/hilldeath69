const ghost = document.getElementById("ghost")
const words = document.getElementById("words")

ghost.addEventListener("mouseover", wordsAppear)

function wordsAppear () {
    words.style.opacity = "0.8"
}