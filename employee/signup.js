var buttonRegister = document.querySelector('.btn');

function userDetails(){
    event.preventDefault();

    var fullName = document.getElementById('registerName').value;
    var email = document.getElementById('registerEmail').value;
    var password = document.getElementById('registerPassword').value;
    var confirmPassword = document.getElementById('registerConfirmPassword').value;
    var department = document.getElementById('department').value;


    const user = {
        fullName,
        email,
        password,
        confirmPassword,
        department
    }

    try{
        localStorage.setItem('user', JSON.stringify(user))

        if (localStorage.getItem('user') !== null) {
            window.location.href = "/admin/login.html";
        }
    }catch(err){
        console.error("Error storing data:", error);
        // window.location.href = 'login.html';
    }
}

buttonRegister.addEventListener('click', userDetails);