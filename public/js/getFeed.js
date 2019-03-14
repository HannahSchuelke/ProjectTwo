



// FUNCTION FOR ALL EVENTS

$.ajax({
    url: '/api/events',
    data: '',
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




// FUNCTION FOR PROFILE EVENTS

$.ajax({
    url: '/api/events/user',
    data: { userId: req.user.id },
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
    data: {
        name: ('#name').val(),
        email: ('#email').val()
    },
    type: "GET",
    dataType: "html",
    success: function () {
        $('#showresults').replaceWith($('showresults').html(data));
    },
    error: function () {
        console.log("no profile info available");
    },
})

