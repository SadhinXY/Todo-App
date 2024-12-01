let todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'webdev project with html, css and js'
}];


function loadPage() {
  
  renderTodoList();
  
  function renderTodoList() {
    let todoListHTML = ``;
  
    todoList.forEach((todo) => {
      todoListHTML += `
        <div class="todo-container">
          <div class="left-side">
            <input class="radio-selector" type="radio">
            <div class="todo-name">
              ${todo.name}
            </div>
          </div>
          <img class="delete-icon js-delete-icon" src="icons8-delete-24.png">
        </div>
      `
    })
  
    document.querySelector('.js-list-container').innerHTML = todoListHTML;
  }

  function saveToStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }
  
  function addTodo() {
    const value = document.querySelector('.js-text-box').value;
  
    if (value === '') {
      return
    } else {
      todoList.unshift({
        name: value
      });
    }
  
    saveToStorage();
    loadPage();
    document.querySelector('.js-text-box').value = '';
  }

  function deleteTodo(index) {
    todoList.splice(index, 1);
    saveToStorage();
    loadPage();
  }
  
  document.querySelector('.js-text-box')
    .addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        addTodo();
      }
    })
  
  document.querySelector('.js-add-button')
    .addEventListener('click', () => {
      addTodo();
    })
  
  document.querySelectorAll('.js-delete-icon')
    .forEach((deleteIcon, index) => {
      deleteIcon.addEventListener('click', () => {
        deleteTodo(index);
      })
    })

}

loadPage();




