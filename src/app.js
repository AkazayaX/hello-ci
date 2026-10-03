const express = require('express');
const { addTask, getTasks } = require('./taskManager');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send(' ');
});

app.get('/tasks', (req, res) => {
res.json(getTasks());
});

app.post('/tasks', (req, res) => {
try {
const task = addTask(req.body.title);
res.status(201).json(task);
} catch (err) {
res.status(400).json({ error: err.message });
}
});

if (require.main === module) {
app.listen(PORT, () => console.log(Server running on port ${PORT}));
}

module.exports = app;