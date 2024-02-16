// customers.js

document.addEventListener('DOMContentLoaded', function () {
    const addCustomerForm = document.getElementById('addCustomerForm');
    const customerList = document.getElementById('customerList');

    // Load existing customers from local storage on page load
    loadCustomersFromLocalStorage();

    addCustomerForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form values
        const customerName = document.getElementById('customerName').value;
        const customerEmail = document.getElementById('customerEmail').value;

        // Add new customer to the list
        const newCustomerItem = document.createElement('li');
        newCustomerItem.className = 'customer-item';
        newCustomerItem.textContent = `${customerName} - ${customerEmail}`;

        // Add delete button to remove the customer
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-sm btn-danger float-right';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            customerList.removeChild(newCustomerItem);

            // Remove the customer from local storage
            removeCustomerFromLocalStorage(customerName);
        });

        newCustomerItem.appendChild(deleteButton);
        customerList.appendChild(newCustomerItem);

        // Save the new customer to local storage
        saveCustomerToLocalStorage(customerName, { name: customerName, email: customerEmail });

        // Clear the form
        addCustomerForm.reset();
    });

    function saveCustomerToLocalStorage(customerName, customerDetails) {
        // Get existing customers from local storage
        const existingCustomers = JSON.parse(localStorage.getItem('Customers')) || {};

        // Add the new customer
        existingCustomers[customerName] = customerDetails;

        // Save the updated customers to local storage
        localStorage.setItem('Customers', JSON.stringify(existingCustomers));
    }

    function removeCustomerFromLocalStorage(customerName) {
        // Get existing customers from local storage
        const existingCustomers = JSON.parse(localStorage.getItem('Customers')) || {};

        // Remove the customer
        delete existingCustomers[customerName];

        // Save the updated customers to local storage
        localStorage.setItem('Customers', JSON.stringify(existingCustomers));
    }

    function loadCustomersFromLocalStorage() {
        // Get existing customers from local storage
        const existingCustomers = JSON.parse(localStorage.getItem('Customers')) || {};

        // Display existing customers in the list
        for (const customerName in existingCustomers) {
            const customerDetails = existingCustomers[customerName];

            // Create a new customer list item
            const newCustomerItem = document.createElement('li');
            newCustomerItem.className = 'customer-item';
            newCustomerItem.textContent = `${customerDetails.name} - ${customerDetails.email}`;

            // Add delete button to remove the customer
            const deleteButton = document.createElement('button');
            deleteButton.className = 'btn btn-sm btn-danger float-right';
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function () {
                customerList.removeChild(newCustomerItem);

                // Remove the customer from local storage
                removeCustomerFromLocalStorage(customerName);
            });

            newCustomerItem.appendChild(deleteButton);
            customerList.appendChild(newCustomerItem);
        }
    }
});
