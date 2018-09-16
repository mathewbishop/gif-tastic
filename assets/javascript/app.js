


var dogArry = ["corgi", "mastiff", "terrier", "beagle"];

for (var i = 0; i < dogArry.length; i++) {
    var dogButton = $("<button>");
        dogButton.attr("data-dog", dogArry[i]);
        dogButton.text(dogArry[i]);
        $('body').prepend(dogButton);        
}


$('button').click(function() {
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

            dogContainer.append(rating);
            dogContainer.append(dogGif);

            $('#gif-container').prepend(dogContainer);
        }  
    });
});

