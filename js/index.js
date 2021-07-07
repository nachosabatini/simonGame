let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];
let randomChosenColour = "";

nextSequence = () => {
    let randomNumber = Math.floor(Math.random()*4)
    randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    playSound(randomChosenColour)
}

playSound = (colour) => {
    switch (colour) {
        case "red":
            $("#red").addClass("pressed");
            setTimeout(() => { $("#red").removeClass("pressed"); }, 100);
            new Audio('sounds/red.mp3').play();
            break;
        case "blue":
            $("#blue").addClass("pressed");
            setTimeout(() => { $("#blue").removeClass("pressed"); }, 100);
            new Audio('sounds/blue.mp3').play();
            break;
        case "yellow":
            $("#yellow").addClass("pressed");
            setTimeout(() => { $("#yellow").removeClass("pressed"); }, 100);
            new Audio('sounds/yellow.mp3').play();
            break;
        case "green":
            $("#green").addClass("pressed");
            setTimeout(() => { $("#green").removeClass("pressed"); }, 100);
            new Audio('sounds/green.mp3').play();
            break;
        default:
            new Audio('sounds/wrong.mp3').play();
            break;
    }

}