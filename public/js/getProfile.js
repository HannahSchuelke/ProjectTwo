// FUNCTION FOR PROFILE EVENTS

$.ajax({
    url: '/api/events/user',
    method: 'get'
})
    .then(function (response) {
        for (i in response) {
            $('#').append(
                // html for one event
                // response[i].title
            )
        }
    })



// FUNCTION FOR PROFILE INFO

$.ajax({
    url: "/api/profile",
    type: "GET",
    dataType: "html",
    success: function () {
        $('#showresults').replaceWith($('showresults').html(data));
    },
    error: function () {
        console.log("no profile info available");
    },
})

