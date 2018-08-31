$(".login-form").on("submit", function(event) {
  event.preventDefault();

  // Grab the email login
  var emailAddr = document.getElementsByName("email")[0].value;
  var passIt = document.getElementsByName("password")[0].value;
  console.log("email = ", emailAddr);
  console.log("password = ", passIt);

  // Use endpoint to get the nickname
  $.get("/api/nickname/" + emailAddr, function(data) {
    if (data) {
      // Set the nickname
      console.log("AuthID = ", data.id);
      window.localStorage.setItem("AuthID", data.id);
      var userdata = {
        email: emailAddr,
        password: passIt
      };
      console.log("userdata = ", userdata);

      $.post("/api/login", userdata, function(data, status) {
        console.log("data ", data, "status ", status);
        window.location.assign("/home");
      }).fail(function(data) {
        console.log("error ", data.responseText);
        alert(data.responseText);
      });
    }
  });
});

$(".create-form").on("submit", function(event) {
  event.preventDefault();

  // Grab the email login
  var emailAddr = document.getElementsByName("email")[0].value;
  var passIt = document.getElementsByName("password")[0].value;
  var nickname = document.getElementsByName("nickname")[0].value;
  console.log("email = ", emailAddr);
  console.log("password = ", passIt);

  var userdata = {
    email: emailAddr,
    password: passIt,
    nickname: nickname
  };

  // Create the account
  $.post("/api/createAccount", userdata, function(data, status) {
    console.log("data ", data, "status ", status);

    // Use endpoint to get the new AuthID
    $.get("/api/nickname/" + emailAddr, function(data) {
      if (data) {
        // Grab it and set it in local storage
        console.log("AuthID = ", data.id);
        window.localStorage.setItem("AuthID", data.id);
        window.location.assign("/home");
      }
    });
  }).fail(function(data) {
    console.log("error ", data.responseText);
    alert(data.responseText);
  });
});
