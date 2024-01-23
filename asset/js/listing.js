    // // Get the current URL
    // var currentUrl = window.location.href;
    // var url = new URL(currentUrl);
 


    // // Get the search parameters from the URL
    // var params = new URLSearchParams(url.search);

    // // Retrieve individual parameters
    // var pickupLocation = params.get('pickupLocation');
    // var dropoffLocation = params.get('dropoffLocation');

    // if (pickupLocation == null || dropoffLocation == null) 
    // {
    //     window.location.href = '/'; 
    // }

    // getDistance(pickupLocation, dropoffLocation)
    // // Display the retrieved data (you can use this data as needed)
    // console.log("Pickup Location:", pickupLocation);
    // console.log("Drop-off Location:", dropoffLocation);



    // Get the current URL
var currentUrl = window.location.href;
var url = new URL(currentUrl);

// Get the search parameters from the URL
var params = new URLSearchParams(url.search);

// Retrieve individual parameters as strings
var pickupLocationStr = params.get('pickupLocation');
var dropoffLocationStr = params.get('dropoffLocation');
try {
    // Convert the string coordinates to objects
    var pickupLocation = JSON.parse(pickupLocationStr);
    var dropoffLocation = JSON.parse(dropoffLocationStr);

    // Check if the parameters are valid
    if (!pickupLocation || !dropoffLocation) {
        // Redirect to the home page if parameters are missing or invalid
        window.location.href = '/';
    } else {
        // Call the getDistance function if parameters are valid and the API is loaded
        getDistance(pickupLocation, dropoffLocation);

        // Display the retrieved data (you can use this data as needed)
        console.log("Pickup Location:", pickupLocation);
        console.log("Drop-off Location:", dropoffLocation);
    }
} catch (error) {
    console.error('Error parsing JSON:', error);
    // Handle the error as needed, e.g., redirect to the home page
    // window.location.href = '/';
}

// Check if the parameters are valid
if (!pickupLocation || !dropoffLocation) {
    // Redirect to the home page if parameters are missing or invalid
    // window.location.href = '/';
} else {
    // Call the getDistance function if parameters are valid and the API is loaded
    getDistance(pickupLocation, dropoffLocation);

    // Display the retrieved data (you can use this data as needed)
    console.log("Pickup Location:", pickupLocation);
    console.log("Drop-off Location:", dropoffLocation);
}
