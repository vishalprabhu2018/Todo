//selectors
const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');
const filterOption=document.querySelector('.filter-todo');

//event listerner
document.addEventListener('DOMContentLoaded',getTodos)
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);

//functions

function addTodo(event){
   //after submitting the page always refreshes so to prevent this we uses this below function
    event.preventDefault();
  
    //todo div
    const todoDiv=document.createElement('div');
      todoDiv.classList.add('todo');

    //Create li
    const newTodo=document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
     
    //Add todo to local storag3e 
     saveLocalTodos(todoInput.value);
   
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

   //Clear  todo input value
   todoInput.value='';
}

function deleteCheck(e){
    const item=e.target;

    //DELETE TODO
    if (item.classList[0]==='trash-btn'){
        const todo=item.parentElement;
        //Animation
        todo.classList.add('fall');  //to create an class for transition
        
        removeLocalTodos(todo);
        
        todo.addEventListener('transitionend',function(){
            todo.remove();  //it will wait until the animation is finished and then remove it.
        });
     }

     //CheckMark
     if (item.classList[0]==='complete-btn'){
        const todo=item.parentElement;
        todo.classList.toggle('completed');
     }
}


function filterTodo(e){
   let todos=todoList.childNodes;
   todos.forEach(function(todo){
      switch(e.target.value){
         case "all":
            todo.style.display='flex';
            break;

         case 'completed':
            if(todo.classList.contains('completed')){
               todo.style.display='flex';
            }else{
               todo.style.display='none';
            }  
            break;
         
         case 'uncompleted': 
            if(!todo.classList.contains("completed")){
               todo.style.display='flex'; 
            }else{
               todo.style.display='none';
            }
            break;
    
      }
   })
}


function saveLocalTodos(todo){
   //Check --do I already have things in there?
   let todos;
   if(localStorage.getItem('todos')===null){
      todos=[];
   }else{
      todos=JSON.parse(localStorage.getItem('todos'));
   }
   todos.push(todo);
   localStorage.setItem('todos', JSON.stringify(todos));
}


//localStorage.clear();

//To delete todos from localStorage
function getTodos(){
   // console.log('hello')

   //Check --do I already have things in there?
   let todos;
   if(localStorage.getItem('todos')===null){
      todos=[];
   }else{
      todos=JSON.parse(localStorage.getItem('todos'));
   }

  todos.forEach(function(todo){
   const todoDiv=document.createElement('div');
   todoDiv.classList.add('todo');

 //Create li
 const newTodo=document.createElement('li');

 //updated
 newTodo.innerText=todo;


 newTodo.classList.add('todo-item');
 todoDiv.appendChild(newTodo);
  
 //Add todo to local storag3e 
//   saveLocalTodos(todoInput.value);

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

  })

}


function removeLocalTodos(todo){
   
   //Check --do I already have things in there?
   let todos;
   if(localStorage.getItem('todos')===null){
      todos=[];
   }else{
      todos=JSON.parse(localStorage.getItem('todos'));
   }

   // console.log(todo.children[0].innerText);// 1:08:20
   const todoIndex=todo.children[0].innerText;

   // console.log(todos.indexOf("apple"));
   todos.splice(todos.indexOf(todoIndex), 1)

   localStorage.setItem('todos',JSON.stringify(todos))
}