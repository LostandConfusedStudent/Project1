// Start jQuery 



// sideNav 

$(document).ready(function () {
  $('.sidenav').sidenav();
});



// Carousel 

$(document).ready(function () {
  $('.carousel.carousel-slider').carousel({
    fullWidth: true


  });
})




  // Autocomplete 

  $(document).ready(function () {
    $('input.autocomplete').autocomplete({
      data: {
        "Rome": null,
        "Paris": null,
        "Rio de Janeiro": null,
        "Cancun": null,
        "Madrid": null,
        "London": null,
        "Turkey": null,
        "Mykonos": null
      },
    });
  });




//         })
})

//flight scanner with flight time and price

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/USA/USD/en-US/?" + x-rapidapi-key, 
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
		"x-rapidapi-key": "f1fdcadb38msha75cd0753c494d3p12675cjsnf7f9a71d3d34"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});


var flightQuote = $("<p>").text(response.Quotes.MinPrice);
var flightCarriers = $("<p>").text(response.Carriers.CarrierId.Name);
var flightDeparture = $("<p>").text(response.Quotes.OutboundLeg.DepartureDate);

// Display flight information from Seattle
 $("#flightInfo").on("click", function(event) {
  event.preventDefault();
 })

//  Travel Ban/ Restaurant

 $(document).ready(function () {

  var restaurantList = document.getElementsByClassName(restaurants);
   

    var queryURL = "https://developers.zomato.com/api/v2.1/restaurant?" + APIkey;
  

    var APIkey = "8ed72bc9e077393211fcb8e5f0153fbd";


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

            console.log(response);

    });
    var convert = JSON.stringify(response);
    $()

  
  }

