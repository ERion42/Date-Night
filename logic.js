var stayingB = false
var goingB = false
var activeB = false
var movieB = false
var foodB = false
var eventB = false
var drinkB = false
var questions = generalQuestions;
var submit = document.querySelector("#checkboxSubmit");

// Variables set for each event checkbox.

var activity = document.getElementById("cb1");
var food = document.getElementById("cb2");
var movie = document.getElementById("cb3");
var drinks = document.getElementById("cb4");
var events = document.getElementById("cb5");

// Variables set for the go in or go out checkboxes.

var stayIn = document.getElementById("cb22");
var goOut = document.getElementById("cb21");

// Variables set for the time of day the date will take place.

var morning = document.getElementById("cb31");
var midday = document.getElementById("cb32");
var afternoon = document.getElementById("cb33");
var night = document.getElementById("cb34");

// If statements to link the checklists to the corresponding question arrays.
var pushArray = function() {
$('.checkBox').toggleClass('checkboxSection')
$('.questionsS').toggleClass('hide')
    if (stayIn.checked ==true){
        stayingB = true
    }
    if (activity.checked==true) {
    questions.push(...activityQuestions);
        activeB = true
    }
    
    if (food.checked==true) {
        questions.push(...foodQuestions);
        foodB = true
    }
    
    if (movie.checked==true) {
        questions.push(...movieQuestions);
        movieB = true
    }
    
    if (drinks.checked==true) {
        questions.push(...drinksQuestions);
        drinkB = true
    }
    
    if (events.checked==true) {
        questions.push(...eventQuestions);
        eventB = true
    }
    
    if (goOut.checked==true) {
        goingB = true;
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
            Results()
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

active = []
foodZ = []
general = []
goingO = []
movieX = []
drinkz = []
eventq = []

function Results(){
    var selections = JSON.parse(localStorage.getItem("finalAnswers"));
    console.log(selections)
    for (i=0; i < selections.length; i++){
        if (selections[i].result == "general"){
            general.push(selections[i].final)
        }
        
        if (selections[i].result == "goingOut"){
            goingO.push(selections[i].final)
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
    localStorage.setItem("general" , JSON.stringify(general))
    localStorage.setItem("food" , JSON.stringify(foodZ))
    localStorage.setItem("active" , JSON.stringify(active))
    localStorage.setItem("goingO" , JSON.stringify(goingO))
    localStorage.setItem("event" , JSON.stringify(eventq))
    localStorage.setItem("drink" , JSON.stringify(drinkz))
    localStorage.setItem("movie" , JSON.stringify(movieX))
    localStorage.setItem("stayingB",stayingB)
    localStorage.setItem("goingB",goingB)
    localStorage.setItem("activeB",activeB)
    localStorage.setItem("movieB",movieB)
    localStorage.setItem("foodB",foodB)
    localStorage.setItem("eventB",eventB)
    localStorage.setItem("drinkB",drinkB)
    console.log('hello')
    document.location.replace('./results.html')
}
