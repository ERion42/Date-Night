var APIkey = "8oITwJQfLQI4isaAPt8K8RrTGpvcOYFv";
// var location = document.getElementById("zipcode").value;
var dateDay = timeOfYear.format("YYYY-MM-DDTHH:mm:ssZ");
console.log(dateDay);
var dateDayEnd = moment().add(1,"days");
var dateDay2 = dateDayEnd.format("YYYY-MM-DDTHH:mm:ssZ");

console.log(eventB)

if (eventB=="true"){

	eventData();
    
    // Setting variables for the event names.
    
    if (eventA[0]=="Concert") {
        var eventName = "Concert Events";
    } else if (eventA[0]=="Sports") {
        var eventName = "Sports Events";
    } else if (eventA[0]=="Comedy") {
        var eventName = "Comedy Shows";
    } else if(eventA[0]=="Shows") {
        var eventName = "shows";
    } 
    
} 
// Function for selecting which event to search and plugging that parameter into the fetch URL.

function eventData() {
    if (eventA[0]=="Concert") {
        console.log(eventA[0]);
        var genreParameters= "segmentId=KZFzniwnSyZfZ7v7nJ";
        $("#option5H").append("Go to a Concert");
    } else if (eventA[0]=="Sports") {
        var genreParameters= "segmentId=KZFzniwnSyZfZ7v7nE";
        $("#option5H").append("Go to a Sports Event");
    } else if (eventA[0]=="Comedy") {
        var genreParameters= "keyword=comedy";
        $("#option5H").append("Go to a Comedy Show");
    } else if (eventA[0]=="Shows") {
        var genreParameters= "segmentId=KZFzniwnSyZfZ7v7nJ";
        $("#option5H").append("Go to a Show");
    }
    
    fetch("https://enigmatic-citadel-24557.herokuapp.com/https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&city=Atlanta"+genreParameters+ "&startDateTime="+dateDay+"&endDateTime="+dateDay2+"&apikey=8oITwJQfLQI4isaAPt8K8RrTGpvcOYFv")
    .then(response=> response.json())
    .then(data => eventList(data))
}



function eventList(data) {
    console.log(data);
// If no events of that genre, the user can choose a different kind of event, or no event option.
    if (data.page.totalElements==0){ 
        
        fetch("https://enigmatic-citadel-24557.herokuapp.com/https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&city=Atlanta&startDateTime="+dateDay+"&endDateTime="+dateDay2+"&apikey=8oITwJQfLQI4isaAPt8K8RrTGpvcOYFv")
        .then(response=> response.json())
        .then(data => eventList2(data))

        function eventList2(data) {
            console.log(data);
            var num = Math.floor(Math.random()*data._embedded.events.length);
            var imageURL = data._embedded.events[num].images[6].url;
            if ("outlets" in data._embedded.events[num]) {
                var ticketPurcharURL = data._embedded.events[num].outlets[0].url;
            } else{
            var ticketPurcharURL = data._embedded.events[num].url;
            }
        $("#option5I").attr("src",imageURL);
        $('#option5P1').append("There are no "+ eventName + " occuring today. Instead, we have randomly chosen an event for you if you feel spontaneous enough. :)")
        $('#option5P2').append(data._embedded.events[num].name);
        $('#ticketPurchase').attr("href", ticketPurcharURL);
        }

    } else {
    var num = Math.floor(Math.random()*data._embedded.events.length);
    console.log(num);
    var dayOfEvent = data._embedded.events[num].dates.start.localDate;
    var timeOfEvent = data._embedded.events[num].dates.start.localTime;
    var imageURL = data._embedded.events[num].images[6].url;
    if ("outlets" in data._embedded.events[num]) {
        var ticketPurcharURL = data._embedded.events[num].outlets[0].url;
    } else{
    var ticketPurcharURL = data._embedded.events[num].url;
    }
    console.log(ticketPurcharURL);
    $("#option5I").attr("src",imageURL);
    $('#option5P1').append(data._embedded.events[num].name);
    $('#option5P2').append("Date and Time: "+dayOfEvent+" at " +timeOfEvent);
    $('#ticketPurchase').attr("href", ticketPurcharURL);
}}


if (activeB=="true") {
    if (goingB!="true") {
        if (activeA[0]=="Light Activity") {
            if (activeA[1]=="Art") {
                var theActivities = [
                {
                    activity: "Paint on a canvas.",
                    img: "./assets/img/arts.jpg"
                },
                { 
                    activity: "Draw a short cartoon story.",
                    img: "./assets/img/arts.jpg"
                },
                {
                    activity: "Write a short story and switch authors every two sentences.",
                    img: "./assets/img/arts.jpg"
                }]
                }
            if (activeA[1]=="Adventure") 
            var theActivities = [
                {
                    activity: "Look through old photo albums",
                    img: "./assets/img/adventure.jpg" 
                },
                {
                    activity: "60 seconds to go find the funniest object that starts with a specific letter of the alphabet.  Repeat as many times as you'd like.",
                    img: "./assets/img/adventure.jpg"
                }]
            if (activeA[1]=="Fitness") 
            var theActivities = [
                {
                    activity: "Stretch Together",
                    img: "./assets/img/fitness.jpg" 
                },
                {
                    activity: "Light Partner Yoga",
                    img: "./assets/img/fitness.jpg"
                }]
            if (activeA[1]=="Logic") 
            var theActivities = [
                {
                    activity: "Do a puzzle",
                    img: "./assets/img/logic.jpg" 
                },
                {
                    activity: "Play Chess/Checkers",
                    img: "./assets/img/logic.jpg"
                }]   
            }
        if (activeA[0]=="Moderate Activity") {
            if (activeA[1]=="Art") {
                var theActivities = [
                {
                    activity: "Perform a short skit.",
                    img: "./assets/img/arts.jpg"
                },
                { 
                    activity: "Play charades.",
                    img: "./assets/img/arts.jpg"
                }]
                }
            if (activeA[1]=="Adventure") 
            var theActivities = [
                {
                    activity: "Build a fort",
                    img: "./assets/img/adventure.jpg" 
                },
                {
                    activity: "Play hide and seek - no matter your age :)",
                    img: "./assets/img/adventure.jpg"
                }]
            if (activeA[1]=="Fitness") 
            var theActivities = [
                {
                    activity: "Learn how to dance! Check out some partner dance tutorials.",
                    img: "./assets/img/fitness.jpg" 
                },
                {
                    activity: "Moderate Partner Yoga",
                    img: "./assets/img/fitness.jpg"
                }]
            if (activeA[1]=="Logic") 
            var theActivities = [
                {
                    activity: "Play a board game",
                    img: "./assets/img/logic.jpg" 
                },
                {
                    activity: "Play twister.",
                    img: "./assets/img/logic.jpg"
                }]   
            }
       if (activeA[0]=="Lots of Activity- Bring on the sweat") {
           if (activeA[1]=="Art") {
               var theActivities = [
               {
                   activity: "Make a short film- genre must include both romance and action.",
                   img: "./assets/img/arts.jpg"
               },
               { 
                   activity: "Write, direct, and perform a play for each other.",
                   img: "./assets/img/arts.jpg"
               }]
               }
           if (activeA[1]=="Adventure") 
           var theActivities = [
               {
                   activity: "Play hide and seek but with a twist.  Turn out the lights!",
                   img: "./assets/img/adventure.jpg" 
               },
               {
                   activity: "Take all your cushions, pillows, and blankets and play the ground is lava.",
                   img: "./assets/img/adventure.jpg"
               }]
           if (activeA[1]=="Fitness") 
           var theActivities = [
               {
                   activity: "Look up 'Dance Dance Revolution' videos and try to get the footwork down.",
                   img: "./assets/img/fitness.jpg" 
               },
               {
                   activity: "Look up 'Just Dance Duet Videos' and perform the dances together.",
                   img: "./assets/img/fitness.jpg"
               }]
           if (activeA[1]=="Logic") 
           var theActivities = [
               {
                   activity: "Do a puzzle",
                   img: "./assets/img/logic.jpg" 
               },
               {
                   activity: "Play Chess/Checkers",
                   img: "./assets/img/logic.jpg"
               }]   
           }
        }
        var numActivities = Math.floor(Math.random()*theActivities.length);
        runTheActivities();
}

function runTheActivities() {
    $("#option1I").attr("src",theActivities[numActivities].img);
    $('#option1H').append(theActivities[numActivities].activity);
}



