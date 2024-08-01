const sendNotification = (req, res) => {
    const { contact, message } = req.body;

    // Simulate sending a notification
    console.log(`Notification sent to ${contact}: ${message}`);

    res.status(200).json({ success: true, message: 'Notification sent' });
};

module.exports = {
    sendNotification,
};