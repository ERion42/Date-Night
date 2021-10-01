// 'https://enigmatic-citadel-24557.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&key=AIzaSyC8ckXor6hYs94Ot5UefJcP4kyMtrf-578';

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
//var locationAndRadius = '&location=' + lat + '%20' + lng + '&radius=15000&types='

'https://enigmatic-citadel-24557.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?&fields=name%20type&locationbias=circle:15000@' + latlng + '&inputtype=textquery&key=AIzaSyC8ckXor6hYs94Ot5UefJcP4kyMtrf-578';

var searchTypes = function(){
    /*
amusement_park
aquarium
art_gallery
atm
bakery
bar
book_store
bowling_alley
cafe
campground
casino
cemetery
florist
library
movie_rental
movie_theater
museum
night_club
park
pet_store
restaurant
shopping_mall
tourist_attraction
zoo
    */
//    var outdoorActivities = 'amusement_park%20campground%20park%20%20zoo%20';
//    var goOutAfternoonActivities = 'aquarium%20art_gallery%20bowling_alley%20casino%20library%20museum%20tourist_attraction%20';
//    var goOutNightActivities = 'bar%20casino%20night_club%20';
//    var eatOut = 'bakery%20cafe%20restaurant%20';
//    var goToTheMovies = 'movie_theater%20';
// var allTypes = 'amusement_park%20campground%20park%20%20zoo%20aquarium%20art_gallery%20bowling_alley%20casino%20library%20museum%20tourist_attraction%20bar%20casino%20night_club%20bakery%20cafe%20restaurant%20movie_theater%20'
}

//This function takes the address entered into the form and encodes it so it can be appended to the URL. It then generates the geocode URL which returns a results object that contains the location data (latitude and longitude). The lat and lng are set which allows the places nearby search to be run.
var geocodeAddress = function(address){

    var addressArr = address.split(' ');
    var addressEncoded = addressArr.join('%20');
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
   }).then(searchNearby());

};
https://enigmatic-citadel-24557.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbySearch/json?&location=33.7489954.-84.3879824&radius=15000&key=AIzaSyC8ckXor6hYs94Ot5UefJcP4kyMtrf-578

//Event listener for the address form submit button. Calls geocodeAddress function.
$('form').submit(function(event){
    event.preventDefault();
    var address = ($('#address').val());
    geocodeAddress(address);
});

var initMap = function (){

}
//Test fetch for google maps data. This test uses the cors anywhere address prepended to the url in order to avoid triggering cors due to the local host address. The test worked. 
var searchNearby = function(){
    latlng = localStorage.getItem('location', latlng);
    console.log(latlng);
    var mapsAPIUrl = 'https://enigmatic-citadel-24557.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=name%2Ctype&locationbias=circle:15000@' + latlng + '&inputtype=textquery&key=AIzaSyC8ckXor6hYs94Ot5UefJcP4kyMtrf-578';
    // mapsAPIUrlPrefix + mapsAPIKeySuffix;
    console.log(mapsAPIUrl);
    fetch(mapsAPIUrl).then(function(response){
        if(response.ok){
            response.json().then(function(data){
                console.log(data);
                
            });
        };
    });
};

// getPlaces();




















var tags = "meat,appetizer"
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
