const taskInput = document.getElementById("taskInput");
const createTaskButton = document.getElementById("createTaskButton");
const taskList = document.getElementById("taskList");

createTaskButton.addEventListener("click", () => {

    createTask();
});

function createTask() {
    
    const taskText = taskInput.value;
    if (taskText === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;
    li.appendChild(span);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    li.appendChild(deleteButton);

    // complete task
    deleteButton.addEventListener("click", () => {
        span.style.textDecoration = "line-through";
        li.removeChild(deleteButton);
        taskList.appendChild(li);
    });

    taskList.prepend(li);
    taskInput.value = "";
}