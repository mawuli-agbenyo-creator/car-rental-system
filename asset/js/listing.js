    // Get the current URL
    var currentUrl = window.location.href;
    var url = new URL(currentUrl);
 


    // Get the search parameters from the URL
    var params = new URLSearchParams(url.search);

    // Retrieve individual parameters
    var pickupLocation = params.get('pickupLocation');
    var dropoffLocation = params.get('dropoffLocation');
    var pickupDate = params.get('pickupDate');
    var dropoffDate = params.get('dropoffDate');

    if (pickupLocation == null || dropoffLocation == null || pickupDate == null || dropoffDate == null) 
    {
        window.location.href = '/'; 
    }

    // Display the retrieved data (you can use this data as needed)
    console.log("Pickup Location:", pickupLocation);
    console.log("Drop-off Location:", dropoffLocation);
    console.log("Pickup Date:", pickupDate);
    console.log("Drop-off Date:", dropoffDate);