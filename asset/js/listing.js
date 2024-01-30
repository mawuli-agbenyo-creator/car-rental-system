
const btn = document.querySelector(".btn");

const employeeBookings = [];

function book(event) {
  event.preventDefault();

  const formControls = document.querySelectorAll(".form-control");

  const booking = {
    name: formControls[0].value,
    employeeId: formControls[1].value,
    pickupLocation: formControls[2].value,
    dropOffLocation: formControls[3].value,
    time: formControls[4].value,
  };

  if (!Object.values(booking).every(Boolean)) {
    alert("Please fill in all fields");
    return;
  }

  try {
    localStorage.setItem("booking", JSON.stringify(booking));
    employeeBookings.push(booking);
    window.location.href = "/employee/listing.html";
  } catch (error) {
    console.error("Error during booking:", error);
    // Handle error appropriately, e.g., display an error message to the user
  }

  console.log(booking);
}

btn.addEventListener("click", book);

// Get the current URL
// var currentUrl = window.location.href;
// var url = new URL(currentUrl);

// // Get the search parameters from the URL
// var params = new URLSearchParams(url.search);

// // Retrieve individual parameters as strings
// var pickupLocationStr = params.get("pickupLocation");
// var dropoffLocationStr = params.get("dropoffLocation");
// try {
//   // Convert the string coordinates to objects
//   var pickupLocation = JSON.parse(pickupLocationStr);
//   var dropoffLocation = JSON.parse(dropoffLocationStr);
//   console.log(pickupLocation);

//   // Check if the parameters are valid
//   if (!pickupLocation || !dropoffLocation) {
//     // Redirect to the home page if parameters are missing or invalid
//     window.location.href = "/";
//   } else {
//     // Call the getDistance function if parameters are valid and the API is loaded
//     getDistance(pickupLocation, dropoffLocation);

//     // Display the retrieved data (you can use this data as needed)
//     console.log("Pickup Location:", pickupLocation);
//     console.log("Drop-off Location:", dropoffLocation);
//   }
// } catch (error) {
//   console.error("Error parsing JSON:", error);
//   // Handle the error as needed, e.g., redirect to the home page
//   // window.location.href = '/';
// }

// // Check if the parameters are valid
// if (!pickupLocation || !dropoffLocation) {
//   // Redirect to the home page if parameters are missing or invalid
//   // window.location.href = '/';
// } else {
//   // Call the getDistance function if parameters are valid and the API is loaded
//   getDistance(pickupLocation, dropoffLocation);

//   // Display the retrieved data (you can use this data as needed)
//   console.log("Pickup Location:", pickupLocation);
//   console.log("Drop-off Location:", dropoffLocation);
// }
