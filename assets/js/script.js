//Declaring global variables for the Google Maps API
var mapsAPIKeySuffix = '&key=AIzaSyC8ckXor6hYs94Ot5UefJcP4kyMtrf-578';
var mapsAPIUrlPrefix = 'https://maps.googleapis.com/maps/api/';
var corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
//Test fetch for google maps data. This test uses the cors anywhere address prepended to the url in order to avoid triggering cors due to the local host address. The test worked. 
var getPlaces= function(){
    var mapsAPIUrl = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&key=AIzaSyC8ckXor6hYs94Ot5UefJcP4kyMtrf-578'
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

getPlaces();