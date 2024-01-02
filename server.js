process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason);
});

const express = require('express');
const cors = require('cors');  // Add this line

const app = express();
const PORT = 3000;

// Use cors middleware
app.use(cors());  // Add this line

// Assuming eventsData is an array or database containing event details
const eventsData = [
    { id: 'event1', videoId: 'NkqxnZf9yqg' },
    { id: 'event2', videoId: 'kZwg8U_RCsg' },
    // Add more events as needed
];

app.get('/getVideo/:eventId', (req, res) => {
    const eventId = req.params.eventId;
    const event = eventsData.find(event => event.id === eventId);

    if (!event) {
        return res.status(404).json({ error: 'Event not found' });
    }

    res.json({ videoId: event.videoId });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});