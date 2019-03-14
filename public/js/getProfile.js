// import { userInfo } from "os";

// FUNCTION FOR PROFILE EVENTS
console.log(localStorage.getItem(user.id))

$.ajax({
    url: '/api/events/'+localStorage.getItem(user.id),
    method: 'get'
})
    .then(function (response) {
        for (i in response) {
            $('#userEvent').append(
                `<div class='event'>
                    <div id='event-title' class='event-item'>${response[i].title}</div>
                    <div id='event-date' class='event-item'>${response[i].date}</div>
                    <div id='event-location' class='event-item'>${response[i].location}</div>
                    <div id='event-artist' class='event-item'>${response[i].artist}</div>
                </div>`
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