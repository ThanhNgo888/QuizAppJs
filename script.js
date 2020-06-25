const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startGame);

const questionContainerElement = document.getElementById("question-container");

function startGame(){
    console.log("Started")
    startButton.classList.add("hide");

    questionContainerElement.classList.remove("hide");
}

function setNextQuestion(){

}

function selectAnswer(){

}