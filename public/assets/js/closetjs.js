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
    $.ajax("/closet/" + userID + "/" + id, {
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
    $.ajax("/closet/:userID/" + id, {
      type: "DELETE",
    }).then(
    function() {
      console.log("deleted clothes: ", id);
        // Reload the page to get the updated list
        location.reload();
      }
      );
  });

/*Added 4 buttons below, and user can upload images to my 
Filestack account and they will be saved in the cloud.
However, I have not figured out how to set correct boolean for each clothing type
and pass image to mySQL dtabase*/

  $("#btnaddtops").on("click", function(event) {
    event.preventDefault();

    var fsClient = filestack.init('AXodQkfA4Soq1kmjeI2Vbz');

    fsClient.pick({
      fromSources:["local_file_system","url","imagesearch","facebook","instagram","dropbox"],
      accept:["image/*"]
    }).then(function(result) {
      const fileUrl = result.filesUploaded[0].url;
      // $("#tops").append("<img src=" + fileUrl + " class=img-fluid img-rounded height=200 width=200>");
      // console.log(fileUrl);

      var patharray = window.location.pathname.split( '/' );
      var userID = patharray[(patharray.length-1)];

      var newClothes = {
        imagepath: fileUrl,
        userID: userID,
        clothesType: "top",
      };

      // Send the POST request.
      $.ajax("/closet/" + userID, {
        type: "POST",
        data: newClothes
      }).then(
      function() {
        console.log("added new clothing item");
        // Reload the page to get the updated list
        location.reload();
      });
    });
  });

  $("#btnaddbottoms").on("click", function(event) {
    event.preventDefault();

    var fsClient = filestack.init('AXodQkfA4Soq1kmjeI2Vbz');

    fsClient.pick({
      fromSources:["local_file_system","url","imagesearch","facebook","instagram","dropbox"],
      accept:["image/*"]
    }).then(function(result) {
      const fileUrl = result.filesUploaded[0].url;
      // $("#tops").append("<img src=" + fileUrl + " class=img-fluid img-rounded height=200 width=200>");
      // console.log(fileUrl);

      var patharray = window.location.pathname.split( '/' );
      var userID = patharray[(patharray.length-1)];

      var newClothes = {
        imagepath: fileUrl,
        userID: userID,
        clothesType: "bottom",
      };

      // Send the POST request.
      $.ajax("/closet/" + userID, {
        type: "POST",
        data: newClothes
      }).then(
      function() {
        console.log("added new clothing item");
        // Reload the page to get the updated list
        location.reload();
      });
    });
  });

  $("#btnaddshoes").on("click", function(event) {
    event.preventDefault();

    var fsClient = filestack.init('AXodQkfA4Soq1kmjeI2Vbz');

    fsClient.pick({
      fromSources:["local_file_system","url","imagesearch","facebook","instagram","dropbox"],
      accept:["image/*"]
    }).then(function(result) {
      const fileUrl = result.filesUploaded[0].url;
      // $("#tops").append("<img src=" + fileUrl + " class=img-fluid img-rounded height=200 width=200>");
      // console.log(fileUrl);

      var patharray = window.location.pathname.split( '/' );
      var userID = patharray[(patharray.length-1)];

      var newClothes = {
        imagepath: fileUrl,
        userID: userID,
        clothesType: "shoes",
      };

      // Send the POST request.
      $.ajax("/closet/" + userID, {
        type: "POST",
        data: newClothes
      }).then(
      function() {
        console.log("added new clothing item");
        // Reload the page to get the updated list
        location.reload();
      });
    });
  });

  $("#btnaddaccessories").on("click", function(event) {
    event.preventDefault();

    var fsClient = filestack.init('AXodQkfA4Soq1kmjeI2Vbz');

    fsClient.pick({
      fromSources:["local_file_system","url","imagesearch","facebook","instagram","dropbox"],
      accept:["image/*"]
    }).then(function(result) {
      const fileUrl = result.filesUploaded[0].url;
      // $("#tops").append("<img src=" + fileUrl + " class=img-fluid img-rounded height=200 width=200>");
      // console.log(fileUrl);

      var patharray = window.location.pathname.split( '/' );
      var userID = patharray[(patharray.length-1)];

      var newClothes = {
        imagepath: fileUrl,
        userID: userID,
        clothesType: "accessory",
      };

      // Send the POST request.
      $.ajax("/closet/" + userID, {
        type: "POST",
        data: newClothes
      }).then(
      function() {
        console.log("added new clothing item");
        // Reload the page to get the updated list
        location.reload();
      });
    });
  });

});