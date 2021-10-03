var timeOfYear = moment ()
var seasons = timeOfYear.format("MMMM");
var generalQuestions = [
    {
        title: "What is your budget?",
        choices: ["Free only please", "$", "$$", "Absolutely down to ball out tonight"],
        result: "general"
    },
    {
        title: "What do you want the mood for the date to be?",
        choices: ["Active", "Lazy", "Romantic", "Spontaneous"],
        result: "general"
    }
];

var goingOut = [
    {
        title: "How many people are you comfortable with being around in public?",
        choices: ["No people", "Small groups (max of 30)", "Larger groups (max of 100)", "I love crowds!"],
        result: "goingOut"
    },
    {
        title: "Would you prefer being indoors or outdoors?",
        choices: ["Indoor", "Outdoor", "No Preference"],
        result: "goingOut"
    }
];

var activityQuestions = [
    {
        title: "How active do you want the activity to be?",
        choices: ["Light Activity", "Moderate Activity", "Lots of Activity- Bring on the sweat"],
        result:"activity"
    },
    {
        title: "What is your favorite out of the following:",
        choices: ["Art", "Adventure", "Fitness", "Logic"],
        result: "activity",
    }
];

var movieQuestions = [
    {
        title: "Which streaming service do you prefer",
        choices: ["Netflix", "Prime", "Disney","Hbo", "Hulu"],
        result: "movie",
    },
    {
        title: "What is your go to on the TV?",
        choices: ["Fantasy", "Drama", "Mystery/Crime", "Comedy", "Horror"],
        result: "movie"
    }
];

var drinksQuestions = [
    {
        title: "What is your kind of scene?",
        choices: ["Dive Bars", "Retro", "Dance Club", "Live Music", "Outdoor Bar"],
        result: "drinky"
    },
    {
        title: "What kind of drinks do you like?",
        choices: ["Liquor", "Beer", "Wine", "Non-Alcoholic Beverages", "Milkshakes"],
        result: "drinky"
    }
];

var eventQuestions = [
    {
        title: "What is your go-to event?",
        choices: ["Concert", "Sports", "Comedy", "Shows"],
        result: "eventr"
    },
];

var foodQuestions = [
    {
        title: "What type of dish do you prefer",
        choices: ["Appetizer","Breakfast","Lunch","Dinner","Dessert","No-Preference"],
        result: "food"
    },
    {
        title: "Any dietary preferences",
        choices: ["Meat","Vegetarian","gluten-free","No-Preference"],
        result: "food"
    }
];


