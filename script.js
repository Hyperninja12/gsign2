function onSignIn(googleUser) {
    // Get the ID token from the Google User object
    const profile = googleUser.getBasicProfile();
    const id_token = googleUser.getAuthResponse().id_token;

    console.log('User signed in:');
    console.log('ID: ' + profile.getId());
    console.log('Full Name: ' + profile.getName());
    console.log('Email: ' + profile.getEmail());
    console.log('ID Token: ' + id_token); // Log the ID token for verification

    if (id_token) {
        console.log('Redirecting...');
        window.location.href = 'https://hyperninja12.github.io/Ash_Porfolio/portfolio.html'; 
    } else {
        console.error('ID Token is missing. User may not be signed in properly.');
    }
}
