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
      console.log("nickname = ", data.name);
      window.localStorage.setItem("nickname", data.name);
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
