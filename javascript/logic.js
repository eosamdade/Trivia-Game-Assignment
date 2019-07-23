var questions = [
    {
        question:"How many hearts do octopuses have?",
        choices: ["One","Two","Three","Four"],
        answer: "Three",
        rightPhoto: "https://media.giphy.com/media/lnyPptAfGwHeTdoQDk/giphy.gif",
        wrongPhoto: "https://media.giphy.com/media/Jsmhn6ZHIWjl1Zd5Gn/giphy.gif"
    },
    {
        question:" Who was the second man to walk on the moon?",
        choices: ["Buzz Aldrin","Niel Armstrong","Michael Collins","Elon Musk"],
        answer: "Buzz Aldrin",
        rightPhoto: "https://media.giphy.com/media/dTX3ONYXGIBTyKikDt/giphy.gif",
        wrongPhoto: "https://media.giphy.com/media/fXWTLHq8lpKCQyQ2dF/giphy.gif"
    },
    {
        question:"What is the largest lake in Africa?",
        choices: ["Lake Malawi","Lake Victoria","Lake Natron","Peru"],
        answer: "Lake Victoria",
        rightPhoto: "https://media.giphy.com/media/135sKwOV5uCpCo/giphy.gif",
        wrongPhoto: "https://media.giphy.com/media/12asjkJxOCg9mE/giphy.gif"
    },
    {
        question:"Which African country used to be called Abyssinia?",
        choices: ["South Africa","Nigeria","Ethiopia","Ghana"],
        answer: "Ethiopia",
        rightPhoto: "https://media.giphy.com/media/yV5iknckcXcc/giphy.gif",
        wrongPhoto: "https://media.giphy.com/media/TXgBQoz79pxMQ/giphy.gif"
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
   setTimeout(displayNextQuestion,2000); 
}

function displayNextQuestion(){
    //show questions
    $('#question').show()
    //empty response and giphy
    $("#response").empty();
    $("#giphy").empty();
    //increase question index by 1
    index++;
    // show first question
    $('#question').html(questions[index].question);

    // empty choice div
    $('#choices').empty();

    // show first question choices
    for (let i = 0; i < questions[index].choices.length; i++) {
        $('#choices').append(`<div class="choice">${questions[index].choices[i]}</div>`)  
    };
    
    //reset imer to 20
    time = 20;
    //run time
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

        $("#choices").empty();
        $('#question').hide()
        
        $("#response").html('<h2>Correct!</h2>');
        $("#giphy").html(`<img src="${questions[index].rightPhoto}" alt="giphy">`)
        
        // if right increment rightAnswers
        rightAnswers ++;
        
    } else {
        stop();

        $("#timer").empty();

        $("#choices").empty();
        $('#question').hide()
        
        $("#response").html('<h2>Wrong Answer!</h2>');
        $("#giphy").html(`<img src="${questions[index].wrongPhoto}" alt="giphy">`)
        console.log('you are wrong');
        // if wrong decrement wrongAnswers
        wrongAnswers ++;
    };

    
    if(index < 4){
        setTimeout(displayNextQuestion,3000);
    } 
    else {
        //empty response
        $("#response").empty();
        $("giphy").empty();
        // game over
        console.log('game over');
        
        // show end results
        $("#score").append(`CORRECT ANSWERS <p>${rightAnswers}</p>`);
        $("#score").append(`WRONG ANSWERS <p>${wrongAnswers}</p>`);
        $("#score").append(`UNANSWERED QUESTIONS <p>${unanswered}</p>`);
        

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