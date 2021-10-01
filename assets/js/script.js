// Place search test URL
// ';

//Text Search Test URL
// 'https://enigmatic-citadel-24557.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?location=' + latlng + '&radius=15000&query=' + addressEncoded + '&inputtype=textquery&key=AIzaSyC8ckXor6hYs94Ot5UefJcP4kyMtrf-578';

// Place search test URL
// 'https://enigmatic-citadel-24557.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?&fields=name%20type&locationbias=circle:15000@' + latlng + '&inputtype=textquery&key=AIzaSyC8ckXor6hYs94Ot5UefJcP4kyMtrf-578';


//Declaring global variables for the Google Maps API
var mapsAPIKeySuffix = '&key=AIzaSyC8ckXor6hYs94Ot5UefJcP4kyMtrf-578';
var mapsAPIUrlPrefix = 'https://maps.googleapis.com/maps/api/';
var hostUrl = 'https://enigmatic-citadel-24557.herokuapp.com/';
// fetch(hostUrl + YOUR_URL + parameters
var lat;
var lng;
var latlng;
var geocodeUrl;
var spaceEncode = '%20';
var commaEncode = '%2C';
var allTypes = '&amusement_park%20campground%20park%20%20zoo%20aquarium%20art_gallery%20bowling_alley%20casino%20library%20museum%20tourist_attraction%20bar%20casino%20night_club%20bakery%20cafe%20restaurant%20movie_theater%20';


//This function takes the address entered into the form and encodes it so it can be appended to the URL. It then generates the geocode URL which returns a results object that contains the location data (latitude and longitude). The lat and lng are set which allows the places nearby search to be run. 
var geocodeAddress = function(address){

    var addressArr = address.split(' ');
    var addressEncoded = addressArr.join('%20');
    localStorage.setItem('addressURLInput', addressEncoded);
    geocodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + addressEncoded + mapsAPIKeySuffix;
    console.log(geocodeUrl);

   $.ajax(geocodeUrl).then(function(results){
       console.log(results);
       lat = results.results[0].geometry.location.lat;
       lng = results.results[0].geometry.location.lng;
       console.log(lat);
       console.log(lng);
        var latlng = lat + '%2C' + lng;
        localStorage.setItem('location', latlng);
   }).then(searchMultiple());

};
https://enigmatic-citadel-24557.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbySearch/json?&location=33.7489954.-84.3879824&radius=15000&key=AIzaSyC8ckXor6hYs94Ot5UefJcP4kyMtrf-578

//Event listener for the address form submit button. Calls geocodeAddress function.
$('form').submit(function(event){
    event.preventDefault();
    var address = ($('#address').val());
    geocodeAddress(address);
    console.log(address);
});

//Empty initMap function to stop getting errors on page load because of the callback in the googleapis link in the html
var initMap = function (){
    console.log('initMap callback');
};


var searchMultiple = function(){
    var dateOptions = [];
    var goingOut = localStorage.getItem('goingB');
    console.log(goingOut);
    var searchBars = localStorage.getItem('drinkB');
    var searchTheaters = localStorage.getItem('movieB');
    var searchRestaurants = localStorage.getItem('foodB');
    var searchActive = localStorage.getItem('activeB'); 
    //Checks boolean value of user inputs and pushes search criteria into dateOptions array if true
    if(goingOut === 'true'){
            if(searchBars === 'true'){
                dateOptions.push('bar');
                dateOptions.push('night_clubs');
            }
            if(searchTheaters === 'true'){
                dateOptions.push('movie_theater');
            }
            if(searchRestaurants === 'true'){
                dateOptions.push('restaurant');
                dateOptions.push('cafe');
            }
            if(searchActive === 'true'){
                dateOptions.push('park');
                dateOptions.push('zoo');
                dateOptions.push('museum');
                dateOptions.push('tourist_attraction');
                dateOptions.push('aquarium');
                dateOptions.push('bowling_alley');
            }
        console.log(dateOptions);
    }
    //pulls user location info and an encoded address from localStorage to put into the search URL 
    latlng = localStorage.getItem('location');
    var addressEncoded = localStorage.getItem('addressInputEncoded');
    
    //loops through dataOptions array and makes a fetch for each index
    for (var i = 0; i < dateOptions.length; i++) {
        var query = dateOptions[i];

        var mapsAPIUrl = 'https://enigmatic-citadel-24557.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?location=' + latlng + '&radius=15000&query=' + query + '&key=AIzaSyC8ckXor6hYs94Ot5UefJcP4kyMtrf-578';

        console.log(mapsAPIUrl);
        fetch(mapsAPIUrl).then(function(response){
            if(response.ok){
                response.json().then(function(data){
                console.log(data);
                
                });
            };
        })   
    }
}

var generalA = JSON.parse(localStorage.getItem("general"))
var foodA = JSON.parse(localStorage.getItem("food"))
var activeA = JSON.parse(localStorage.getItem("active"))
var goingA = JSON.parse(localStorage.getItem("goingO"))
var eventA = JSON.parse(localStorage.getItem("event"))
var drinkA = JSON.parse(localStorage.getItem("drink"))
var movieA = JSON.parse(localStorage.getItem("movie"))
var stayingB = localStorage.getItem('stayingB')
var goingB = localStorage.getItem('goingB')
var activeB = localStorage.getItem('activeB')
var movieB = localStorage.getItem('movieB')
var foodB = localStorage.getItem('foodB')
var eventB = localStorage.getItem('eventB')
var drinkB = localStorage.getItem('drinkB')
































function movieData(){

}

function foodData(){

}



function foodRequest (){
fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=" + tags + "&number=1", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "6a33845cedmshfe3c200548f27bfp1afb9ejsne55a61a48c4b"
	}
})
.then(response => response.json())
.then(data => console.log(data));
}

function movieRequest (){
fetch("https://streaming-availability.p.rapidapi.com/search/basic?country=us&service="+service+"&type=movie&genre="+ genreCode, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "streaming-availability.p.rapidapi.com",
		"x-rapidapi-key": "6a33845cedmshfe3c200548f27bfp1afb9ejsne55a61a48c4b"
	}
})
.then(response => response.json())
.then(data => console.log(data))
// 4: musical, 12: Adventure, 14: fantasy, 18: Drama, 27: Horror, 28: Action, 35: Comedy, 80: Crime, 878: Science fiction, 10749: Romance.
 }
