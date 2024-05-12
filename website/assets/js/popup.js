// Function to open the popup
function openPopup(popupId) {
    var popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = "block";
    }
}

// Function to close the popup
function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = "none";
    }
}

// Add click event listener to the parent container
document.addEventListener("click", function(event) {
    var target = event.target;
    if (target.classList.contains("custom-btn")) {
        var popupId = target.getAttribute("data-popup");
        openPopup(popupId);
    }
    
    if (target.classList.contains("close")) {
        var popupId = target.closest(".popup").id;
        closePopup(popupId);
    }
});
