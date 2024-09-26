console.log('script.js is loaded');

function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    const id_token = googleUser.getAuthResponse().id_token;

    console.log('User signed in:');
    console.log('ID: ' + profile.getId());
    console.log('Full Name: ' + profile.getName());
    console.log('Email: ' + profile.getEmail());
    console.log('ID Token: ' + id_token);

    // Check if the ID token is valid before redirecting
    if (id_token) {
        console.log('Redirecting...');
        // Use the page you want to redirect to after sign-in
        window.location.href = 'https://google.com'; 
    } else {
        console.error('ID Token is missing. User may not be signed in properly.');
    }
}
