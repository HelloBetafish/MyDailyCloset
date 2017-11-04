// For adding images with fav button and delete button to full closet view

// glyphicon glyphicon-star
// glyphicon glyphicon-star-empty
// glyphicon glyphicon-remove

// Initial array with topics
var topics = ["Ariel", "Snow White","Sleeping Beauty","Princess Jasmine", "Cinderella","Mulan","Pocahontas", "Beauty and the Beast"]

//Function that creates buttons for array
var createBtns = function(){
  $("#tops").empty();
  for (var i = 0; i < tops.length; i++){
    var buttonGrp = $("<div class='btnGrp'>");
    var button = $("<button>");
    button.addClass("topicBtn");
    button.attr("id","index-" + i)
    button.attr("data-info",topics[i]);
    button.text(topics[i]);
    var deleteBtn = $("<button class='delete'>").text("x").attr("data-index", i);
    buttonGrp.append(button);
    buttonGrp.append(deleteBtn);
    $("#topic-Btns").append(buttonGrp);
  };
}

//Function to remove buttons from array when delete button clicked
$(document.body).on("click", "button.delete", function(){
  var currentIndex = $(this).attr("data-index");
  topics.splice(currentIndex,1);
  createBtns();
});

// Function to add user input to array of buttons
$("#add-topic").on("click", function(event) {
  event.preventDefault();
    if($("#user-input").val() !== ""){
      var userInput = $("#user-input").val().trim();
      topics.push(userInput);
      createBtns();
      $("#user-input").val("");
    }
});

// Pull gifs when topic buttons clicked
$(document.body).on("click", ".topicBtn", function() {

  var apikey = "57fd7b1be3b84af394c2693c04cb788d";
  var subject = $(this).attr("data-info");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + subject + "&api_key=" + apikey +
  "&limit=10";

  // // Performing our AJAX GET request
  $.ajax({
    url: queryURL,
    method: "GET"
  })
  // After the data comes back from the API
  .done(function(response){
    $("#show-gifs").empty();
    var results = response.data;
    console.log(results);
    for (var i = 0; i<results.length; i++){
      //Limit result ratings displayed
      if (results[i].rating !== "r" && results[i].rating !== "pg-13"){
        var gifDiv = $("<div class= 'gDiv'>");
        var imageUrlS = results[i].images.fixed_height_still.url;
        var imageUrlA = results[i].images.fixed_height.url;
        var rating = results[i].rating;
        var p = $("<p>").text("Rating: " + rating);
        var topicImg = $("<img>");
        topicImg.attr("src", imageUrlS);
        topicImg.attr("alt","image");
        topicImg.attr("data-still", imageUrlS);
        topicImg.attr("data-animate", imageUrlA);
        topicImg.attr("data-state", "still");
        topicImg.addClass("gif");
        gifDiv.append(p);
        gifDiv.prepend(topicImg);
        $("#show-gifs").prepend(gifDiv);
      }
    } 
  });
});

// Function to change gif state between animated and still when clicked
$(document.body).on("click", ".gif", function(){
  var state = $(this).attr("data-state");
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  }
  else{
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state","still");
  }
  $(this).prev("tr").remove();
});

//Initialize page with buttons from initial array
createBtns();