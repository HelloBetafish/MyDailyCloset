$(function() {
  $(".login").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newUser = {
      username: $("#username")
        .val()
        .trim(),
      password: $("#password")
        .val()
        .trim()
    };

    console.log("newUser created");

    // Send the POST request.
    $.ajax("/api/login", { type: "POST", data: newUser }).then(function(
      result
    ) {
      console.log("A new user was created!");
      console.log(result);
      if (result.length === 0) {
        window.location.href = "/";
      } else {
        // Reload the page to get the updated list
        window.location.href = "/home/" + result;
      }
    });
  });

  $("#homeButton").on("click", function(event) {
    event.preventDefault();

    var patharray = window.location.pathname.split("/");
    var userID = patharray[patharray.length - 1];
    window.location.href = "/home/" + userID;
  });

  $("#fullClosetButton").on("click", function(event) {
    event.preventDefault();

    var patharray = window.location.pathname.split("/");
    var userID = patharray[patharray.length - 1];
    window.location.href = "/closet/" + userID;
  });

  $("#createNewOutfitButton").on("click", function(event) {
    event.preventDefault();

    var patharray = window.location.pathname.split("/");
    var userID = patharray[patharray.length - 1];
    window.location.href = "/createOutfit/" + userID;
  });

  $("#myOutfitsButton").on("click", function(event) {
    event.preventDefault();

    var patharray = window.location.pathname.split("/");
    var userID = patharray[patharray.length - 1];
    window.location.href = "/outfits/" + userID;
  });

  // Home page additional side buttons
  $("#btn1").on("click", function(event) {
    event.preventDefault();

    var patharray = window.location.pathname.split("/");
    var userID = patharray[patharray.length - 1];
    window.location.href = "/closet/" + userID;
  });

  $("#btn2").on("click", function(event) {
    event.preventDefault();

    var patharray = window.location.pathname.split("/");
    var userID = patharray[patharray.length - 1];
    window.location.href = "/createOutfit/" + userID;
  });

  $("#btn3").on("click", function(event) {
    event.preventDefault();

    var patharray = window.location.pathname.split("/");
    var userID = patharray[patharray.length - 1];
    window.location.href = "/outfits/" + userID;
  });
});
