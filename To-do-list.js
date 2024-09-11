const todolist=[
  {name:'HTML,CSS,javaScript',
    dueDate:'30-08-2024'},
  {name:'FullStackDEveloper',
    dueDate:'30-12-2024'}];
rendertodolist();

function rendertodolist(){
let todolistHTML = '';
for (let i=0; i< todolist.length; i++){
  const todoObject = todolist[i];

 // const name=todoObject.name;
  // const dueDate = todoObject.dueDate;

  //const {name} = todoObject;
  //const {dueDate} = todoObject;

  const {name,dueDate} = todoObject;

  const HTML = `
  <div> ${name}</div>
  <div> ${dueDate} </div>
  <button onclick ="
  todolist.splice(${i},1);
  rendertodolist();"
  class = "delete-todo-button"> Delete </button>`;
  todolistHTML += HTML;
  }
  console.log(todolistHTML);
  document.querySelector('.js-todo-list')
  .innerHTML=todolistHTML;
}

function addtodo(){
  const inputElement = document.querySelector('.js-name-input');

  const name = inputElement.value;

  const dueDateinputElement = document.querySelector('.js-due-date-input');

  const dueDate = dueDateinputElement.value;


  todolist.push({name,dueDate});
  console.log(todolist);

inputElement.value='';
rendertodolist();
}