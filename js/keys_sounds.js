//map
var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
};

//codigo
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

//conteo
var cod1d1Pos = 0;

//detector
document.addEventListener('keydown', function(e){
    //valor
    var tecla = allowedKeys[e.keyCode];
    //toma valor
    var tomaTecla = konamiCode[cod1d1Pos];

    //compara
    if (tecla == tomaTecla) {

        //suma 1
        var audioButton = new Audio('./audio/button.mp3');
        audioButton.volume = 0.45
        audioButton.play();
        cod1d1Pos++;

        //activa
        if (cod1d1Pos == konamiCode.length){
            taDa();
            cod1d1Pos = 0;
        }
    }else{
        cod1d1Pos = 0;
    }
});

function taDa() {
    var audio = new Audio('./audio/tada.mp3');
    audio.play();
}