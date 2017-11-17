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

  $("#btnaddoutfit").on("click", function(event) {
    event.preventDefault();

    var fsClient = filestack.init('AXodQkfA4Soq1kmjeI2Vbz');

    fsClient.pick({
      fromSources:["local_file_system","url","imagesearch","facebook","instagram","dropbox"],
      accept:["image/*"]
    }).then(function(result) {
      const fileUrl = result.filesUploaded[0].url;
      // $("#tops").append("<img src=" + fileUrl + " class=img-fluid img-rounded height=200 width=200>");
      // console.log(fileUrl);
      // $("#btnaddoutfit").attr("value", fileUrl);
      // var value = $("#btnaddoutfit").val();
      // console.log(value)
      // value has the path name, but for some reason it is not getting passed to mySQL

      var patharray = window.location.pathname.split( '/' );
      var userID = patharray[(patharray.length-1)];

      var newOutfit = {
        outfitspath: fileUrl,
        userID: userID,
      };

      // Send the POST request.
      // POST request works, but the path name does not get passed correctly, shows as NULL
      $.ajax("/outfits/" + userID, {
        type: "POST",
        data: newOutfit
      }).then(
      function() {
        console.log("added new clothing item");
        // Reload the page to get the updated list
        location.reload();
      });
    });
  });

});

