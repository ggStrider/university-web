// user name
const usernameInput = document.getElementById('usernameInput');
const saveUsernameButton = document.getElementById('saveUsername');
const greeting = document.getElementById('greeting');

function updateGreeting() {

    const name = localStorage.getItem('username');
    if(name) {

        greeting.textContent = `Hello, ${name}!`;
    }
    else {
        greeting.textContent = ``;
    }
}

saveUsernameButton.addEventListener('click', () => {

    localStorage.setItem('username', usernameInput.value);
    updateGreeting();
});

updateGreeting();

//view count
const viewCountElem = document.getElementById('viewCount');
let views = sessionStorage.getItem('views') || 0;
views = parseInt(views) + 1;
sessionStorage.setItem('views', views);
viewCountElem.textContent = `You have viewed this page ${views} times this session.`;

//todo list
const todoInput = document.getElementById('todoInput');
const addTodoButton = document.getElementById('addTodo');
const todoList = document.getElementById('todoList');

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]');
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.textContent = todo;
        li.addEventListener('click', () => {
            todos.splice(index, 1);
            localStorage.setItem('todos', JSON.stringify(todos));
            loadTodos();
        });
        todoList.appendChild(li);
    });
}

addTodoButton.addEventListener('click', () => {

    const todos = JSON.parse(localStorage.getItem('todos') || '[]');
    if(todoInput.value.trim() !== '') {
        todos.push(todoInput.value.trim());
        localStorage.setItem('todos', JSON.stringify(todos));
        todoInput.value = '';
        loadTodos();
    }
});

loadTodos();

// clear all
const clearAllButton = document.getElementById('clearAll');
clearAllButton.addEventListener('click', () => {
    localStorage.clear();
    sessionStorage.clear();
    updateGreeting();
    viewCountElem.textContent = '';
    todoList.innerHTML = '';
});

// listen other tabs (if changing on another tab)
window.addEventListener('storage', (event) => {
    if(event.key === 'username' || event.key === 'todos') {
        updateGreeting();
        loadTodos();
    }
});
