













console.log(foodQuestions)








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