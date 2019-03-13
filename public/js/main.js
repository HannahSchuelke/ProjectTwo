// only in our client-side logic (as this) do we make sure to add api routes

$(document).ready(function() {

    var queryURL = "/api/events";

    $("#info").on("click", function() {
         const body = {
            email: $("#email").val()
    }

    $.ajax({
        url: queryURL,
        method: "POST"
    })
    .then(function(response) {
        console.log(response)
    })
    })
});
