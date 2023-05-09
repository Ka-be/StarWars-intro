window.addEventListener('load', () => {
  const popup = document.createElement('div');
  const audioBtn = document.getElementById('audio-btn');

  popup.classList.add('popup', 'paused');
  popup.innerHTML = `
    <p>Do you want to hear epic music ?</p>
    <div class="popup-btns">
      <button class="popup-btn" id="popup-allow">Yeah 🔈</button>
      <button class="popup-btn" id="popup-deny">Nooo 🔇</button>
    </div>
  `;
  document.body.appendChild(popup);

  const audioControl = document.querySelector('.audio-control');
  const audio = document.getElementById('starwarstheme');

  const intro = document.querySelector('.intro');
  const stars = document.querySelector('.opening-stars');
  const logo = document.querySelector('.opening-stars--logo');
  const crawl = document.querySelector('.opening-stars--crawl');
  const outro = document.querySelector('.outro');

  const popupAllow = document.getElementById('popup-allow');
  popupAllow.addEventListener('click', () => {
    popup.remove();
    audioControl.style.display = "block";
    audioControl.classList.remove('paused');
    setTimeout(function() {
      audio.play();
    }, 6900);

    intro.style.animationPlayState = 'running';
    stars.style.animationPlayState = 'running';
    logo.style.animationPlayState = 'running';
    crawl.style.animationPlayState = 'running';
    outro.style.animationPlayState = 'running';
  });

  const popupDeny = document.getElementById('popup-deny');
  popupDeny.addEventListener('click', () => {
    popup.remove();
    intro.style.animationPlayState = 'running';
    stars.style.animationPlayState = 'running';
    logo.style.animationPlayState = 'running';
    crawl.style.animationPlayState = 'running';
    outro.style.animationPlayState = 'running';
  });

  audioControl.addEventListener('click', function() {
    if (audio.volume === 0) {
      audio.volume = 1;
      audioBtn.src = '/img/volume_on.svg';
    } else {
      audio.volume = 0;
      audioBtn.src = '/img/volume_off.svg';
    }
  });
});







