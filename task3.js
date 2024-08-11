document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const newTask = createTaskElement(taskText);
    document.getElementById('pendingTasks').appendChild(newTask);
    taskInput.value = '';
}

function createTaskElement(taskText) {
    const li = document.createElement('li');
    
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', markTaskComplete);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-button');
    editButton.addEventListener('click', editTask);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', deleteTask);

    li.appendChild(taskContent);
    li.appendChild(editButton);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    return li;
}

function markTaskComplete(event) {
    const taskItem = event.target.parentElement;
    taskItem.classList.add('completed');
    document.getElementById('completedTasks').appendChild(taskItem);
    taskItem.querySelector('button:nth-child(2)').remove();
    event.target.remove();
}

function deleteTask(event) {
    const taskItem = event.target.parentElement;
    taskItem.remove();
}

function editTask(event) {
    const taskItem = event.target.parentElement;
    const taskContent = taskItem.querySelector('span');
    const newTaskText = prompt('Edit Task:', taskContent.textContent);

    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskContent.textContent = newTaskText.trim();
    }
}
