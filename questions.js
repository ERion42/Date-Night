// var timeOfYear = moment ()
// var seasons = timeOfYear.format("MMMM");

var generalQuestions = [
    {
        title: "What is your budget?",
        choices: ["Free only please", "$", "$$", "Absolutely down to ball out tonight"],
        result: "general1"
    },
    {
        title: "What do you want the mood for the date to be?",
        choices: ["Active", "Lazy", "Romantic", "Spontaneous"],
        result: "general2"
    }
];

var goingOut = [
    {
        title: "How many people are you comfortable with being around in public?",
        choices: ["No people", "Small groups (max of 30)", "Larger groups (max of 100)", "I love crowds!"],
        result: "goingOut1"
    },
    {
        title: "Would you prefer being indoors or outdoors?",
        choices: ["Indoor", "Outdoor", "No Preference"],
        result: "goingOut2"
    }
];

var activityQuestions = [
    {
        title: "What is your ideal Friday night?",
        choices: ["Lazy night in.", "Party!", "Going to an event.","Game night!", "Get some food and drinks."],
        result: "activity1"
    },
    {
        title: "How active do you want the activity to be?",
        choices: ["Mostly sitting", "Some Activity (i.e. Walking)", "Lots of Activity- Bring on the sweat"],
        result:"activity2"
    },
    {
        title: "What is your favorite out of the following:",
        choices: ["Music", "Art", "History", "Mystery", "Fitness", "Logic"],
        result: "activity3"
    }
];

var movieQuestions = [
    {
        title: "Which streaming service do you prefer",
        choices: ["Netflix", "Prime", "Disney","Hbo", "Hulu"],
        result: "movie1"
    },
    {
        title: "What is your go to on the TV?",
        choices: ["Sports", "Reality TV", "Mystery/Crime", "Comedy", "Horror"],
        result: "movie2"
    }, 
];

var drinksQuestions = [
    {
        title: "What is your kind of scene?",
        choices: ["Dive Bars", "Retro", "Dance Club", "Live Music", "Outdoor Bar"],
        result: "drink1"
    },
    {
        title: "What kind of drinks do you like?",
        choices: ["Liquor", "Beer", "Wine", "Non-Alcoholic Beverages", "Milkshakes"],
        result: "drink2"
    }
];

var eventQuestions = [
    {
        title: "What is your go-to event?",
        choices: ["Concert", "Sports", "Comedy", "Interactive"],
        result: "event1"
    },
    {
        title: "What is your ideal environment?",
        choices: ["Upscale", "Hyped", "Relaxed", "Thought-Provoking"],
        result: "event2"
    }
];

var foodQuestions = [
    {
        title: "What type of dish do you prefer",
        choices: ["Appetizer","Breakfast","Lunch","Dinner","Dessert","No-Preference"],
        result: "food1"
    },
    {
        title: "Any dietary preferences",
        choices: ["Meat","Vegetarian","gluten-free"],
        result: "food2"
    }
];
