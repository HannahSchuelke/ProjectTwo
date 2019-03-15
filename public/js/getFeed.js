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