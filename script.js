// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    
    // Create new list item
    const listItem = document.createElement('li');
    
    // Create task text span
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    
    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    
    // Add click event to delete button
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });
    
    // Append elements to list item
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);
    
    // Append list item to task list
    taskList.appendChild(listItem);
    
    // Clear input field
    taskInput.value = '';
    taskInput.focus();
}

// Add event listener to Add button
addButton.addEventListener('click', addTask);

// Add event listener to input field (Enter key)
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

