

// array of dog breeds/types
var dogArry = ["corgi", "mastiff", "terrier", "beagle"];



function displayDog() {
// on click of dog button... 
$('.dog-btn').click(function() {
    var dog = $(this).attr("data-dog");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + dog + "&api_key=0Q6mzyUdggwOoNd7SEBsuy19WrVSW06y&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    
    .then(function(response) {
        console.log(queryURL);
        console.log(response);
        
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            var dogContainer = $('<div>');

            var rating = $('<p>').text("Rating " + results[i].rating);

            var dogGif = $('<img>');

            dogGif.attr("src", results[i].images.fixed_height_still.url);
            dogGif.attr("data-state", "still");
            dogGif.attr("data-still", results[i].images.fixed_height_still.url);
            dogGif.attr("data-animate", results[i].images.fixed_height.url);
            dogGif.addClass("dog-gif");

            dogContainer.append(dogGif);
            dogContainer.append(rating);

            $('#gif-container').prepend(dogContainer);

            $('.dog-gif').click(function() {
                var state = $(this).attr("data-state");
            
                    if (state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                    } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                    }
                })

        }

    });

});
}


function renderButtons() {

$('#button-container').empty();
// for each item in the dogArry, creates a button with attr data-dog setting its value to the respective index
for (var i = 0; i < dogArry.length; i++) {
    
    var dogButton = $("<button>");
        dogButton.addClass("dog-btn")
        dogButton.attr("data-dog", dogArry[i]);
        dogButton.text(dogArry[i]);
        $('#button-container').append(dogButton);        
    }
}


    
$('#add-dog').on("click", function(event) {
    event.preventDefault();
    var newDog = $('#dog-input').val().trim();
    dogArry.push(newDog);
    renderButtons();
})


$(document).click(".dog-btn", displayDog);
renderButtons();