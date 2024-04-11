// mapeo
var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

// codigo konami
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];


// conteo por tecla
var konamiCodePosition = 0;

// cuando detecta una tecla
document.addEventListener('keydown', function(e) {
  // aqui toma el valor de la tecla
  var key = allowedKeys[e.keyCode];
  // toma el valor de la tecla para el codigo
  var requiredKey = konamiCode[konamiCodePosition];

  // compara la tecla con las teclas requeridas
  if (key == requiredKey) {

    // suma uno si sigue bien la secuencia
    var audioButton = new Audio('./audio/button.mp3');
    audioButton.volume = 0.5
    audioButton.play();
    konamiCodePosition++;

    // si la ultima esta bien, lo activa
    if (konamiCodePosition == konamiCode.length) {
      taDa();
      setTimeout(activateCheats, 1000)
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

function taDa() {
  var audio = new Audio('./audio/tada.mp3');
  audio.play();
}

function activateCheats() {
  window.location.href = "https://www.youtube.com/watch?v=vQW-zB_JHbs";
}