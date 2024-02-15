document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task');
    const addButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    addButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        taskList.appendChild(li);
        taskInput.value = '';
    });

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addButton.click();
        }
    });
});
