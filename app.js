    const shareOption = document.querySelector('.share-option');
    let shareButton = document.querySelector('.share-button');
    shareButton.addEventListener('click', function () {
      this.classList.toggle('active');
      shareOption.classList.toggle('active');
    });