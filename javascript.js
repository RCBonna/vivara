function openModal(imageUrl) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");

    modal.style.display = "block";
    modalImg.src = imageUrl;
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
