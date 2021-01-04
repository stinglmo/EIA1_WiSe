var _todo = {
    content: "",
    checked: true,
};
var todos = [
    {
        content: "Lorem",
        checked: true
    },
    {
        content: "Ipsum",
        checked: false
    },
    {
        content: "Dolor",
        checked: false
    }
];
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
var doneDOMElement;
var leftDOMElement;
inputDOMElement = document.querySelector("#inputTodo");
addButtonDOMElement = document.querySelector("#addButton");
todosDOMElement = document.querySelector("#todos");
counterDOMElement = document.querySelector("#counter");
doneDOMElement = document.querySelector("#done");
leftDOMElement = document.querySelector("#left");
addButtonDOMElement.addEventListener("click", addTodo);
drawListToDOM();
function drawListToDOM() {
    todosDOMElement.innerHTML = "";
    var _loop_1 = function (index) {
        var todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + todos[index] + "'><i class='fas fa-check'></i>class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function () {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            deleteTodo(index);
        });
        // Bis hier hin wurde das neue Todo "zusammengebaut", jetzt wird es in den DOM gerendert.
        todosDOMElement.appendChild(todo);
    };
    for (var index = 0; index < todos.length; index++) {
        _loop_1(index);
    }
    updateCounter();
    updatedone();
    updateleft();
}
// ToDos Counter:
function updateCounter() {
    counterDOMElement.innerHTML = todos.length + " in total";
}
function updatedone() {
    var done = 0;
    for (var index = 0; index < todos.length; index++) {
        if (todos[index].checked == true)
            done++;
    }
    doneDOMElement.innerHTML = done + " done";
}
function updateleft() {
    var left = 0;
    for (var index = 0; index < todos.length; index++) {
        if (todos[index].checked == false)
            left++;
    }
    leftDOMElement.innerHTML = left + " left";
}
// Funktion für neues ToDo:
function addTodo() {
    if (inputDOMElement.value != "") {
        todos.push({
            content: inputDOMElement.value,
            checked: false
        });
        inputDOMElement.value = "";
        drawListToDOM();
    }
}
// Funktion für checked bzw. unchecked:
function toggleCheckState(index) {
    todos[index].checked = !todos[index].checked;
    drawListToDOM();
}
// Funktion Löschen: 
function deleteTodo(index) {
    todos.splice(index, 1);
    drawListToDOM();
}
//# sourceMappingURL=script.js.map