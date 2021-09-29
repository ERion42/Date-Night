var questions = [];
var submit = document.querySelector("button");

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
        questions.push(...goOutQuestions);
    }    
    console.log(questions);
    
};

submit.addEventListener("click", pushArray);