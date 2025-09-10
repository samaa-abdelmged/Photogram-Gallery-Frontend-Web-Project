// Open modal and show clicked image
function openModal(img) {
    const modal = document.getElementById("myModal");
    const modalImage = document.getElementById("modalImage");

    modal.style.display = "flex";
    modalImage.src = img.src;
}

// Close modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}


// Close modal with Escape key
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

