let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];

nextSequence = () => {
    let randomNumber = Math.floor(Math.random()*4)
    gamePattern.push(buttonColours[randomNumber])
}
