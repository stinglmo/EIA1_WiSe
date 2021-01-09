// Aufgabe 11 -> Sprachassistenten hinzufügen
// Interface und Objekt in einem Array erstellen:
var aufgabe11;
(function (aufgabe11) {
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
    function drawListToDOM() {
        todosDOMElement.innerHTML = "";
        var _loop_1 = function (index) {
            var todo = document.createElement("div");
            todo.classList.add("todo");
            todo.innerHTML = "<span class='check " + todos[index].checked + "'><i class='fas fa-check'></i></span>"
                + todos[index].content +
                "<span class='trash fas fa-trash-alt'></span>";
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
    // Done Counter:
    function updatedone() {
        var done = 0;
        for (var index = 0; index < todos.length; index++) {
            if (todos[index].checked == true)
                done++;
        }
        doneDOMElement.innerHTML = done + " done";
    }
    // Left Counter: 
    function updateleft() {
        var left = 0;
        for (var index = 0; index < todos.length; index++) {
            if (todos[index].checked == false)
                left++;
        }
        leftDOMElement.innerHTML = left + " left";
    }
    // Funktion für neues ToDo:
    // push wird mit unshift ersetzt -> Neue Todo wird an den Anfang gesetzt!
    // checked -> false, weil die ToDo, die ich hinzufüge logischerweise noch nicht abgehakt ist.
    function addTodo() {
        if (inputDOMElement.value != "") { /* Wenn im Feld was steht */
            todos.unshift({
                content: inputDOMElement.value,
                checked: false
            });
        }
        // Feld wird wieder geleehrt
        inputDOMElement.value = "";
        drawListToDOM();
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
    // Artyom - erstellen:
    var artyom = new Artyom();
    // Sprachassistenz - Funktion
    document.querySelector("#micro").addEventListener("click", function () {
        artyom.initialize({
            debug: true,
            continuous: true,
            lang: "de-DE",
            listen: true
        });
        // Kommentare hinzufügen:
        // Arrow-Funktion (() =>) ersetzt function(): void
        // indexes -> ist ein Arrray mit Textidentifizierungsdinger, die einen Befehl auslösen
        // Alles was ich nach dem Befehl sage, wird in einem Array gespeichert 
        // -> Das Sternchen ist repräsentativ für den wildcard-string
        // .say -> Artyom gibt ihren Kommentar ab
        artyom.addCommands([
            {
                indexes: ["Erstelle Aufgabe *"],
                smart: true,
                action: function (i, wildcard) {
                    console.log("Neue Aufgabe wird erstellt: " + wildcard);
                    console.log(wildcard);
                    todos.unshift({
                        content: wildcard,
                        checked: false
                    });
                    drawListToDOM();
                }
            }
        ]);
        // Artyom starten -> mit .initialize
        artyom.initialize({
            debug: true,
            continuous: true,
            lang: "de-DE",
            listen: true
        }).then(function () {
            console.log("Artyom wurde erfolgreich gestartet");
            artyom.when("NOT_COMMAND_MATCHED"), function () {
                artyom.say("Ich habe dich leider nicht verstanden!");
            };
        });
    });
    document.querySelector("#stop").addEventListener("click", function () {
        // Stop Artyom
        // fatality -> Erlaubt Deaktivierung
        artyom.fatality().then(function () {
            console.log("Artyom wurde erfolgreich gestoppt");
            artyom.say("Eyyy - Ich wollte dir doch noch zuhören!!!");
        });
        // Restart Artyom 
        artyom.restart().then(function () {
            console.log("Artyom wurde erfolgreich neu gestartet");
            artyom.say("Jetzt wurde ich neu gestartet");
        });
    });
})(aufgabe11 || (aufgabe11 = {}));
//# sourceMappingURL=script11.js.map