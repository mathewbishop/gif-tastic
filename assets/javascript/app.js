

var API_KEY = "0Q6mzyUdggwOoNd7SEBsuy19WrVSW06y&limit=10"
var queryURL = "https://api.giphy.com/v1/gifs/search?q="
var dogArry = ["corgi", "mastiff", "pitbull", "terrier", "beagle"];

dogArry.forEach(function() {
    var dogButton = $("<button>");
        $.data(dogButton, 'data-dog', dogArry[i]);
        $('body').append(dogButton);
})
