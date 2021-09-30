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
$('.checkBox').toggleClass('checkboxSection')
$('.questionsS').toggleClass('hide')
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
var index = 0;
var questionsTitle = document.getElementById("questionTitle");

var choices = document.getElementById("answers");

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
var selections = [];
function displayQuestions (){


    var firstQuestion = questions[index];

    
        var count = index+1;
        if (index+1 > questions.length){
            $('.questionsS').toggleClass('hide')

            // Results();
            testing()
        } else {
        var questionName = firstQuestion.title;
        questionsTitle.append(questionName);
        for (i=0; i< firstQuestion.choices.length; i++){
            var choicesLi = firstQuestion.choices[i];;
            var choicesNode = document.createElement("button");
            choicesNode.setAttribute("class", "btn btn-primary btnAnswer w-100");
            choicesNode.setAttribute("value", choices);
            choices.append(choicesNode);
            choicesNode.append(choicesLi);
            }   
            // Adding an event listener click function to each choice.
            $('.btnAnswer').on("click",function(event){
                index ++
                var potato = {
                    result: firstQuestion.result,
                    final: event.target.innerHTML
                }
                selections.push(potato)
                // selections.push(event.target.innerHTML)
                localStorage.setItem("finalAnswers", JSON.stringify(selections))
                $('#questionTitle').empty()
                $('#answers').empty()
                displayQuestions();
            })

            
        }
        // Displaying it all on the page.
    }
    
    var Results = function (){
        JSON.parse(localStorage.getItem("finalAnswers"));
    }

active = []
foodZ = []
general = []
going = []
movieX = []
drinkz = []
eventq = []

function testing(){
    var selections = JSON.parse(localStorage.getItem("finalAnswers"));
    console.log(selections)
    for (i=0; i < selections.length; i++){
        if (selections[i].result == "general"){
            general.push(selections[i].final)
        }
        
        if (selections[i].result == "goingOut"){
            going.push(selections[i].final)
        }
        if (selections[i].result == "activity"){
            active.push(selections[i].final)
        }
        if (selections[i].result == "movie"){
            movieX.push(selections[i].final)
        }
        if (selections[i].result == "drinky"){
            drinkz.push(selections[i].final)
        }
        if (selections[i].result == "eventr"){
            eventq.push(selections[i].final)
        }
        if (selections[i].result == "food"){
            foodZ.push(selections[i].final)
        }
    }
    localStorage.setItem("general" , general)
    localStorage.setItem("food" , foodZ)
    localStorage.setItem("active" , active);
    localStorage.setItem("goingO" , going)
    localStorage.setItem("event" , eventq)
    localStorage.setItem("drink" , drinkz)
    localStorage.setItem("movie" , movieX)
}
