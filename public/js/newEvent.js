// ID's:

//   event-title
//   event-date
//   event-location
//   event-artist

// post and create new event
$(document).ready(function() {
    $('#insertForm').on('submit', function() {
        event.preventDefault();
          var body = {
            title: $('#event-title').val(),
            date: $('#event-date').val(),
            location: $('#event-location').val(),
            artist: $('#event-artist').val(),
        }
        $.ajax({
            url: "/api/event/new",
            data: body,
            method: "post"
        })
        .then(function(response) {
            // close modal
            modal.style.display = "none"
            location.href = "/profile"
        })
    })
}); 
