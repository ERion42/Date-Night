var APIkeySpoon = '9d755124a4d9499396c84da0494eeff6'


fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "6a33845cedmshfe3c200548f27bfp1afb9ejsne55a61a48c4b"
	}
})
.then(response => response.json())
.then(data => console.log(data));

