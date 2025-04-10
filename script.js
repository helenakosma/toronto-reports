function showConfirmationPopup() {
    const confirmationPopup = document.getElementById("confirmationButton");
    confirmationPopup.style.display = "flex"; 
}

function hideConfirmationPopup() {
    const confirmationPopup = document.getElementById("confirmationButton");
    confirmationPopup.style.display = "none"; 
}

document.getElementById("cancelButton").addEventListener("click", function() {  // Fixed the syntax error here
    hideConfirmationPopup(); 
});

document.getElementById("confirmButton").addEventListener("click", function() {
    submitReport();

    alert("Submitted successfully!"); 

    hideConfirmationPopup(); 

    

});

function submitReport() {
    const form = document.querySelector("form"); 

    console.log("Report submitted via custom handling (AJAX or other).");

}

document.getElementById("submitButton").addEventListener("click", function(event) {
    event.preventDefault();
    showConfirmationPopup();  
});
