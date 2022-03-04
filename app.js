const shareOption = document.querySelector('.options');
    let shareButton = document.querySelector('.icon');
    shareButton.addEventListener('click', function () {
      this.classList.toggle('active');
      shareOption.classList.toggle('active');
    });