var todos = [];
var todo = {
    content: "",
    checked: true,
};
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
inputDOMElement = document.querySelector("#inputTodo");
addButtonDOMElement = document.querySelector("#addButton");
todosDOMElement = document.querySelector("#todos");
counterDOMElement = document.querySelector("#counter");
addButtonDOMElement.addEventListener("click", addTodo);
drawListToDOM();
function drawListToDOM() {
    todosDOMElement.innerHTML = "";
    var _loop_1 = function (index) {
        var todo_1 = document.createElement("div");
        todo_1.classList.add("todo");
        todo_1.innerHTML = "<span class='check " + todos[index] + "'><i class='fas fa-check'></i></span>"
            + todos[index] +
            "<span class='trash fas fa-trash-alt'></span>";
        todo_1.querySelector(".check").addEventListener("click", function () {
            toggleCheckState(index);
        });
        todo_1.querySelector(".trash").addEventListener("click", function () {
            deleteTodo(index);
        });
        todosDOMElement.appendChild(todo_1);
    };
    for (var index = 0; index < todos.length; index++) {
        _loop_1(index);
    }
    updateCounter();
}
function updateCounter() {
    counterDOMElement.innerHTML = todos.length + " in total";
}
function addTodo() {
    if (input.value != "") {
        todos.push(inputDOMElement.value, false);
        inputDOMElement.value = "";
        drawListToDOM();
    }
}
function toggleCheckState(index, index) {
    todos[index] = !todos[index];
    drawListToDOM();
}
function deleteTodo(index) {
    todos.splice(index, 1);
    drawListToDOM();
}
//# sourceMappingURL=script.js.map