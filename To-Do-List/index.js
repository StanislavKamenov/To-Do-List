let AddButton = document.querySelector('.AddButton');
let ToDoList = document.querySelector('.ToDoList');
let type = document.querySelector('.type');

AddButton.addEventListener('click', function() {
   
    let taskContainer = document.createElement('div');
    taskContainer.classList.add('TaskContainer');
    

    let EditButton = document.createElement('button');
    EditButton.textContent = 'Edit';
    EditButton.classList.add('TaskButton');
    
   
    let DeleteButton = document.createElement('button');
    DeleteButton.textContent = 'Delete';
    DeleteButton.classList.add('TaskButton');


    let taskText = document.createElement('span');
    taskText.textContent = type.value;
    taskText.classList.add('TaskText'); 

   
    taskContainer.appendChild(taskText);
    taskContainer.appendChild(DeleteButton);
    taskContainer.appendChild(EditButton);


    ToDoList.appendChild(taskContainer);


    taskContainer.classList.add('Task');

    
    DeleteButton.addEventListener('click', function() {
        taskContainer.remove();
    });

    EditButton.addEventListener('click', function() {
    
        let newText = prompt('Enter new text:', taskText.textContent);
        if (newText !== null && newText.trim() !== '') {
        
            taskText.textContent = newText;
        }
    });
    localStorage()
});

function localStorage(text, i ) {
    itemsArray[i] = text
    localStorage.setItem("Task", JSON.stringify(itemsArray))
    location.reload()
}