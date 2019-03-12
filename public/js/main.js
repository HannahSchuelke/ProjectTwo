// THIS IS STILL BEING WORKED OVER --- NOT FUNCTIONING

// Load HTML before javascript with...
$(document).ready(function () {
    console.log("ready!");
  });
  // define global varible
  var results = {}
  
  // declaring array
  var artistsInTown = [];
  
  
  // create button and the text of buttons changing from the array --- for loop
  for (var i = 0; i < artistsInTown.length; i++) {
  var buttonTag = $("<button>").text(artistsInTown [i])
  buttonTag.attr("class", "animalButton")
  $(".button-container").prepend(buttonTag);
  }
  // creating for click handler to append a button for each string in the array
  // make a clickhander... so everytime I click the handler, the text of the button will send to the AJAX
  $(".button-container").on("click", ".animalButton", function(event) {
    var animals = $(this).text()
    console.log("click")
  
  // linking in AJAX
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animals + "&api_key=aoLoR30pQOHgUwaOE5aBMZ4ukG6ShiZn";
  // defining results within the function
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    var results = response.data;
    console.log(results)
  
  // this part is for displaying the gifs
    // Use a loop that appends a button for each string in the array.
    for (var i = 0; i < results.length; i++) {
      // Only taking action if the photo has an appropriate rating
      if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
        // Creating a div for the gif
        var gifDiv = $("<div>");
  
        // Storing the result item's rating
        var rating = results[i].rating;
  
        // Creating a paragraph tag with the result item's rating
        var p = $("<p>").text("Rating: " + rating);
  
        // Creating an image tag
        var personImage = $("<img>");
  
        // Giving the image tag an src attribute of a proprty pulled off the
        // result item
        personImage.attr("src", results[i].images.original_still.url);
        personImage.attr("class", "gif")
        personImage.attr("data-still", results[i].images.original_still.url)
        personImage.attr("data-animate", results[i].images.original.url)
        personImage.attr("data-state", "still")
  
  
        // Appending the paragraph and personImage we created to the "gifDiv" div we created
        gifDiv.append(p);
        gifDiv.append(personImage);
  
        // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
        $(".grid").prepend(gifDiv);
      }
    }
      // click move click stop
      $(".gif").on("click", function() {
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-state");
        // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
      });
  
  
  });
  // connecting these two parts: buttons to results, making AJAX appear
  
  
  
  
  
  })