

document.addEventListener('DOMContentLoaded', function () {
    const addRideForm = document.getElementById('addRideForm');
    const rideList = document.getElementById('rideList');
    const adminName = document.querySelector('.admin-name');
    console.log(adminName);


    // fetching admin name from local storage 
    const admin = JSON.parse(localStorage.getItem('admin'));
    console.log(admin);
    if(admin && admin.fullName){
        adminName.textContent = admin.fullName;
    }

    // Load existing rides from local storage on page load
    loadRidesFromLocalStorage();

    addRideForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form values
        const rideName = document.getElementById('rideName').value;
        const ridePrize = document.getElementById('ridePrize').value;
        const rideDesc = document.getElementById('rideDesc').value;
        const rideImageUrl = document.getElementById('rideImageUrl').value;
        const iconSize = 50; // Adjust the icon size as needed

        // Add new ride to the list
        const newRideItem = document.createElement('li');
        newRideItem.className = 'list-group-item';

        // Create an image element if the image URL is provided
        if (rideImageUrl) {
            const rideImage = document.createElement('img');
            rideImage.src = rideImageUrl;
            rideImage.alt = `${rideName} Image`;
            rideImage.className = 'ride-image';
            rideImage.style.width = `${iconSize}px`;
            rideImage.style.height = `${iconSize}px`;
            newRideItem.appendChild(rideImage);
        }

        // Add ride details to the list item
        const rideDetailsText = document.createElement('p');
        rideDetailsText.textContent = `${rideName} - ${ridePrize} - ${rideDesc}`;
        newRideItem.appendChild(rideDetailsText);

        // Add delete button to remove the ride
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-sm btn-danger float-right';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            rideList.removeChild(newRideItem);

            // Remove the ride from local storage
            removeRideFromLocalStorage(rideName);
        });

        newRideItem.appendChild(deleteButton);
        rideList.appendChild(newRideItem);

        // Save the new ride to local storage
        saveRideToLocalStorage(rideName, { car_name: rideName, prize: ridePrize, desc: rideDesc, imageUrl: rideImageUrl });

        // Clear the form
        addRideForm.reset();
    });

    function saveRideToLocalStorage(rideName, rideDetails) {
        // Get existing rides from local storage
        const existingRides = JSON.parse(localStorage.getItem('Rides')) || {};

        // Add the new ride
        existingRides[rideName] = rideDetails;

        // Save the updated rides to local storage
        localStorage.setItem('Rides', JSON.stringify(existingRides));
    }

    function removeRideFromLocalStorage(rideName) {
        // Get existing rides from local storage
        const existingRides = JSON.parse(localStorage.getItem('Rides')) || {};

        // Remove the ride
        delete existingRides[rideName];

        // Save the updated rides to local storage
        localStorage.setItem('Rides', JSON.stringify(existingRides));
    }

    function loadRidesFromLocalStorage() {
        // Get existing rides from local storage
        const existingRides = JSON.parse(localStorage.getItem('Rides')) || {};

        // Display existing rides in the list
        for (const rideName in existingRides) {
            const rideDetails = existingRides[rideName];

            // Create a new ride list item
            const newRideItem = document.createElement('li');
            newRideItem.className = 'list-group-item';

            // Create an image element if the image URL is provided
            if (rideDetails.imageUrl) {
                const rideImage = document.createElement('img');
                rideImage.src = rideDetails.imageUrl;
                rideImage.alt = `${rideDetails.car_name} Image`;
                rideImage.className = 'ride-image';
                newRideItem.appendChild(rideImage);
            }

            // Add ride details to the list item
            const rideDetailsText = document.createElement('p');
            rideDetailsText.textContent = `${rideDetails.car_name} - ${rideDetails.prize} - ${rideDetails.desc}`;
            newRideItem.appendChild(rideDetailsText);

            // Add delete button to remove the ride
            const deleteButton = document.createElement('button');
            deleteButton.className = 'btn btn-sm btn-danger float-right';
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function () {
                rideList.removeChild(newRideItem);

                // Remove the ride from local storage
                removeRideFromLocalStorage(rideName);
            });

            newRideItem.appendChild(deleteButton);
            rideList.appendChild(newRideItem);
        }
    }
});