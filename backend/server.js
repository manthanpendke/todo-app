const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const tasksRoutes = require('./routes/tasks');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/tasks', tasksRoutes);

// Serve frontend build
app.use(express.static(path.join(__dirname, '../frontend/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
