


var dogArry = ["corgi", "mastiff", "pitbull", "terrier", "beagle"];

for (var i = 0; i < dogArry.length; i++) {
    var dogButton = $("<button>");
        dogButton.attr("data-dog", dogArry[i]);
        dogButton.text(dogArry[i]);
        $('body').append(dogButton);        
}


$('button').click(function() {
    var dog = $(this).attr("data-dog");
    // var API_KEY = "0Q6mzyUdggwOoNd7SEBsuy19WrVSW06y&limit=10"
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + dog + "&api_key=0Q6mzyUdggwOoNd7SEBsuy19WrVSW06y&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    
    .then(function(response) {
        console.log(queryURL);
        console.log(response);
        
        
    })


})