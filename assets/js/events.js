var APIkey = "8oITwJQfLQI4isaAPt8K8RrTGpvcOYFv";
// // var location = document.getElementById("zipcode").value;
var dateDay = timeOfYear.format("YYYY-MM-DDTHH:mm:ssZ");
console.log(dateDay);
var dateDayEnd = moment().add(1,"days");
var dateDay2 = dateDayEnd.format("YYYY-MM-DDTHH:mm:ssZ");

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
    
    fetch("https://enigmatic-citadel-24557.herokuapp.com/https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&city=Atlanta&"+genreParameters+"&startDateTime="+dateDay+"&endDateTime="+dateDay2+"&apikey=8oITwJQfLQI4isaAPt8K8RrTGpvcOYFv")
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
        }
        $("#option5Dropdown").append("Event");
        $('#option5P1').append("There are no "+ eventName + " occuring today. Please click on the link below to see all occuring events.")
        $('#option5P1').append(
        $("#option5P3").toggleClass("hide");
    } else {
    var num = Math.floor(Math.random()*data._embedded.events.length);
    console.log(num);
    var dayOfEvent = data._embedded.events[num].dates.start.localDate;
    // console.log(dayOfEvent);
    // Date.getDate();
    var timeOfEvent = data._embedded.events[num].dates.start.localTime;
    // timeOfEvent.getHour();
    // console.log(dayOfEvent);
    // console.log(timeOfEvent);
    // var eventTime = moment(timeOfEvent).format("h:m A");
    // var eventDate = moment(dayOfEvent).format("MMMM D, YYYY");
    // }
    var imageURL = data._embedded.events[num].images[6].url;
    var ticketPurcharURL = data._embedded.events[num].outlets.url;
    console.log(ticketPurcharURL);
    $("#option5I").attr("src",imageURL);
    $('#option5P1').append(data._embedded.events[num].name);
    $('#option5P2').append("Date and Time: "+dayOfEvent+" at " +timeOfEvent);
    $('#ticketPurchase').attr("href", ticketPurcharURL);
}
