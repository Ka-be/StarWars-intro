const audio = document.getElementById("starwarstheme");
setTimeout(function() {
  audio.play();
}, 6900);

audio.volume = 1;

function toggleMute() {
  let btn = document.getElementById("audio-btn");
  if (audio.volume === 0) {
    audio.volume = 1;
    btn.setAttribute("src", "/img/volume_on.svg");
  } else {
    audio.volume = 0;
    btn.setAttribute("src", "/img/volume_off.svg");
  }
}


