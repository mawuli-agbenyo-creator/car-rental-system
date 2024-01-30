const btn = document.querySelectorAll(".bookBtn");

function booked() {
    alert("Booking successful");
}

btn.forEach((button) => {
    button.addEventListener("click", booked);
});



