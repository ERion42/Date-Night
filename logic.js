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
    
        questions.push(activityQuestions);
    }
}

if (food.checked==true) {
    for (var i of foodQuestions) {
        questions.push(i);
    }
}

if (movie.checked==true) {
    for (var i of movieQuestions) {
        questions.push(i);
    }
}

if (drinks.checked==true) {
    for (var i of drinksQuestions) {
        questions.push(i);
    }
}

if (events.checked==true) {
    for (var i of eventQuestions) {
        questions.push(i);
    }
}

if (goOut.checked==true) {
    for (var i of goingOut) {
        questions.push(i);
    }

    console.log(questions);
};

submit.addEventListener("click", pushArray);