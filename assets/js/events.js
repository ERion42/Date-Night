var APIkey = "8oITwJQfLQI4isaAPt8K8RrTGpvcOYFv";
// // var location = document.getElementById("zipcode").value;
var dateDay = timeOfYear.format("YYYY-MM-DDTHH:mm:ssZ");
console.log(dateDay);
var dateDayEnd = moment().add(1,"days");
var dateDay2 = dateDayEnd.format("YYYY-MM-DDTHH:mm:ssZ");


// If Concert with no genre:
var getConcertData = function() {
    fetch("https://enigmatic-citadel-24557.herokuapp.com/https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&city=Atlanta&segmentId=KZFzniwnSyZfZ7v7nJ&startDateTime="+dateDay+"&endDateTime="+dateDay2+"&apikey=8oITwJQfLQI4isaAPt8K8RrTGpvcOYFv")
    .then(response=> response.json())
    .then(data => test(data))
}
getConcertData();

function test(data) {
    console.log(data)
    var num = Math.floor(Math.random()*data._embedded.events.length);
    console.log(num);
    var name = data._embedded.events[num].name;
    
    console.log(name)
}
// If sports with no genre:

// var sports = fetch("https://enigmatic-citadel-24557.herokuapp.com/https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&city=Atlanta&segmentId=KZFzniwnSyZfZ7v7nE&startDateTime="+dateDay+"&endDateTime="+dateDay2+"&apikey=8oITwJQfLQI4isaAPt8K8RrTGpvcOYFv")
// .then(res=> console.log(res.json()))
// .then(data => console.log(data));


// If Comedy:

// var comedy = fetch("https://enigmatic-citadel-24557.herokuapp.com/https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&city=Atlanta&keyword=comedy&startDateTime="+dateDay+"&endDateTime="+dateDay2+"&apikey=8oITwJQfLQI4isaAPt8K8RrTGpvcOYFv")
// .then(res=> console.log(res.json()))
// .then(data => console.log(data));


// If theater

// var theater = fetch("https://enigmatic-citadel-24557.herokuapp.com/https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&city=Atlanta&segmentId=KZFzniwnSyZfZ7v7na&startDateTime="+dateDay+"&endDateTime="+dateDay2+"&apikey=8oITwJQfLQI4isaAPt8K8RrTGpvcOYFv")
// .then(res=> console.log(res.json()))
// .then(data => console.log(data));



// if (eventA[1] == "concert") {
    // var i = Math.floor(Math.random()*concert.data._embedded.events.length);
    // var concertEvent=concert.embedded.events[i].ticketing.url;
    // console.log(concertEvent);
    