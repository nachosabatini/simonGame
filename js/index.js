let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userChosenColour = [];
let randomChosenColour = "";

$(document).ready(function () {
    $(document).keypress(function(event){
        if(event.key === "a"){
            startGame();
        }
    });
    $("div[type=button]").click(function(event) {
        let currentColour = event.currentTarget.id
        userChosenColour.push(currentColour);
        playSound(currentColour);
        checkAnswer(userChosenColour.length - 1);

    });
  })

startGame = () => {
    if(gamePattern.length == 0){
        nextSequence();
    }
}

nextSequence = () => {
    userChosenColour = [];
    let randomNumber = Math.floor(Math.random()*4);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);
    $("#level-title").text("Level " + gamePattern.length);
}

checkAnswer = (currentLevel) => {

    if(gamePattern[currentLevel] === userChosenColour[currentLevel]){
        if(gamePattern.length === userChosenColour.length){
            setTimeout(() => { nextSequence(); }, 1000);
        }
    }else{
        playSound("wrong");
        $("#level-title").text("GAME OVER! Press A to restart")
        gamePattern = [];
        userChosenColour = [];
        randomChosenColour = "";
    }
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
            $("body").addClass("game-over")
            setTimeout(() => { $("body").removeClass("game-over") }, 200);
            new Audio('sounds/wrong.mp3').play();
            break;
    }

}




