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




function foodRequest (tags){
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
var service;
var genreCode;
function movieRequest (service,genreCode){

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
init()