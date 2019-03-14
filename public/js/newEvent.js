// Modal for new event

// ID's:

//   event-title
//   event-date
//   event-location
//   event-artist

// post and create new event
    <script type="text/javascript">
    $(document).ready(function() {
        $('#insertForm').on('submit', function() {
            event.preventDefault();
            if($('#event-title').val() == '')
            {
                alert("Title is required");
            }
            else if($('#event-date').val() == '')
            {
                alert("Date is required");
            }
            else if($('#event-location').val() == '')
            {
                alert("Location is required");
            }
            else if($('#event-artist').val() == '')
            {
                alert("Artist is required");     
            }
        })
    });

    </script>    

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