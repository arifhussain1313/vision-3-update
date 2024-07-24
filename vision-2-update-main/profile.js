// Query selector for profile-dropdown-list and profile-dropdown-btn
const profileDropdownList = document.querySelector('.profile-dropdown-list');
const profileDropdownBtn = document.querySelector('.profile-dropdown-btn');

// Class list
const classList = profileDropdownList.classList;

// Toggle function for profile-dropdown-list
const toggle = () => classList.toggle('active');

// Event listener and function for profile-dropdown-list onclick
window.addEventListener('click', (e) => {
  if (!profileDropdownBtn.contains(e.target)) classList.remove('active');
});

// Function for input user image
const profileImageInput = document.getElementById('profileImage');

profileImageInput.addEventListener('change', (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
  }
});