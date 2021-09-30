$('.btnBegin').on('click',function(){
    $('.firstPage').toggleClass('landingSection')
    $('.checkBox').toggleClass('checkboxSection')
})









var questions = [];
var submit = document.querySelector("#checkboxSubmit");

// Variables set for each event checkbox.

var activity = document.getElementById("cb1");
var food = document.getElementById("cb2");
var movie = document.getElementById("cb3");
var drinks = document.getElementById("cb4");
var events = document.getElementById("cb5");

// Variables set for the go in or go out checkboxes.

var stayIn = document.getElementById("cb21");
var goOut = document.getElementById("cb22");

// Variables set for the time of day the date will take place.

var morning = document.getElementById("cb31");
var midday = document.getElementById("cb32");
var afternoon = document.getElementById("cb33");
var night = document.getElementById("cb34");

// If statements to link the checklists to the corresponding question arrays.
var pushArray = function() {
if (activity.checked==true) {
    questions.push(...activityQuestions);
    }
    
    if (food.checked==true) {
        questions.push(...foodQuestions);
    }
    
    if (movie.checked==true) {
        questions.push(...movieQuestions);
    }
    
    if (drinks.checked==true) {
        questions.push(...drinksQuestions);
    }
    
    if (events.checked==true) {
        questions.push(...eventQuestions);
    }
    
    if (goOut.checked==true) {
        questions.push(...goingOut);
    };
    
    console.log(questions);
    displayQuestions(questions);
}

submit.addEventListener("click", pushArray);

// Variables set for the questions.

var questionsTitle = document.getElementById("questionTitle");
// var firstQuestion = questions[questionOne];
var choices = document.getElementById("choices");

function dateQuestions() {
    
  
    // Displaying the question.
    questionsTitle.textContent = firstQuestion.title;
  
    // clearing out the old answers
    answers.innerHTML = "";
  
    // getting the new answers
    firstQuestion.choices.forEach(function(choices, i) {
      // making buttons for each choice
      
      choicesNode.textContent = i + 1 + ". " + choice;
      
    });
} 

function displayQuestions (questions){
    $('.checkBox').toggleClass('checkboxSection')
    $('.questionsS').toggleClass('hide')
    console.log(questions)
    
    for (i=0; i < questions.length; i++){
        var tempQuestion = questions[i]
        var questionTitle = tempQuestion.title
        console.log(questionTitle)
        for (i=0; i< tempQuestion.choices.length; i++){
            var choicesLi = tempQuestion.choices[i]
            console.log(choicesLi)
            var choicesNode = document.createElement("button");
            choicesNode.setAttribute("class", "btn btn-primary btnAnswer w-100");
            choicesNode.setAttribute("value", choices);
            
            // Adding an event listener click function to each choice.
            choicesNode.onclick = questionClick;
            
            // Displaying it all on the page.
            choices.appendChild(choicesNode);
            choicesNode.appendChild(choicesLi);
        }
    }
}