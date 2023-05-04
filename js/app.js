const audio = document.getElementById("starwarstheme");
setTimeout(function() {
  audio.play();
}, 7000);

function togglePlay() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}


