function showNotification() {
    // Check if the browser supports notifications
    if ('Notification' in window) {
        // Request permission to show notifications
        Notification.requestPermission().then(function(permission) {
            if (permission === 'granted') {
                // Create a notification
                var notification = new Notification('Form Submitted!', {
                    body: 'Your form has been submitted successfully.'
                });

                // Close the notification after a few seconds (optional)
                setTimeout(function() {
                    notification.close();
                }, 5000);
            }
        });
    } else {
        alert('Notifications not supported in your browser.');
    }
}
