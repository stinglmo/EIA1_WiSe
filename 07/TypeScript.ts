
// Drum Pad - Sounds //

const Sound1:HTMLAudioElement = new Audio('./assets/A.mp3');

const Sound2:HTMLAudioElement = new Audio('./assets/C.mp3');

const Sound3:HTMLAudioElement = new Audio('./assets/F.mp3');

const Sound4:HTMLAudioElement = new Audio('./assets/G.mp3');

const Sound5:HTMLAudioElement = new Audio('./assets/hihat.mp3');

const Sound6:HTMLAudioElement = new Audio('./assets/kick.mp3');

const Sound7:HTMLAudioElement = new Audio('./assets/laugh-1.mp3');

const Sound8:HTMLAudioElement = new Audio('./assets/laugh-2.mp3');

const Sound9:HTMLAudioElement = new Audio('./assets/snare.mp3');

// Array //

const ALLSOUNDS:any [] = ['Sound1', 'Sound2', 'Sound3', 'Sound4', 'Sound5', 'Sound6', 'Sound7', 'Sound8', 'Sound9']

// Funktion //

function playSample(): any {
    document.querySelector('.button').innerHTML 
}

// Funktionsaufrufe //

document.getElementById('Nummer1').addEventListener('click', function() {
    Sound1.play();
})

document.getElementById('Nummer2').addEventListener('click', function() {
    Sound2.play();
})

document.getElementById('Nummer3').addEventListener('click', function() {
    Sound3.play();
})

document.getElementById('Nummer4').addEventListener('click', function() {
    Sound4.play();
})

document.getElementById('Nummer5').addEventListener('click', function() {
    Sound5.play();
})

document.getElementById('Nummer6').addEventListener('click', function() {
    Sound6.play();
})

document.getElementById('Nummer7').addEventListener('click', function() {
    Sound7.play();
})

document.getElementById('Nummer8').addEventListener('click', function() {
    Sound8.play();
})

document.getElementById('Nummer9').addEventListener('click', function() {
    Sound9.play();
})





// Drum Machine //

function Intervall(): any {
    document.querySelector('#play-button').innerHTML 
}

setInterval(function() {
    Sound5; Sound6; Sound5; Sound6; Sound9; Sound9; Sound5; Sound6; Sound5; Sound6; Sound9; Sound9;
    Sound5; Sound6; Sound5; Sound6; Sound9; Sound9; Sound5; Sound6; Sound5; Sound6; Sound9; Sound9;
    Sound5; Sound6; Sound5; Sound6; Sound9; Sound9; Sound5; Sound6; Sound5; Sound6; Sound9; Sound9;
    Sound5; Sound6; Sound5; Sound6; Sound9; Sound9; Sound5; Sound6; Sound5; Sound6; Sound9; Sound9;
    Sound5; Sound6; Sound5; Sound6; Sound9; Sound9; Sound5; Sound6; Sound5; Sound6; Sound9; Sound9;
   }, 500);

 document.getElementById('play-button').addEventListener('click', function() {
   setInterval
   });
