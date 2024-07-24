document.querySelector('.change-profile-image').addEventListener('click', function() {
    document.querySelector('.profile-image-upload').click();
  });
  
  document.querySelector('.profile-image-upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = function(e) {
      const img = document.querySelector('.profile-image');
      img.src = e.target.result;
    };
  
    reader.readAsDataURL(file);
  });