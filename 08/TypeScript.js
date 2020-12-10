// Drum Pad - Sounds - Array //
var NAME;
(function (NAME) {
    var sound = [];
    sound[0] = new Audio("./assets/A.mp3");
    sound[1] = new Audio("./assets/C.mp3");
    sound[2] = new Audio("./assets/F.mp3");
    sound[3] = new Audio("./assets/G.mp3");
    sound[4] = new Audio("./assets/hihat.mp3");
    sound[5] = new Audio("./assets/kick.mp3");
    sound[6] = new Audio("./assets/laugh-1.mp3");
    sound[7] = new Audio("./assets/laugh-2.mp3");
    sound[8] = new Audio("./assets/snare.mp3");
    // Funktion // void weil kein Rückgabewert
    function playSample(button) {
        sound[button].play();
    }
    // Funktionsaufrufe //
    document.getElementById("Nummer1").addEventListener("click", function () {
        playSample(0);
        recBeat(0);
    });
    document.getElementById("Nummer2").addEventListener("click", function () {
        playSample(1);
        recBeat(1);
    });
    document.getElementById("Nummer3").addEventListener("click", function () {
        playSample(2);
        recBeat(2);
    });
    document.getElementById("Nummer4").addEventListener("click", function () {
        playSample(3);
        recBeat(3);
    });
    document.getElementById("Nummer5").addEventListener("click", function () {
        playSample(4);
        recBeat(4);
    });
    document.getElementById("Nummer6").addEventListener("click", function () {
        playSample(5);
        recBeat(5);
    });
    document.getElementById("Nummer7").addEventListener("click", function () {
        playSample(6);
        recBeat(6);
    });
    document.getElementById("Nummer8").addEventListener("click", function () {
        playSample(7);
        recBeat(7);
    });
    document.getElementById("Nummer9").addEventListener("click", function () {
        playSample(8);
        recBeat(8);
    });
    // Warum werden 8 und 9 nicht abgespielt
    // Array Buttons //
    var button = [];
    button[0] = document.getElementById("play");
    button[1] = document.getElementById("stop");
    button[2] = document.getElementById("micro");
    button[3] = document.getElementById("trash");
    // Leeres Array - um Beat drinnen zu speichern
    var leeresArray = [];
    // Funktion - Record - Button 
    var recording;
    function recBeat(index) {
        if (recording == true) {
            leeresArray.push(index); // Index --> Beat wird im Array gespeichert
        }
    }
    // Funktion Schleife - SetIntervall sorgt für Wiederholung (kontinuierlich) - 400ms
    // Intervall als Variable - Dann wird das Intervall in der Variable gespeichert und durch clearIntervall wird die Variable wieder geleehrt.
    var interval;
    var x = 0;
    function playloop(recorded) {
        if (recorded == true) {
            interval = setInterval(function () {
                if ((x < leeresArray.length)) {
                    playSample(leeresArray[x]); // Die x-te Stelle meines Arrays wird abgespielt!
                    x++;
                }
                else {
                    x = 0;
                }
            }, 400);
        }
        else {
            clearInterval(interval);
        }
    }
    // Funktionen Buttons - Damit man zwischen Play und Stop hin und her switchen kann //
    function switchclasses(index1, index2) {
        button[index1].classList.add("is-hidden");
        button[index2].classList.remove("is-hidden");
    }
    // Play Button - Sobald ich auf play drücke, bekommt 
    // 1. mein Play-Button die Klasse "is-hidden", und ist somit nicht mehr sichtbar!
    // 2. der if - Codeblock von meiner playloop - Funktion wird ausgeführt --> Meine Beatschleife wird in der Variablen "interval" gespeichert!
    button[0].addEventListener("click", function () {
        switchclasses(0, 1);
        playloop(true);
    });
    // Stop - Button - Sobald ich auf stop drücke, wird 
    // 1. die Funktion switchclasses ausgeführt --> die im HTML-Dokument festgelegte Klasse "is-hidden" entfernt und das Icon ist damit sichtbar!
    // 2. der else - Codeblock von meiner playloop - Funktion ausgeführt --> Die Variable in der ich die Beatschleife gespeichert habe, wird (durch clearInterval) gelehrt!
    button[1].addEventListener("click", function () {
        switchclasses(1, 0);
        playloop(false);
    });
    // Record - Button - Changecolour 
    button[2].addEventListener("click", function () {
        if (button[2].classList.contains("inactive")) {
            button[2].classList.remove("inactive");
            button[2].classList.add("active");
            // recording = true --> in Funktion recBeat habe ich festgelegt, dass dann die Beats im leeren Array gespeichert werden!
            recording = true;
        }
        else {
            button[2].classList.remove("active");
            button[2].classList.add("inactive");
            recording = false;
        }
    });
    // Delete - Button 
    button[3].addEventListener("click", function () {
        leeresArray.length = 0;
    });
})(NAME || (NAME = {}));
//# sourceMappingURL=TypeScript.js.map