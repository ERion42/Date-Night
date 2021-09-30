// 'https://enigmatic-citadel-24557.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&key=AIzaSyC8ckXor6hYs94Ot5UefJcP4kyMtrf-578'

//Declaring global variables for the Google Maps API
var mapsAPIKeySuffix = '&key=AIzaSyC8ckXor6hYs94Ot5UefJcP4kyMtrf-578';
var mapsAPIUrlPrefix = 'https://maps.googleapis.com/maps/api/';
var hostUrl = 'https://enigmatic-citadel-24557.herokuapp.com/';
// fetch(hostUrl + YOUR_URL + parameters
// var corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
var lat;
var lng;
var geocodeUrl;
var spaceEncode = '%20';
// var geocode = 

var geocodeAddress = function(address){

    var addressArr = address.split(' ');
    var addressEncoded = addressArr.join('%20');
    var geocodeResults = new google.maps.Geocoder();
    geocodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + addressEncoded + mapsAPIKeySuffix;
    console.log(geocodeUrl);

   $.ajax(geocodeUrl).then(function(results){
       console.log(results);
    //    lat = results[0].geometry.location.lat;
        lat = _.chain(data.geometry).find('location').get('lat').val();
       console.log(lat);
    geocodeResults.geocode({'address' : address}, function(results, status){
        if(status == google.maps.Geocoder.OK){
        }
    });
   })
}

$('form').submit(function(event){
    event.preventDefault();
    var address = ($('#address').val());
    geocodeAddress(address);
});

var dummyURLPlaceSearch = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=geometry,vicinity&input295%20red%20oak%20trail%20athens&inputtype=textquery&key=AIzaSyC8ckXor6hYs94Ot5UefJcP4kyMtrf-578'
var dummyURLNearbySearch = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?' + mapsAPIKeySuffix;

//Test fetch for google maps data. This test uses the cors anywhere address prepended to the url in order to avoid triggering cors due to the local host address. The test worked. 
var searchNearby = function(){
    var mapsAPIUrl = 'https://enigmatic-citadel-24557.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=geometry&input295%20red%20oak%20trail%20athens%20GA%2030606&inputtype=textquery&key=AIzaSyC8ckXor6hYs94Ot5UefJcP4kyMtrf-578'
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

/*
 List of likely api calls

The maps data query will start with a find place search:
(https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters)
this uses text input and outputs json

Required parameters for findplace searches:
'input' - text input string that identi

parameters are separated by '&'

when searching for a list of place data types to return (populated by user input criteria from checkboxes) we'll need to use the fields parameter:
'fields=formatted_address,name,geometry'


____________________________________________________________________________________________________
These are required responses from PlaceTextSearch that can be used for secondary fetch requests or for error catching:

'html_attributions' - contains an array about the listing (not all will have a list)

'results' - returns an array of results - contains place_id which can be used in a second fetch for place details

'status' - returns the status of the fetch request 
status codes include: OK, ZERO_RESULTS, INVALID_REQUEST, OVER_QUERY_LIMIT, REQUEST_DENIED, UNKNOWN_ERROR
____________________________________________________________________________________________________

probably required:
'place_id' - returns unique identifier needed to pull info about the location

'location' - requires latitude and longitude to be specified, need to find out how to 
____________________________________________________________________________________________________

place data list:
'name' - readable name:

'formatted_address' - address

'formatted_phone_number' - phone number 

'opening_hours' - hours of operation 

'price_level' - returns The price level of the place, on a scale of 0 to 4. The exact amount indicated by a specific value will vary from region to region. Price levels are interpreted as follows:
                        0 Free
                        1 Inexpensive
                        2 Moderate
                        3 Expensive
                        4 Very Expensive

'reviews' - returns reviews of location data
___________________________________________________________________________________________________________________________________________________

It seems like there will need to be two fetches, the first is a place search that would return location based on user input and the second uses the location data to run a text search

The first search needs to be a place + basic search which will return (amongst other things) geometry and place_id. Geometry contains the lat and long of the first search which is required to run a nearby search

___________________________________________________________________________________________________________________________________________________
function to parse user input (called by:, calls: encodeURL())

function to create place search url - function searchPlaceURL()

function to create text search url - function searchTextURL()

nested fetch calls fetch1, fetch2

function to parse fetch1 data for location (use global variable?)
function to parse fetch2 data for query results

*/