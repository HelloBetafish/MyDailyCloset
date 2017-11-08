// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-fav").on("click", function(event) {
    var id = $(this).data("id");
    var favState = $(this).val();
    console.log("ID is " + id);
    console.log("Fav State = " + favState);
    var changeFavState;

    if( favState == 0) {
      changeFavState = 1;
    }

    else {
      changeFavState = 0;
    }

    var newFavState = {
      favorite: changeFavState
    };

    var patharray = window.location.pathname.split( '/' );
    var userID = patharray[(patharray.length-1)];
    console.log(userID);

    // Send the PUT request.
    $.ajax("/outfits/" + userID + "/" + id, {
      type: "PUT",
      data: newFavState
    }).then(
      function() {
        console.log("changed favorite: ", changeFavState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // $(".create-form").on("submit", function(event) {
  //   // Make sure to preventDefault on a submit event.
  //   event.preventDefault();

  //   var newCat = {
  //     name: $("#ca").val().trim(),
  //     sleepy: $("[name=sleepy]:checked").val().trim()
  //   };

  //   // Send the POST request.
  //   $.ajax("/api/cats", {
  //     type: "POST",
  //     data: newCat
  //   }).then(
  //     function() {
  //       console.log("created new cat");
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });

  $(".delete").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/outfits/:userID/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("deleted outfit: ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});

