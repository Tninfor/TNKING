function sendNotification(message) {
    if (Notification.permission === "granted") {
        new Notification(message);
    } else {
        Notification.requestPermission().then(permission => {
           
