
let todos: string[] = [];

interface interfacename {
    content: string;
    checked: boolean;
}

let todo: interfacename = {
    content: "",
    checked: true,

}

var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;

inputDOMElement = document.querySelector("#inputTodo");
addButtonDOMElement = document.querySelector("#addButton");
todosDOMElement = document.querySelector("#todos");
counterDOMElement = document.querySelector("#counter");


addButtonDOMElement.addEventListener("click", addTodo);

   
drawListToDOM();


function drawListToDOM(): void {
    todosDOMElement.innerHTML = "";

    for (let index: number = 0; index < todos.length; index++) {

        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");

        todo.innerHTML =  "<span class='check " + todos[index] + "'><i class='fas fa-check'></i></span>"
                            + todos[index] +
                            "<span class='trash fas fa-trash-alt'></span>";

        
        todo.querySelector(".check").addEventListener("click", function(): void {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function(): void {
            deleteTodo(index);
        });

        todosDOMElement.appendChild(todo);
    }

    updateCounter();
}

function updateCounter(): void {
    counterDOMElement.innerHTML = todos.length + " in total";
}

function addTodo(): void {
   
    if (input.value != "") {
       
        todos.push(inputDOMElement.value, false);
        
        inputDOMElement.value = "";

        drawListToDOM();
    }
}

function toggleCheckState(index: number, index: string): void {
    todos[index] = !todos[index];
    drawListToDOM();
}


function deleteTodo(index: number): void {
    todos.splice(index, 1);
    
    drawListToDOM();
}