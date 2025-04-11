function showConfirmationPopup() {
    const confirmationPopup = document.getElementById("confirmationButton");
    confirmationPopup.style.display = "flex"; 
}

function hideConfirmationPopup() {
    const confirmationPopup = document.getElementById("confirmationButton");
    confirmationPopup.style.display = "none"; 
}

document.getElementById("cancelButton").addEventListener("click", function() {
    hideConfirmationPopup(); 
});

function submitReport() {
    const form = document.querySelector("form"); 
    const notificationChoice = document.querySelector('input[name="notifications"]:checked');

    if (!notificationChoice) {
        alert("Please select whether you want notifications.");
        return false;
    }

    return true;
}

document.getElementById("confirmButton").addEventListener("click", function() {
    if (submitReport()) {

    alert("Submitted successfully!"); 

    hideConfirmationPopup(); 

    document.getElementById("reportForm").reset();

    selectIcon(null);
    location.reload();
    }

    
});

document.getElementById("submitButton").addEventListener("click", function(event) {
    event.preventDefault();
    showConfirmationPopup();  
});

function selectIcon(iconId) {
    const allIcons = document.querySelectorAll('.icon');
    allIcons.forEach(icon => {
      icon.classList.remove('selected');
    });
  
    const selectedIcon = document.getElementById('icon' + iconId);
    selectedIcon.classList.add('selected');
  
    document.getElementById('selectedIcon').value = iconId;
  }
  
  const severitySlider = document.getElementById('severity');
  const severityValue = document.getElementById('severity-value');
  
  const severityLevels = ["Low", "Moderate", "High", "Severe"];
  
  severityValue.textContent = severityLevels[severitySlider.value - 1];
  
  severitySlider.addEventListener('input', function() {
      const value = severitySlider.value;
      severityValue.textContent = severityLevels[value - 1]; 
  });
  

