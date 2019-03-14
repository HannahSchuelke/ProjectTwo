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
    method: "GET",
})
.then(function(response){
    $('#name').text(response.name);
    $('#email').text(response.email);
})