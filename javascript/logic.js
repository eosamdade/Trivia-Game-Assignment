var questions = [
    {
        question:"which of these countries belong to the African continent",
        choices: ["Ghana","Fiji","Cuba","Peru"],
        answer: "Ghana",
        rightPhoto: "",
        wrongPhoto: ""
    },
    {
        question:"Which African Country has the biggest Land Area",
        choices: ["Sudan","Nigeria","Mali","Algeria"],
        answer: "Algeria",
        rightPhoto: "",
        wrongPhoto: ""
    },
    {
        question:"which of these countries belong to the African continent",
        choices: ["Ghana","Fiji","Cuba","Peru"],
        answer: "Ghana",
        rightPhoto: "",
        wrongPhoto: ""
    },
    {
        question:"Which African Country has the biggest Land Area",
        choices: ["Sudan","Nigeria","Mali","Algeria"],
        answer: "Algeria",
        rightPhoto: "",
        wrongPhoto: ""
    },
    {
        question:"which of these countries belong to the African continent",
        choices: ["Ghana","Fiji","Cuba","Peru"],
        answer: "Ghana",
        rightPhoto: "",
        wrongPhoto: ""
    }
];


var index = 0
var rightAnswers = 0;
var wrongAnswers =0;
var timer = 20;


// directly bound event
$('#start').on('click', function(){
    rightAnswers = 0
    wrongAnswers = 0
    displayNextQuestion();
    
    // hide start button
    $('#start').hide();

    //start timer

})


function displayNextQuestion(){
    // show first question
    $('#question').html(questions[index].question)


    // empty choice div
    $('#choices').empty();
    // $('#response').empty();


    // show first question choices
    for (let i = 0; i < questions[index].choices.length; i++) {
        $('#choices').append(`<button class="choice">${questions[index].choices[i]}</button>`)    
    }
}


// click event for each choice
// delegated event
$('body').on('click','.choice', function(){
    var selectedChoice = $(this).text();
    console.log(selectedChoice);
    console.log(questions[index].answer);
    // check if right or wrong
    if(selectedChoice === questions[index].answer){
        alert('you are right');
        //$("#response").html('<h2>you are right</h2>');
        // if right increment rightAnswers
        rightAnswers ++;
        

    } else {
        alert('you are wrong')
        // if wrong decrement wrongAnswers
        wrongAnswers ++;
    };

    index++;

    if(index < 5){
        displayNextQuestion();
    } else {
        // game over
        alert('game over')
        // hide questions and choices
        // show end results
        $("#score").append(`CORRECT ANSWERS :<p>${rightAnswers}</p>`);
        $("#score").append(`WRONG ANSWERS :<p>${wrongAnswers}</p>`);
        // rightAnswers = 0
        // wrongAnswers = 0
        // show start
        //$('#start').show();

        //hide questions
        $('#question').hide();
        $('#choices').hide();
        
        //hide choices
    };
    
})

// move to next question

// get through all questions
// show result - right wrong

// track wins and losses

//reset


// NICE EXTRA FEATURES

// timer
// giphy for right wrongs