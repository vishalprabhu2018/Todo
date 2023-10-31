//selectors
const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');

//event listerner
todoButton.addEventListener('click',addTodo)

//functions

function addTodo(event){
   //prevent form from submitting   
    event.preventDefault();
  
    //todo div
    const todoDiv=document.createElement('div');
      todoDiv.classList.add('todo');

    //Create LI
    const newTodo=document.createElement('li');
    newTodo.innerText='hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
     
    //Check Mark button
    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    const trashButton=document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //APPEND TO THE lIST
   todoList.appendChild(todoDiv);
}