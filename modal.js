function openModal(gifUrl) {
    var modal = document.getElementById("myModal");
    var modalContent = document.querySelector(".modal-content");
    var modalImg = document.querySelector(".modal-content img");
  
    modalImg.src = gifUrl;
    modal.style.display = "block";
    document.addEventListener("keydown", closeModalOnEscKey);
  
    function closeModalOnEscKey(event) {
      if (event.key === "Escape") {
        closeModal();
      }
    }
  
    function closeModal() {
      modal.style.display = "none";
      document.removeEventListener("keydown", closeModalOnEscKey);
    }
  
    // Listen for clicks outside of the modal
    document.addEventListener("mousedown", function(event) {
      // Check if the click is outside of the modal content
      if (!modalContent.contains(event.target)) {
        closeModal();
      }
    });
  }
  