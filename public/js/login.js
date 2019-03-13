// import { read } from "fs";

$('#sign-in-button').on('click', function() {
    var body = {
        email: $('#email').val(),
        password: $('password').val(),
    }
    $.ajax({
        url: "/api/login",
        data: body,
        method: "post"
    })
    .then(function(response) {
        localStorage.setItem(
            token, response.token
        )
        location.window.href = "/profile";
    })
});

$('#sign-up-button').on('click', function() {
    console.log('new user clicked')
    var body = {
        email: $('#new-email').val(),
        password: $('#new-password').val(),
        name: $('#new-name').val(),
    }
    console.log(body)
    $.ajax({
        url: "/api/user/new",
        data: body,
        method: "post"
    })
    .then(function(response) {
       localStorage.setItem(
           'token', response.token
       )
       location.href = "/html/profile";
    })
});
