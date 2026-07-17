document.getElementById("applicationForm").addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    // Check empty fields
    if(name=="" || email=="" || phone=="" || message==""){
        alert("Please fill in all fields.");
        return;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!email.match(emailPattern)){
        alert("Please enter a valid email address.");
        return;
    }

    // Phone validation (10 digits)
    let phonePattern = /^[0-9]{10}$/;

    if(!phone.match(phonePattern)){
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    alert("Application submitted successfully!");

    document.getElementById("applicationForm").reset();

});