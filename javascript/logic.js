var options = [
    {
        question:"which of these countries belong to the African continent",
        choice: ["Ghana","Fiji","Cuba","Peru"],
        answer: 0,
        photo: ""
    },
    {
        question:"Which African Country has the biggest Land Area",
        choice: ["Sudan","Nigeria","Mali","Algeria"],
        answer: 4,
        photo: ""
    },
    {
        question:"which of these countries belong to the African continent",
        choice: ["Ghana","Fiji","Cuba","Peru"],
        answer: 0,
        photo: ""
    },
    {
        question:"Which African Country has the biggest Land Area",
        choice: ["Sudan","Nigeria","Mali","Algeria"],
        answer: 4,
        photo: ""
    },
    {
        question:"which of these countries belong to the African continent",
        choice: ["Ghana","Fiji","Cuba","Peru"],
        answer: 0,
        photo: ""
    }
];

//variables
var timeCounter = 20;
var currentQuestion = 0;
var correct = 0;
var wrong = 0;
var timer;

function displayquestion (){
    var questions =options[currentQuestion].question;
    var choices =options[currentQuestion].choice;

    $("#time").html("Timer: " + timeCounter)
    $("#game").html(
        `<h4>${questions}</h4>
        ${displayChoices(choices)}
        
    `);
}
displayquestion();

function displayChoices (choice){
    
    var result = ""
    for (var i = 0; i <choices.result; i++ ){
        result += `<p class="choice" data-answer ="${choice[i]}">"${choice[i]}"</p>`
    }
    return result;
}