document.addEventListener('DOMContentLoaded', function() {
    var popupLink = document.querySelector('.task2');
    var popup = document.querySelector('.overlay');
    var closeButton = document.querySelector('.close');
  
    popupLink.addEventListener('click', function(e) {
      e.preventDefault();
      popup.style.display = 'block';
    });
  
    closeButton.addEventListener('click', function(e) {
      e.preventDefault();
      popup.style.display = 'none';
    });
  });