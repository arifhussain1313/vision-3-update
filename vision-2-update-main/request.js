document.getElementById('open-box-btn').addEventListener('click', function() {
  // Hide all service boxes
  document.querySelectorAll('.service-box').forEach(function(box) {
    box.style.display = 'none';
  });

  // Get the selected service
  var selectedService = document.getElementById('service-Select').value;

  // Show the selected service box
  if (selectedService) {
    document.getElementById(selectedService).style.display = 'block';
  }
});

// notification count 
document.addEventListener('DOMContentLoaded', function() {
    const serviceSelect = document.getElementById('service-Select');
    const submitBtns = document.getElementsByClassName('submit-btn');
    const notificationIcon = document.getElementById('notification-icon');
    const notificationCount = document.getElementById('notification-count');
    let selectedServicesCount = 0;

    Array.from(submitBtns).forEach(submitBtn => {
        submitBtn.addEventListener('click', function(event) {
            event.preventDefault();

            if (serviceSelect.value !== "") {
                selectedServicesCount++;
                updateNotificationCount();
                addNotification(serviceSelect.options[serviceSelect.selectedIndex].text);
                serviceSelect.value = ""; // Reset the dropdown after selection
            }

            // Get selected checkboxes
            const selectedOffers = [];
            const offers = this.parentElement.querySelectorAll('input[name="offer"]:checked');
            offers.forEach(function(offer) {
                selectedOffers.push(offer.value);
            });

            // Store the selected service and selected checkboxes in localStorage
            localStorage.setItem("selectedService", serviceSelect.value);
            localStorage.setItem("selectedOffers", JSON.stringify(selectedOffers));

            localStorage.setItem("selectedService", serviceSelect.value);
localStorage.setItem("selectedOffers", JSON.stringify(selectedOffers));
console.log("Selected Service:", serviceSelect.value);
console.log("Selected Offers:", selectedOffers);


            // Redirect to pr.html
            window.location.href = "pr.html";
        });
    });

    function updateNotificationCount() {
        notificationCount.textContent = selectedServicesCount;
    }
    // notification list 
    function addNotification(service) {
        const notificationList = document.getElementById('notification-list');
        const li = document.createElement('li');
        li.textContent = `Service selected: ${service}`;
        notificationList.appendChild(li);
    }

    notificationIcon.addEventListener('click', function() {
        const notificationDropdown = document.getElementById('notification-dropdown');
        notificationDropdown.classList.toggle('show');
    });
});
