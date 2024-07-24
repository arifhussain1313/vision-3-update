// onclick open the rlated box of each srvice
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
    const submitBtn = document.getElementById('submit-btn');
    const notificationIcon = document.getElementById('notification-icon');
    const notificationCount = document.getElementById('notification-count');
    let selectedServicesCount = 0;
  
    submitBtn.addEventListener('click', function(event) {
      event.preventDefault();
  
      if (serviceSelect.value !== "") {
        selectedServicesCount++;
        updateNotificationCount();
        addNotification(serviceSelect.options[serviceSelect.selectedIndex].text);
        serviceSelect.value = ""; // Reset the dropdown after selection
      }
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
  




//   alert to pr.html

document.getElementById("submit-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get the selected service
    var selectedService = document.getElementById("service-Select").value;
  
    // Store the selected service in localStorage
    localStorage.setItem("selectedService", selectedService);
  
    // Redirect to pr.html
    window.location.href = "pr.html";
  });

  