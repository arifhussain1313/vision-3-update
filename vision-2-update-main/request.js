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
  console.log("DOM fully loaded and parsed");

  const serviceSelect = document.getElementById('service-Select');
  const submitBtns = document.getElementsByClassName('submit-btn');
  const notificationIcon = document.getElementById('notification-icon');
  const notificationCount = document.getElementById('notification-count');
  const notificationDropdown = document.getElementById('notificationDropdown');
  const notificationList = document.getElementById('notification-list');
  let selectedServicesCount = 0;

  document.getElementById('open-box-btn').addEventListener('click', function() {
      console.log("Open box button clicked");

      // Hide all service boxes
      document.querySelectorAll('.service-box').forEach(function(box) {
          box.style.display = 'none';
      });

      // Get the selected service
      var selectedService = serviceSelect.value;
      console.log("Selected service:", selectedService);

      // Show the selected service box
      if (selectedService) {
          document.getElementById(selectedService).style.display = 'block';
      }
  });

  Array.from(submitBtns).forEach(submitBtn => {
      submitBtn.addEventListener('click', function(event) {
          event.preventDefault();
          console.log("Submit button clicked");

          const selectedService = serviceSelect.value;
          console.log("Selected service before reset:", selectedService);

          if (selectedService !== "") {
              selectedServicesCount++;
              updateNotificationCount();
              addNotification(serviceSelect.options[serviceSelect.selectedIndex].text, getSelectedOffers(this));
              serviceSelect.value = ""; // Reset the dropdown after selection
          }

          // Get selected checkboxes
          const selectedOffers = getSelectedOffers(this);

          // Store the selected service and selected checkboxes in localStorage
          localStorage.setItem("selectedService", selectedService);
          localStorage.setItem("selectedOffers", JSON.stringify(selectedOffers));

          console.log("Stored selected service:", selectedService);
          console.log("Stored selected offers:", selectedOffers);

          // Redirect to pr.html
          window.open("pr.html","_blank");
      });
  });

  function getSelectedOffers(context) {
      const selectedOffers = [];
      const offers = context.parentElement.querySelectorAll('input[name="offer"]:checked');
      offers.forEach(function(offer) {
          selectedOffers.push(offer.value);
      });
      return selectedOffers;
  }

  function updateNotificationCount() {
      notificationCount.textContent = selectedServicesCount;
  }
// notification drop down list
function addNotification(service, offers) {
  const notificationItem = document.createElement('div');
  notificationItem.classList.add('notification-item');
  notificationItem.innerHTML = `
    <span class="service-name">${service}</span>
    <span class="offer-name">${offers.join(", ")}</span>
    <button class="send-btn">Send</button>
  `;
  notificationList.appendChild(notificationItem);

  // Store the notification in localStorage
  let notifications = JSON.parse(localStorage.getItem('notifications')) || [];
  notifications.push({ service, offers });
  localStorage.setItem('notifications', JSON.stringify(notifications));

  // Add event listener to send button
  const sendBtn = notificationItem.querySelector('.send-btn');
  sendBtn.addEventListener('click', function() {
    // Send the selected service and offer
    const selectedService = service;
    const selectedOffer = offers.join(", ");
    console.log(`Sending ${selectedService} with offer ${selectedOffer}`);

    // You can add your logic to send the data here
    // For example, you can make an AJAX request to a server
    // or use a messaging service like Firebase Cloud Messaging
  });
}

function loadNotifications() {
  const notifications = JSON.parse(localStorage.getItem('notifications')) || [];
  notificationList.innerHTML = '';
  notifications.forEach(notification => {
    const notificationItem = document.createElement('div');
    notificationItem.classList.add('notification-item');
    notificationItem.innerHTML = `
      <span class="service-name">${notification.service}</span>
      <span class="offer-name">${notification.offers[0]}</span>
    `;
    // const sendBtn = document.createElement('button');
    // sendBtn.classList.add('send-btn');
    sendBtn.textContent = 'Send';
    sendBtn.addEventListener('click', function() {
      const selectedService = notification.service;
      const selectedOffer = notification.offers[0];
      console.log(`Sending ${selectedService} with offer ${selectedOffer}`);
      // Add your logic to send the data here
      // For example, you can make an AJAX request to a server
      // or use a messaging service like Firebase Cloud Messaging
    });
    // notificationItem.appendChild(sendBtn);
    notificationList.appendChild(notificationItem);
  });
}

  notificationIcon.addEventListener('click', function() {
    notificationDropdown.classList.toggle('show');
    loadNotifications();
  });
});