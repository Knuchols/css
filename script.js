function openModal(title, description) {

    document.getElementById("modalTitle").innerText = title;

    document.getElementById("modalDescription").innerText = description;

    document.getElementById("projectModal").style.display = "block";
}

function closeModal() {

    document.getElementById("projectModal").style.display = "none";
}

window.onclick = function(event) {

    const modal = document.getElementById("projectModal");

    if (event.target === modal) {
        modal.style.display = "none";
    }
};