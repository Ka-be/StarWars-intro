const audio = document.getElementById("starwarstheme");
setTimeout(function() {
  audio.play();
}, 6900);

audio.volume = 1;

  function toggleMute() {
    if (audio.volume === 0) {
      // Si le volume est à 0, rétablir le volume à 1
      audio.volume = 1;
    } else {
      // Sinon, mettre le volume à 0
      audio.volume = 0;
    }
  }


