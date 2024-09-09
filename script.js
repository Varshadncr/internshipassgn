// JavaScript to handle full-page image display
document.getElementById("loginBtn").addEventListener("click", function() {
    document.getElementById("fullPageImageOverlay").style.display = "flex";
});

// Close overlay when clicked
document.getElementById("fullPageImageOverlay").addEventListener("click", function() {
    document.getElementById("fullPageImageOverlay").style.display = "none";
});
