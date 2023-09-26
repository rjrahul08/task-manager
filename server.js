// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

// Define an initial set of tasks (for demonstration purposes).
let tasks = [
  { id: 1, text: 'Task 1' },
  { id: 2, text: 'Task 2' },
];

// Define API endpoints for CRUD operations on tasks.

// Get all tasks
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// Create a new task
app.post('/api/tasks', (req, res) => {
  const newTask = {
    id: Date.now(),
    text: req.body.text,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Update a task
app.put('/api/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const updatedText = req.body.text;

  tasks = tasks.map((task) =>
    task.id === taskId ? { ...task, text: updatedText } : task
  );

  res.json({ message: 'Task updated successfully' });
});

// Delete a task
app.delete('/api/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  tasks = tasks.filter((task) => task.id !== taskId);
  res.json({ message: 'Task deleted successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
