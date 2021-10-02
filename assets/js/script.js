//Declaring global variables for the Google Maps API
var mapsAPIKeySuffix = '&key=AIzaSyC8ckXor6hYs94Ot5UefJcP4kyMtrf-578';
var mapsAPIUrlPrefix = 'https://maps.googleapis.com/maps/api/';
var hostUrl = 'https://enigmatic-citadel-24557.herokuapp.com/';
var lat;
var lng;
var latlng;
var geocodeUrl;

//This function takes the address entered into the form and encodes it so it can be appended to the URL. It then generates the geocode URL which returns a results object that contains the location data (latitude and longitude). The lat and lng are set which allows the places nearby search to be run. 
var geocodeAddress = function(address){

    var addressArr = address.split(' ');
    var addressEncoded = addressArr.join('%20');
    localStorage.setItem('addressURLInput', addressEncoded);
    geocodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + addressEncoded + mapsAPIKeySuffix;

    //Fetch user location information and encode it for the URL
   $.ajax(geocodeUrl).then(function(results){
       lat = results.results[0].geometry.location.lat;
       lng = results.results[0].geometry.location.lng;
        var latlng = lat + '%2C' + lng;
        localStorage.setItem('location', latlng);
   }).then(searchMultiple());
};

//Event listener for the address form submit button. Calls geocodeAddress function.
$('form').submit(function(event){
    event.preventDefault();
    var address = ($('#address').val());
    geocodeAddress(address);
    console.log(address);
});

//This function creates an array and adds search terms based on user input. It then calls the recrsiveFetch function to fetch the maps results (up to 20 results for each) of each location type which saves the results into local storage. Then it loops through each location type in the dateOptions array and calls the parseMapsData function to get 3 random options for each one.
var searchMultiple = function(){
    var dateOptions = [];
	
    var goingOut = localStorage.getItem('goingB');
	var i =0;
    var searchBars = localStorage.getItem('drinkB');
    var searchTheaters = localStorage.getItem('movieB');
    var searchRestaurants = localStorage.getItem('foodB');
    var searchActive = localStorage.getItem('activeB'); 
    //Checks boolean value of user inputs and pushes search criteria into dateOptions array if true. Calls the fetch and parse functions only if true.
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
    
    	//pulls user location info from localStorage to put into the search URL 
    	latlng = localStorage.getItem('location');

		//Fetch maps data
		recrsiveFetch(dateOptions, i, latlng)

		//loop through dateOptions array and calls parseMapsData for each index value
		for (i=0; i<dateOptions.length; i++){
			parseMapsData(dateOptions[i]);
		}
	}
}

//This function takes 3 parameters: the dateOptions array, an index variable i initialized to 0, and latlng. Each value in the dateOptions array will individually be input into the fetch URL as the search term and the result will be saved in localStorage with the search term as the key value. This is done with a recursive function because the fetch requests are asynchronus and with a for loop the loop completes before the fetches. The led to only the last result being saved in localStorage.
function recrsiveFetch(dateOptions,i, latlng){

	if(i<dateOptions.length){
		var query = dateOptions[i];
		var mapsAPIUrl = 'https://enigmatic-citadel-24557.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?location=' + latlng + '&radius=15000&query=' + query + '&key=AIzaSyC8ckXor6hYs94Ot5UefJcP4kyMtrf-578';
	
		console.log(mapsAPIUrl);
		fetch(mapsAPIUrl).then(function(response){
			if(response.ok){
				response.json().then(function(data){
				console.log(data);
				localStorage.setItem(query, JSON.stringify(data))
				});
				i++;
				recrsiveFetch(dateOptions, i, latlng);
			};
		}) 
	}
}

//This function takes a parameter of the location type (e.g. bar, restaurant, etc.) and checks if it exists in local storage. If it exists it will loop through each of the results (which max out at 20) and pull 3 at random. Initially this was occasionally grabbing duplicates. To address this I used an if statement that checks the previous index value and the new index value defined in the loop. If the new value is equal to the old value the function calls itself recursively. This will repeat as many times as necessary to return novel values. Every time the function is called it will reinitialize the array to clear it so it will always return exactly three different results. 
var previousIndex = 0;
var index = 0;
function parseMapsData(keyname){
	if (localStorage.getItem(keyname)){
		var arr = [];
		for (var i=0; i <3; i++){
			var restaurantData = JSON.parse(localStorage.getItem(keyname));
			previousIndex = index;
			index = Math.floor(Math.random() * restaurantData.results.length);
			 
			 if (previousIndex === index){
				 return parseMapsData(keyname);
			 }else{
                arr.push(restaurantData.results[index])
				var option = JSON.stringify(arr);
				localStorage.setItem('keyword'+i, option);   
			 }
		}
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
var randM = Math.floor(Math.random()*7)
console.log(randM)
function init(){

	if(stayingB == "true"){
		if((foodB == "true")&&(movieB == "true")){
			return foodData(),movieData()
		}
		else if(foodB == "true"){
			return foodData()
		} else if(movieB == "true"){
		 return movieData();
		} else {
			console.log('try harder')
		}
		
	} else if (goingB == "true"){
		
		$('.locationSearch').toggleClass('hide')
		console.log('bye')
	}
}






































function placeHolderDates(){
	$('.accordianContent').each(function(){
		$(this).children('h2').text(miscArray[1])
	})
	
}



function movieData(){
	console.log(movieA)
	var serviceU = (movieA[0])
	var service = serviceU.toLowerCase()
	console.log(service)
	if (movieA[1] == "Mystery/Crime"){
		var genreCode = '80'
		movieRequest(service,genreCode)
	} 
	if (movieA[1] == "Comedy"){
		var genreCode = '35'
		movieRequest(service, genreCode)
	}
	if (movieA[1] == "Horror"){
		console.log('boo')
		var genreCode = '27'
		movieRequest(service, genreCode)
	}
	if (movieA[1] == "Fantasy"){
		var genreCode = '14'
		movieRequest(service, genreCode)
	}
	if (movieA[1]=="Drama"){
		var genreCode = '18'
		movieRequest(service, genreCode)
	}
}

function foodData(){
	if ((foodA[0]=="No-Preference")&&(foodA[1]=="No-Preference")){
		var tags = food1 +","+ food2
		foodRequest(tags)
	}
	if(foodA[0]=="No-Preference"){
		var food1 = ""
		var tags = food1+ "," + foodA[1].toLowerCase()

	}
	if(foodA[1]=="No-Preference"){
		var food2 = ""
		var tags = foodA[0].toLowerCase() +","+food2
		foodRequest(tags)
	} else {
	var tags = foodA[0].toLowerCase()+","+ foodA[1].toLowerCase()
	foodRequest(tags)
	}
}

function writeFood(f){
	console.log(f.recipes[0].title)
	console.log(f.recipes[0].image)
	console.log(f.recipes[0].readyInMinutes)
	$('#option1I').attr('src', f.recipes[0].image)
	$('#option1H').text(f.recipes[0].title)
	$('#option1P1').text("Ready in "+f.recipes[0].readyInMinutes+" minutes")
	$('#option1P2').text("Makes " + f.recipes[0].servings+ " servings")
	$('#option1P3').empty()
	$('#option1A').text("Here is a link to the recipe").attr('href',f.recipes[0].sourceUrl)
}
function writeMovie(m){
	console.log(m.results[randM].title)
	$('#option2H').text(m.results[randM].title)
	$('#option2I').attr('src',m.results[randM].posterURLs.original)
	$('#option2P1').text(m.results[randM].runtime+" minutes")
	$('#option2P2').empty()
	$('#option2P3').empty()
}

function foodRequest (tags){
fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=" + tags + "&number=1", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "6a33845cedmshfe3c200548f27bfp1afb9ejsne55a61a48c4b"
	}
})
.then(response => response.json())
.then(data => writeFood(data));
}

function movieRequest (service,genreCode){

fetch("https://streaming-availability.p.rapidapi.com/search/basic?country=us&service="+service+"&type=movie&genre="+ genreCode, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "streaming-availability.p.rapidapi.com",
		"x-rapidapi-key": "6a33845cedmshfe3c200548f27bfp1afb9ejsne55a61a48c4b"
	}
})
.then(response => response.json())
.then(data => writeMovie(data))
// 4: musical, 12: Adventure, 14: fantasy, 18: Drama, 27: Horror, 28: Action, 35: Comedy, 80: Crime, 878: Science fiction, 10749: Romance.
}
init()
