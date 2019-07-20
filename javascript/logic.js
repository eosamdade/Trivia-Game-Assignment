var questions = [
    {
        question:"How many hearts do octopuses have?",
        choices: ["One","Two","Three","Four"],
        answer: "Three",
        rightPhoto: "",
        wrongPhoto: ""
    },
    {
        question:" Who was the second man to walk on the moon?",
        choices: ["Buzz Aldrin","Niel Armstrong","Michael Collins","Elon Musk"],
        answer: "Buzz Aldrin",
        rightPhoto: "",
        wrongPhoto: ""
    },
    {
        question:"What is the largest lake in Africa?",
        choices: ["Lake Malawi","Lake Victoria","Lake Natron","Peru"],
        answer: "Lake Victoria",
        rightPhoto: "",
        wrongPhoto: ""
    },
    {
        question:"Which African country used to be called Abyssinia?",
        choices: ["South Africa","Nigeria","Ethiopia","Ghana"],
        answer: "Algeria",
        rightPhoto: "",
        wrongPhoto: ""
    },
    {
        question:"Who developed the special theory of relativity?",
        choices: ["Nicolas Tesla","Albert Einstein","Isaac Newton","Aristotle"],
        answer: "Albert Einstein",
        rightPhoto: "",
        wrongPhoto: ""
    }
];


var index = -1
var rightAnswers = 0;
var wrongAnswers =0;
var unanswered = 0;
var timer = 20;

//start timer
var time = 20;
var intervalId;
var timeRunning = false;

//reset
$("#reset").hide()
//$("#timer").hide()

// start button
$('#start').on('click', function(){
    //right and wrong anwers set to zero
    rightAnswers = 0
    wrongAnswers = 0
    //hide start button
    $('#start').hide();
    //$("#timer").show();

    //display questions
    displayNextQuestion();

    //start timer
    runTime();
    
    // show questions and choices
    $('#question').show();
    $('#choices').show();
    

})

//time start
function runTime () {
    if(!timeRunning) {
        intervalId = setInterval(decrement,1000);
        timeRunning = true;
    }
}

//time decrement
function decrement () {
    time --;

    //show time in the html
    $("#timer").html(`<p>00:00:${time}</p>`)

    //when time = 0; time run out
    if (time === 0) {
        unanswered ++;
        stop();
        timeout();
        console.log(unanswered);
    }
}

//stop time

function stop() {
    timeRunning = false;
    clearInterval(intervalId);
}

function timeout () {
    $("#timer").html(`<p>Time is Up</p>`)
    time = 20;
    displayNextQuestion();
}


function displayNextQuestion(){
    
    //increase question index by 1
    index++;
    // show first question
    $('#question').html(questions[index].question);

    // empty choice div
    $('#choices').empty();
    // $('#response').empty();

    // show first question choices
    for (let i = 0; i < questions[index].choices.length; i++) {
        $('#choices').append(`<div class="choice">${questions[index].choices[i]}</div>`)    
    }
    
    time = 20;
    runTime();   
}


// click event for each choice
// delegated event
$('body').on('click','.choice', function(){
    var selectedChoice = $(this).text();
    console.log(`selected choice : ${selectedChoice}`);
    console.log(`answer : ${questions[index].answer}`);
    
    // check if right or wrong
    if(selectedChoice === questions[index].answer){
        stop();
        $("#timer").empty();
        console.log('you are right');
        
        //$("#response").html('<h2>you are right</h2>');
        
        // if right increment rightAnswers
        rightAnswers ++;
        
    } else {
        stop();
        console.log('you are wrong');
        // if wrong decrement wrongAnswers
        wrongAnswers ++;
    };

    
    if(index < 4){
        displayNextQuestion();
    } 
    else {
        // game over
        console.log('game over')
        // hide questions and choices
        // show end results
        $("#score").append(`CORRECT ANSWERS <p>${rightAnswers}</p>`);
        $("#score").append(`WRONG ANSWERS <p>${wrongAnswers}</p>`);
        $("#score").append(`UNANSWERED QUESTIONS <p>${unanswered}</p>`);
        // rightAnswers = 0
        // wrongAnswers = 0
        // show start
        //$('#start').show();

        //hide questions
        $('#question').hide();
        $('#choices').hide();
        
        //show reset button
        $("#reset").show()

        //hide time
        $("#time").hide()
    };
    
})

$("#reset").on("click",function(){
    $("#reset").hide();
    $("#score").empty();
    $("#start").show();
    index=0;
})

function showPic(time,respo){


}

//show pic if ans is wrigh or wrong


// move to next question

// get through all questions
// show result - right wrong

// track wins and losses

//reset


// NICE EXTRA FEATURES

// timer
// giphy for right wrongs


//empty results
