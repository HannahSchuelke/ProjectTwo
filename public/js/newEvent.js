// Modal for new event

// ID's:

//   event-title
//   event-date
//   event-location
//   event-artist

  $('#new-event-button ').on('click', function(){
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
        // refresh page
    })
  });