let reminderInterval;
let visualNotification = false;
let audioNotification = false;
let customMessage = "";

function setReminder() {
    const intervalInput = document.getElementById("intervalInput").value;
    const visualCheckbox = document.getElementById("visualCheckbox");
    const audioCheckbox = document.getElementById("audioCheckbox");
    const customMessageCheckbox = document.getElementById("customMessageCheckbox");
    const customMessageInput = document.getElementById("customMessageInput");

    if (intervalInput && (visualCheckbox.checked || audioCheckbox.checked || customMessageCheckbox.checked)) {
        reminderInterval = setInterval(() => {
            showNotification();
        }, intervalInput * 60 * 1000);

        visualNotification = visualCheckbox.checked;
        audioNotification = audioCheckbox.checked;
        customMessage = customMessageCheckbox.checked ? customMessageInput.value : "";

        alert("Reminder set successfully!");
    } else {
        alert("Please enter the interval and select at least one notification option.");
    }
}

function showNotification() {
    let notificationMessage = "Time for a glass of water!";
    if (customMessage) {
        notificationMessage = customMessage;
    }

    if (visualNotification) {
        // Implement visual notification (e.g., pop-up, badge)
        alert(notificationMessage);
    }

    if (audioNotification) {
        // Implement audio notification (e.g., sound alert)
        // You can use the Web Audio API or HTML5 Audio element for this.
        // Example: new Audio('path/to/sound.mp3').play();
    }
}

