document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent the form from submitting
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Email successfully sent!');
        // You can also add code here to send the email using JavaScript and a server-side language
    } else {
        alert('Please fill in all the required fields!');
    }
});