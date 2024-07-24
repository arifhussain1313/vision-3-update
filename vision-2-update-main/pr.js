const notificationContainer = document.getElementById('notification-container');
const notification = localStorage.getItem('notification');

if (notification) {
  notificationContainer.innerHTML = `You have a notification: ${notification}`;
}
