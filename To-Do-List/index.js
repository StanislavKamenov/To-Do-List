let AddButton = document.querySelector('.AddButton');
let ToDoList = document.querySelector('.ToDoList');
let type = document.querySelector('.type');


function saveTasks() {
    let tasks = [];
    document.querySelectorAll('.TaskText').forEach(taskText => {
        tasks.push(taskText.textContent);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function loadTasks() {
    let tasks = localStorage.getItem('tasks');
    if (tasks) {
        tasks = JSON.parse(tasks);
        tasks.forEach(task => {
            createTaskElement(task);
        });
    }
}


function createTaskElement(taskTextContent) {
    let taskContainer = document.createElement('div');
    taskContainer.classList.add('TaskContainer');

    let EditButton = document.createElement('button');
    EditButton.textContent = 'Edit';
    EditButton.classList.add('TaskButton');

    let DeleteButton = document.createElement('button');
    DeleteButton.textContent = 'Delete';
    DeleteButton.classList.add('TaskButton');

    let taskText = document.createElement('span');
    taskText.textContent = taskTextContent;
    taskText.classList.add('TaskText');

    taskContainer.appendChild(taskText);
    taskContainer.appendChild(DeleteButton);
    taskContainer.appendChild(EditButton);

    ToDoList.appendChild(taskContainer);

    taskContainer.classList.add('Task');

    DeleteButton.addEventListener('click', function () {
        taskContainer.remove();
        saveTasks();
    });

    EditButton.addEventListener('click', function () {
        let newText = prompt('Enter new text:', taskText.textContent);
        if (newText !== null && newText.trim() !== '') {
            taskText.textContent = newText;
            saveTasks();
        }
    });
}

loadTasks();

AddButton.addEventListener('click', function () {
    let taskTextContent = type.value.trim();
    if (taskTextContent !== '') {
        createTaskElement(taskTextContent);
        saveTasks();
    }
});