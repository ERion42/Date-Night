var timeOfYear = moment ()
var seasons = timeOfYear.format("MMMM");

var questions = [
    {
        title: "Would you prefer to go out or stay in?",
        choices: ["Go out", "Stay in"]
    },
    {
        title: "What time of day will this take place?",
        choices: ["Morning","Midday", "Afternoon", "Night"]
    },
    {
        title: "How long do you have for the date?",
        choices: ["1-3 hours", "3-6 hours","6-9 hours","No Limit"]
    },
    {
        title: "What is your ideal Friday night?",
        choices: ["Lazy night in.", "Party!", "Going to an event.","Game night!", "Get some food and drinks."]
    },
    {
        title: "What is your budget?",
        choices: ["Free only please", "$", "$$", "$$$", "Absolutely down to ball out tonight"]
    },
    {
        title: "What is your go to on the TV?",
        choices: ["Sports", "Reality TV", "Mystery/Crime", "Comedy", "Horror"]
    },
    {
        title: "What do you want the mood for the date to be?",
        choices: ["Active", "Lazy", "Romantic", "Spontaneous"]
    },
    {
        title: "How many people are you comfortable with being around in public?",
        choices: ["No people", "Small groups (max of 30)", "Larger groups (max of 100)", "I love crowds!"]
    }
];