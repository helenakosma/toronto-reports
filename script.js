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

    //Reset form fields in case user wants to make another submission
    document.getElementById("reportForm").reset();

    //Reset the button shadows (figure this part out)
    document.getElementById("icon1").reset();
    document.getElementById("icon2").reset();
    document.getElementById("icon3").reset();
    document.getElementById("icon4").reset();
    document.getElementById("icon5").reset();
    document.getElementById("icon6").reset();
});

function submitReport() {
    const form = document.querySelector("form"); 

    console.log("Report submitted via custom handling (AJAX or other).");

}

document.getElementById("submitButton").addEventListener("click", function(event) {
    event.preventDefault();
    showConfirmationPopup();  
});

function selectIcon(iconId) {
    // Clear the selected state of all icons
    const allIcons = document.querySelectorAll('.icon');
    allIcons.forEach(icon => {
      icon.classList.remove('selected');
    });
  
    // Select the clicked icon and update the hidden input
    const selectedIcon = document.getElementById('icon' + iconId);
    selectedIcon.classList.add('selected');
  
    // Update the hidden input field with the selected icon ID
    document.getElementById('selectedIcon').value = iconId;
  }
  
