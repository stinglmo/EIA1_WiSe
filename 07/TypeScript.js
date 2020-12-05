// Drum Pad - Sounds - Array //
var Sound = [];
Sound[0] = new Audio('./assets/A.mp3');
Sound[1] = new Audio('./assets/C.mp3');
Sound[2] = new Audio('./assets/F.mp3');
Sound[3] = new Audio('./assets/G.mp3');
Sound[4] = new Audio('./assets/hihat.mp3');
Sound[5] = new Audio('./assets/kick.mp3');
Sound[6] = new Audio('./assets/laugh-1.mp3');
Sound[7] = new Audio('./assets/laugh-2.mp3');
Sound[8] = new Audio('./assets/snare.mp3');
// Funktion //
function playSample(Button) {
    Sound[Button].play();
}
// Funktionsaufrufe //
document.getElementById('Nummer1').addEventListener('click', function () {
    playSample(0);
});
document.getElementById('Nummer2').addEventListener('click', function () {
    playSample(1);
});
document.getElementById('Nummer3').addEventListener('click', function () {
    playSample(2);
});
document.getElementById('Nummer4').addEventListener('click', function () {
    playSample(3);
});
document.getElementById('Nummer5').addEventListener('click', function () {
    playSample(4);
});
document.getElementById('Nummer6').addEventListener('click', function () {
    playSample(5);
});
document.getElementById('Nummer7').addEventListener('click', function () {
    playSample(6);
});
document.getElementById('Nummer8').addEventListener('click', function () {
    playSample(7);
});
document.getElementById('Nummer9').addEventListener('click', function () {
    playSample(8);
});
// Drum Machine - SetIntervall sorgt für Wiederholung (kontinuierlich)
function Intervall(Hihat, Kick, Snare) {
    setInterval(function () {
        playSample(Hihat);
        playSample(Kick);
        playSample(Snare);
    }, 400);
}
document.getElementById('play-button').addEventListener('click', function () {
    Intervall(4, 5, 8);
});
//# sourceMappingURL=TypeScript.js.map