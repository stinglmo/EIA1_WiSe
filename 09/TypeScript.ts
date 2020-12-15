loadEvents();

// Jedes Event auf der Seite neu laden

function loadEvents(): void {
  document.querySelector("form").addEventListener("submit", submit); // Die Funktion submit wird aufgerufen - Absenden der ToDo`s wird möglich gemacht!
  document.getElementById("clear").addEventListener("click", clearList); // Die Funktion clearList wird bei Klick aufgerufen - Die gesamte Liste mit allen ToDo`s wird gelöscht! 
  document.querySelector("ul").addEventListener("click" , deleteOrTick); // Die Funktion  deleteOrTick wird aufgerufen - Man kann entweder löschen oder ankreuzen!

}

// Funktion Absenden

let input: HTMLInputElement = document.querySelector("input");

function submit(e: Event): void {
  e.preventDefault(); // Javascript Event preventDefault übernimmt im DOM die Aufgabe des Aufrufs return false;, um die ursprüngliche Aktion des Browsers bei einem HTML-Element außer Kraft zu setzen.
  if (input.value != " ")
    addTask(input.value);
  input.value = " "; // Das Textfeld wird wieder leer!
}

// ToDos hinzufügen - // Die let - Variablen, schreibe ich in die Funktion rein, da sie nur in dem Bereich gültig sein sollen (im Deklarationsbereich - Bei addTask-Funktion also erst erscheinen sollen)

let taskboard: HTMLElement = document.querySelector(".tasksBoard");
// let listelements: HTMLElement = document.querySelector(".ListElements"); ????

function addTask(task: string): void {
  let ul: HTMLUListElement = document.querySelector("ul");
  let li: HTMLLIElement = document.createElement("li");
  if (taskboard.classList.contains("is-hidden"))
  taskboard.classList.remove("is-hidden"); // Aufgabenboard erscheint
  // listelements.innerHTML = listNumber + " to-dos left"; )))
  li.innerHTML = `<span class="delete"><i class="fas fa-trash-alt"></i></span><input type="checkbox"><label>${task}</label>`; // Mit dem Dollerzeichen bestimme ich, dass sich die Checkbox ausschließlich auf dieses Label bezieht.
  ul.appendChild(li); // Damit immer ein neues hinzugefügt werden kann!
  

}

// Löschen der gesamten Liste

let ul: HTMLUListElement = document.querySelector("ul");

function clearList(): void {
  ul.innerHTML = " ";
}

// Ankreuzen oder Ankreuzen rückgängig machen

function deleteOrTick(e): void {
  if (e.target.className == "delete")
    deleteTask(e);
  else {
    tickTask(e);
  }
}

// ToDo löschen - // DOM - Manipulation durch Document.adoptNode()!
// parentNode und nextSilbling greifen auf Elemente zu, 
// die nicht direkt durch Methoden wie getElementById, getElementsByName 
// oder querySelector erreicht werden und finden jedes Element im DOM auch ohne ID und class-Attribut.
// Node = Schnittstelle -> Typen werden vererbt.

function deleteTask(e): void {
  let remove: HTMLElement = e.target.parentNode; 
  let parentNode: Node = remove.parentNode;
  parentNode.removeChild(remove); // Das nächste Kind wird entfernt
}

// ToDo ankreuzen

function tickTask(e): void {
  const task: HTMLElement = e.target.nextSibling;
  if (e.target.checked) { // checked --> Checkbox ist angeklickt/Aufgabe wurde erledigt
    task.style.textDecoration = "line-through"; // ToDo wird durchgestrichen. Ist das okay, wenn ich es hier mache? Oder mit CSS-Klassen?
    task.style.color = "#ff0000";
  } else {
    task.style.textDecoration = "none";
    task.style.color = "#2f4f4f";
  }
}