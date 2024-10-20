// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn'); // Button to add a task
    const taskInput = document.getElementById('task-input');   // Input field for task
    const taskList = document.getElementById('task-list');     // List to display tasks

    // Function to add a new task
    const addTask = () => {
        // Retrieve and trim the input value
        const taskText = taskInput.value.trim();

        // Check if the input is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return; // Exit the function if the input is empty
        }

        // Create a new list item
        const li = document.createElement('li'); // Create a new <li> element
        li.textContent = taskText;               // Set the text content to the task text

        // Create a remove button
        const removeButton = document.createElement('button'); // Create a new button
        removeButton.textContent = "Remove";      // Set the button text
        removeButton.className = 'remove-btn';    // Assign a class name to the button

        // Add event listener for removing the task
        removeButton.onclick = () => {
            taskList.removeChild(li); // Remove the <li> from the task list
        };

        // Append the remove button to the list item
        li.appendChild(removeButton);   // Append the button to the <li>

        // Append the list item to the task list
        taskList.appendChild(li);       // Add the <li> to the task list

        // Clear the input field
        taskInput.value = '';           // Reset the input field
    };

    // Attach event listeners
    addButton.addEventListener('click', addTask); // Add task on button click
    taskInput.addEventListener('keypress', (event) => {
        // Add task when the 'Enter' key is pressed
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
