// saves token to localStorage

function attachToken(token) {
  // if (token) {
  //   localStorage.setItem("token", token)
  // }
    //the attachToken function adds the token to EVERY ajax request
    $.ajaxSetup({
        headers: {
          Authorization: "Bearer " + token
        }
      });
}

// attachToken();