// Aufgabe 11 -> Sprachassistenten hinzufügen

// Interface und Objekt in einem Array erstellen:

namespace aufgabe11 {

        interface interfacename {
        content: string;
        checked: boolean;
    }

    let todos: interfacename[] = [
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


    var inputDOMElement: HTMLInputElement;
    var addButtonDOMElement: HTMLElement;
    var todosDOMElement: HTMLElement;
    var counterDOMElement: HTMLElement;
    var doneDOMElement: HTMLElement;
    var leftDOMElement: HTMLElement;

    // Felder mit erledigten und offenen ToDos -> done und left

    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    doneDOMElement = document.querySelector("#done");
    leftDOMElement = document.querySelector("#left");


    addButtonDOMElement.addEventListener("click", addTodo);
    drawListToDOM();

    // Todos werden zusammengebaut

    function drawListToDOM(): void {
        todosDOMElement.innerHTML = "";

        for (let index: number = 0; index < todos.length; index++) {

            let todo: HTMLElement = document.createElement("div");
            todo.classList.add("todo");

            todo.innerHTML =  "<span class='check " + todos[index].checked + "'><i class='fas fa-check'></i></span>"
            + todos[index].content +
            "<span class='trash fas fa-trash-alt'></span>";
        
            todo.querySelector(".check").addEventListener("click", function(): void {
                toggleCheckState(index);
            });
            todo.querySelector(".trash").addEventListener("click", function(): void {
                deleteTodo(index);
            });
            // Bis hier hin wurde das neue Todo "zusammengebaut", jetzt wird es in den DOM gerendert.
            todosDOMElement.appendChild(todo);
        }

        updateCounter();
        updatedone();
        updateleft();
    }

    // ToDos Counter:

    function updateCounter(): void {
        counterDOMElement.innerHTML = todos.length + " in total";
    }

    // Done Counter:

    function updatedone(): void {
        var done = 0;
        for (var index=0; index < todos.length; index++) {
            if (todos[index].checked == true)
            done++;
        }
        
        doneDOMElement.innerHTML = done + " done";
    }

    // Left Counter: 

    function updateleft(): void {
        var left = 0;
        for (var index=0; index < todos.length; index++) {
            if (todos[index].checked == false)
            left++
        }

        leftDOMElement.innerHTML = left + " left";
    }

    // Funktion für neues ToDo:
    // push wird mit unshift ersetzt -> Neue Todo wird an den Anfang gesetzt!

    function addTodo(): void {
    
        if (inputDOMElement.value != "") {
        
            todos.unshift(
                {
                content: inputDOMElement.value,
                checked: false
                }
            );
            // Feld wird wieder geleehrt
            inputDOMElement.value = "";

            drawListToDOM();
        }
    }

    // Funktion für checked bzw. unchecked:

    function toggleCheckState(index: number): void {
        todos[index].checked = !todos[index].checked;
        drawListToDOM();
    }

    // Funktion Löschen: 

    function deleteTodo(index: number): void {
        todos.splice(index, 1);
        
        drawListToDOM();
    }

}