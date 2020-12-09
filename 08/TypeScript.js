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
    });
    document.getElementById("Nummer2").addEventListener("click", function () {
        playSample(1);
    });
    document.getElementById("Nummer3").addEventListener("click", function () {
        playSample(2);
    });
    document.getElementById("Nummer4").addEventListener("click", function () {
        playSample(3);
    });
    document.getElementById("Nummer5").addEventListener("click", function () {
        playSample(4);
    });
    document.getElementById("Nummer6").addEventListener("click", function () {
        playSample(5);
    });
    document.getElementById("Nummer7").addEventListener("click", function () {
        playSample(6);
    });
    document.getElementById("Nummer8").addEventListener("click", function () {
        playSample(7);
    });
    document.getElementById("Nummer9").addEventListener("click", function () {
        playSample(8);
    });
    // Drum Machine - SetIntervall sorgt für Wiederholung (kontinuierlich)
    var SEQ = ["./assets/hihat.mp3", "./assets/kick.mp3", "./assets/snare.mp3"];
    var INDEXSEQ = 0;
    function Intervall() {
        setInterval(function () {
            var SOUND = new Audio(SEQ[INDEXSEQ]);
            SOUND.play();
            INDEXSEQ = INDEXSEQ + 1;
        }, 500);
    }
    document.getElementById("play").addEventListener("click", function () {
        Intervall();
    });
    // Array Buttons //
    var button = [];
    button[0] = document.getElementById("play");
    button[1] = document.getElementById("stop");
    button[2] = document.getElementById("micro");
    button[3] = document.getElementById("trash");
    // Funktionen Buttons - Damit man hin und her switchen kann //
    function switchclasses(index1, index2) {
        button[index1].classList.add("is-hidden");
        button[index2].classList.remove("is-hidden");
    }
    // Play Button - Sobald ich auf play drücke, bekommt es die Klasse "is-hidden", und ist somit nicht mehr sichtbar!
    button[0].addEventListener("click", function () {
        switchclasses(0, 1);
    });
    // Stop - Button - Sobald ich auf stop drücke, wird die im HTML-Dokument festgelegte Klasse "is-hidden" entfernt und das Icon ist damit sichtbar!
    button[1].addEventListener("click", function () {
        switchclasses(1, 0);
    });
    // Record - Button 
    // Leeres Array - um Beat drinnen zu speichern
    var leeresArray = [];
    function recBeat(index) {
        leeresArray.push(sound[index]);
    }
    console.log(leeresArray);
    // Record - Button - Changecolour 
    button[2].addEventListener("click", function () {
        if (button[2].classList.contains("inactive")) {
            button[2].classList.remove("inactive");
            button[2].classList.add("active");
        }
        else {
            button[2].classList.remove("active");
            button[2].classList.add("inactive");
        }
    });
    // Delete - Button 
    button[3].addEventListener("click", function () {
    });
})(NAME || (NAME = {}));
//# sourceMappingURL=TypeScript.js.map