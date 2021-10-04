//Declaring global variables from user input
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
var timeOfDay = localStorage.getItem('timeOfDay');
console.log(drinkA);
//Declaring global variables for the Google Maps API
var mapsAPIKeySuffix = '&key=AIzaSyC8ckXor6hYs94Ot5UefJcP4kyMtrf-578';
var mapsAPIUrlPrefix = 'https://maps.googleapis.com/maps/api/';
var hostUrl = 'https://enigmatic-citadel-24557.herokuapp.com/';

//This function takes the address entered into the form and encodes it so it can be appended to the URL. It then generates the geocode URL which returns a results object that contains the location data (latitude and longitude). The lat and lng are set which allows the places nearby search to be run. 
var geocodeAddress = function(address){

    var addressArr = address.split(' ');
    var addressEncoded = addressArr.join('%20');
    localStorage.setItem('addressURLInput', addressEncoded);
    var geocodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + addressEncoded + mapsAPIKeySuffix;

    //Fetch user location information and encode it for the URL
   $.ajax(geocodeUrl).then(function(results){
       var lat = results.results[0].geometry.location.lat;
       var lng = results.results[0].geometry.location.lng;
        var latlng = lat + '%2C' + lng;
        localStorage.setItem('location', latlng);
   }).then(searchMultiple());
};

//Event listener for the address form submit button. Calls geocodeAddress function.
$('form').submit(function(event){
    event.preventDefault();
    var address = ($('#address').val());
    geocodeAddress(address);
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
				if(drinkA[0] === 'Bars'){
					dateOptions.push('bar');
				}else if((drinkA[0] === 'Night Clubs') && (timeOfDay === 'Night')){
					dateOptions.push('night_club');
				}                
            }
            if(searchTheaters === 'true'){
                dateOptions.push('movie_theater');
            }
            if(searchRestaurants === 'true'){
				if(timeOfDay === 'Day'){
					dateOptions.push('cafe');
				}else if(timeOfDay === 'Night'){
					dateOptions.push('restaurant');	
				}
            }
            if(searchActive === 'true'){
                if((goingA[1] === 'Indoor') && (timeOfDay === 'Day')){
					dateOptions.push('museum');
					dateOptions.push('aquarium');
					dateOptions.push('bowling_alley');
				}else if((goingA[1] === 'Outdoor') && (timeOfDay === 'Night')){
					dateOptions.push('park');
                	dateOptions.push('zoo');                
                	// dateOptions.push('tourist_attraction');
				}else if((goingA[1] === 'Indoor') && (timeOfDay === 'Night')){
					dateOptions.push('bowling_alley');
				}else{
					console.log("Sorry, we can't find any outside nighttime activities.")
				}    
            }
			/*
			Changes to the questions:
			
			Change time of day to either day or night needs to be one or the other. This will help reduce the number of fetches. E.g. cafe for day, restaurant for night. Also, if night is chosen it will necessarily cut almost all of the activities out. Museums, aquariums, and zoos are not open at night. At the moment the only realistic night activity I can get is bowling alleys.
			
			Remove type of drink question and change "What's your scene" to only include bar or night club. If possible only show if "get drinks" is selected.
			
			Remove "No Preference" option on Indoor/Outdoor question. This question pares down the biggest set of fetches, with no preference it will make too many fetches all at once.

			The "What's your budget" question is proving difficult to use. I'm getting price data but selecting output based on that data is difficult.

			I have no way to use the "What do you want your activity to be?" question. I don't know if anyone else does.  

			The "What's your favorite out of the following:" probably needs to be removed for now. I don't have any way to use it.

			The "How many people are you comfortable being around in public?" question probably needs to be removed as well.

			If possible only show food and movie questions if stay indoors is selected.
			 */
        console.log(dateOptions);
    
    	//pulls user location info from localStorage to put into the search URL 
    	var latlng = localStorage.getItem('location');

		//Fetch maps data
		recrsiveFetch(dateOptions, i, latlng);

		//loop through dateOptions array and calls parseMapsData for each element
		for (i=0; i<dateOptions.length; i++){
			parseMapsData(dateOptions[i]);
		}
	}
}

//Text search url, I've been switching between this and 
// var mapsAPIUrl = 'https://enigmatic-citadel-24557.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?location=' + latlng + '&radius=15000&query=' + query + '&key=AIzaSyC8ckXor6hYs94Ot5UefJcP4kyMtrf-578';

//This function takes 3 parameters: the dateOptions array, an index variable i initialized to 0, and latlng. Each value in the dateOptions array will individually be input into the fetch URL as the search term and the result will be saved in localStorage with the search term as the key value. This is done with a recursive function because the fetch requests are asynchronus and with a for loop the loop completes before the fetches. The led to only the last result being saved in localStorage.
function recrsiveFetch(dateOptions,i, latlng){

	if(i<dateOptions.length){
		var query = dateOptions[i];
		var mapsAPIUrl = 'https://enigmatic-citadel-24557.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + latlng + '&radius=15000&keyword=' + query + '&key=AIzaSyC8ckXor6hYs94Ot5UefJcP4kyMtrf-578';
	
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

//This function takes a parameter of the location type (e.g. bar, restaurant, etc.) and checks if it exists in local storage. If it exists it will loop through each of the results (which max out at 20) and pull 3 at random. Initially this was occasionally grabbing duplicates. To address this I used an if statement that checks the previous index value and the new index value defined in the loop. If the new value is equal to the old value the function calls itself recursively (it will make at least one recursive call as both values are initially 0). This will repeat as many times as necessary to return novel values. Every time the function is called it will reinitialize the array to clear it so it will always return exactly three different results. The 3 random results are saved to local storage with an incrementing key name (e.g. bar0, bar1, bar2).
var previousIndex = 0;
var index = 0;
function parseMapsData(keyname){
	// if (localStorage.getItem(keyname)){

		var arr = [];

				for (var i=0; i <3; i++){
					var queryData = JSON.parse(localStorage.getItem(keyname));
					previousIndex = index;
					index = Math.floor(Math.random() * queryData.results.length);

					//checks if the query has zero results and removes the local storage key if true. This is to prevent a stack overflow. It then recursively calls the function.
					if(queryData.status === 'ZERO_RESULTS'){
						console.log("Sorry, we didn't find any results for " + keyname);
						localStorage.removeItem(keyname);
						console.log(queryData);
						return parseMapsData(keyname);
					
					}else if(previousIndex === index){
				 		return parseMapsData(keyname);

					//The following elseif statement checks to see if the next result is undefined (in case fewer than 3 but more than 0 results were found). If so, it sets i equal to 3 which should trigger the call for the recursive function with the next keyname. This allows for existing results to be added to local storage without repeats.
					}else if(queryData.results[i] === undefined){
						console.log("The search for " + keyname + " returned limited results.")
						i=3;		
					}else{


						arr.push(queryData.results[index])
						var option = JSON.stringify(arr[i]);
						localStorage.setItem(keyname + i, option);

					}
			
		}	
		// }

	}


function displayMapsData(dateOptions, keyname){
	var arr = [];
	for(var i = 0; i < 3; i){
		var queryData = JSON.parse(localStorage.getItem(keyname+i));
		var name = queryData.name;
		var address = queryData.formatted_address;
		rating = queryData.rating;
		if(queryData.price_level !== null){
			priceLevel = queryData.price_level;
		}
		dateOptions[i]
		arr.push(localStorage.getItem(keyname+i))	
	}
	
}

if (eventB == "true"){	
	$('.locationSearch').toggleClass('hide')
}

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

if (drinkB == 'false'){
	$('.accordion4').toggleClass('hide')
}
if (movieB == 'false'){
	$('.accordion3').toggleClass('hide')
}
if (foodB == 'false'){
	$('.accordion2').toggleClass('hide')
}
if (activeB == 'false'){
	$('.accordion1').toggleClass('hide')
}
if(eventB == 'false'){
	$('.accordion5').toggleClass('hide')
}


console.log(goingA);



























function movieData(){
	console.log(movieA)
	var serviceU = (movieA[0])
	var service = serviceU.toLowerCase()
	console.log(service)
	if (movieA[1] == "Mystery/Crime"){
		var genreCode = '80'
		
	} 
	if (movieA[1] == "Comedy"){
		var genreCode = '35'
		
	}
	if (movieA[1] == "Horror"){
		console.log('boo')
		var genreCode = '27'
		
	}
	if (movieA[1] == "Fantasy"){
		var genreCode = '14'
		
	}
	if (movieA[1]=="Drama"){
		var genreCode = '18'
		
	}
	localStorage.setItem('service',service)
	localStorage.setItem('genre',genreCode)
	movieRequest(service, genreCode)
}

function foodData(){
	if ((foodA[0]=="No-Preference")&&(foodA[1]=="No-Preference")){
		var tags = ""
		return foodRequest(tags)
		
	}
	if(foodA[0]=="No-Preference"){
		var food1 = ""
		var tags = food1+ "," + foodA[1].toLowerCase()
		return foodRequest(tags)

	}
	if(foodA[1]=="No-Preference"){
		var food2 = ""
		var tags = foodA[0].toLowerCase() +","+food2
		 return foodRequest(tags)
		
	} else {
	var tags = foodA[0].toLowerCase()+","+ foodA[1].toLowerCase()
	return foodRequest(tags)
}

}

function writeFood(f){
	console.log(f)
	console.log(f.recipes[0].title)
	console.log(f.recipes[0].image)
	console.log(f.recipes[0].readyInMinutes)
	$('#option2I').attr('src', f.recipes[0].image)
	$('#option2H').text(f.recipes[0].title)
	$('#option2P1').text("Ready in "+f.recipes[0].readyInMinutes+" minutes")
	$('#option2P2').text("Makes " + f.recipes[0].servings+ " servings")
	$('#option2P3').empty()
	$('#option2A').text("Here is a link to the recipe").attr('href',f.recipes[0].sourceUrl)
}
function writeMovie(m){
	console.log(m.results[randM].title)
	$('#option3H').text(m.results[randM].title)
	$('#option3I').attr('src',m.results[randM].posterURLs.original)
	$('#option3P1').text(m.results[randM].runtime+" minutes")
	$('#option3P2').empty()
	$('#option3P3').empty()
}
function randMovie(m2){
	console.log(m2)
	var totalPage = m2.total_pages
	var finalPage = Math.floor(Math.random()*totalPage)
	console.log(totalPage)
	console.log(finalPage)
	localStorage.setItem("page", finalPage)
	return movie2Requesting()
}

function foodRequest (tags){
fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=" + tags + "&number=1", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "6a33845cedmshfe3c200548f27bfp1afb9ejsne55a61a48c4b"
	}
})
.then(function(response){
	if (response.status != 200){
		return foodError()
	} else {
		console.log('good')
		return response.json()
	}
})
.then(data => writeFood(data));
}

function movieRequest (service,genreCode){
	console.log('step 1')
fetch("https://streaming-availability.p.rapidapi.com/search/basic?country=us&service="+service+"&type=movie&genre="+ genreCode, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "streaming-availability.p.rapidapi.com",
		"x-rapidapi-key": "0c86673a91msh18102740756c84dp1c7dc9jsn4a761e4a08c1"
	}
})
.then(function(response){
	if (response.status != 200){
		return movieError()
	} else {
		return response.json()
	}
})
.then(data => randMovie(data))
// 4: musical, 12: Adventure, 14: fantasy, 18: Drama, 27: Horror, 28: Action, 35: Comedy, 80: Crime, 878: Science fiction, 10749: Romance.
}
function movie2Requesting (){
	console.log('step 2')
var pageNum = localStorage.getItem('page')
var service = localStorage.getItem('service')
var genreCode = localStorage.getItem('genre')
fetch("https://streaming-availability.p.rapidapi.com/search/basic?country=us&service="+service+"&type=movie&genre="+ genreCode+ "&page="+ pageNum, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "streaming-availability.p.rapidapi.com",
		"x-rapidapi-key": "0c86673a91msh18102740756c84dp1c7dc9jsn4a761e4a08c1"
	}
})
.then(response => response.json())
.then(data => writeMovie(data))
// 4: musical, 12: Adventure, 14: fantasy, 18: Drama, 27: Horror, 28: Action, 35: Comedy, 80: Crime, 878: Science fiction, 10749: Romance.
}

function foodError(){
	$('#option2H').text('Sorry, Something Went Wrong On Our End')
	$('#option2P1').text('we are currently working on getting this fixed')
	$('#option2P2').empty()
	$('#option2P3').empty()
	$('#option2A').text('Heres a link to a good site in the meantime').attr('href','https://www.allrecipes.com/recipes/')
	return console.log('oops!!!!!!!!')
}
function movieError(){
	$('#option3H').text('Sorry, Something Went Wrong On Our End')
	$('#option3P1').text('we are currently working on getting this fixed')
	$('#option3P2').text('try searching a different genre or service!')
	$('#option3P3').empty()
}

init()
