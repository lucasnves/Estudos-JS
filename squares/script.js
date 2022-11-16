let squareR = document.getElementById("square-RED")
let squareY = document.getElementById("square-YELLOW")
let squareG = document.getElementById("square-GREEN")

const squares = document.querySelectorAll('.colorSquare')

const timesClicked = { 'red': 0, 'yellow': 0, 'green': 0 }
squares.forEach(square => {
    square.onclick = () => {
        timesClicked[square.value] += 1
        square.innerText = timesClicked[square.value]
    }
    //square.onclick = () => console.log(square.value)
})

function clearScores() {
    squares.forEach(square => {
        timesClicked[square.value] = 0
        square.innerHTML = ''
    })
}

const clearGame = document.getElementById("clear-game")
clearGame.onclick = () => clearScores()