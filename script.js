function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Full Name: ' + profile.getName());
    console.log('Email: ' + profile.getEmail());
  
    var id_token = googleUser.getAuthResponse().id_token;
    console.log('ID Token: ' + id_token);
  
    // Send the ID token to your server if necessary
    $.ajax({
      url: '/your-backend-endpoint', // Replace with your server URL
      method: 'POST',
      data: {
        id_token: id_token
      },
      success: function(response) {
        console.log('Server response:', response);
      },
      error: function(error) {
        console.log('Error:', error);
      }
    });
  }
  