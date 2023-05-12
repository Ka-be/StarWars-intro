// Allow Audio
const fxDeploy = document.getElementById("fx-deploy");
fxDeploy.volume = 0.3;
const fxRun = document.getElementById("fx-run");
fxRun.volume = 0.3;
const fxRetract = document.getElementById("fx-retract");
fxRetract.volume = 0.3;

window.addEventListener("load", () => {
	const popup = document.createElement("div");
	const audioBtn = document.getElementById("audio-btn");

	popup.classList.add("popup", "paused");
	popup.innerHTML = `
		<p>Do you want to hear epic music ?</p>
    <div class="popup-btns">
      <button class="popup-btn hoverElement" id="popup-allow">Yeah 🔈</button>
      <button class="popup-btn hoverElement" id="popup-deny">Nooo 🔇</button>
    </div>
  `;

	document.body.appendChild(popup);

	const audioControl = document.querySelector(".audio-control");
	const audio = document.getElementById("starwarstheme");

	const intro = document.querySelector(".intro");
	const stars = document.querySelector(".opening-stars");
	const logo = document.querySelector(".opening-stars--logo");
	const crawl = document.querySelector(".opening-stars--crawl");
	const outro = document.querySelector(".outro");

	const popupAllow = document.getElementById("popup-allow");
	popupAllow.addEventListener("click", () => {
		popup.remove();
		audioControl.classList.remove("paused");
		setTimeout(function () {
			audio.play();
		}, 6900);

		intro.style.animationPlayState = "running";
		stars.style.animationPlayState = "running";
		logo.style.animationPlayState = "running";
		crawl.style.animationPlayState = "running";
		outro.style.animationPlayState = "running";
	});

	const popupDeny = document.getElementById("popup-deny");
	popupDeny.addEventListener("click", () => {
		popup.remove();
		intro.style.animationPlayState = "running";
		stars.style.animationPlayState = "running";
		logo.style.animationPlayState = "running";
		crawl.style.animationPlayState = "running";
		outro.style.animationPlayState = "running";
	});

	// Audio control

	audioControl.addEventListener("click", function () {
		if (audio.volume === 0) {
			audio.volume = 1;
			fxDeploy.volume = 0.3;
			fxRun.volume = 0.3;
			fxRetract.volume = 0.3;
			audioBtn.src = "/img/volume_on.svg";
		} else {
			audio.volume = 0;
			fxDeploy.volume = 0;
			fxRun.volume = 0;
			fxRetract.volume = 0;
			audioBtn.src = "/img/volume_off.svg";
		}
	});
});

// Lightsaber cursor

function soundDeploy() {
	fxDeploy.currentTime = 0;
	fxDeploy.play();
}

function soundRun() {
	fxRun.currentTime = 0;
	fxRun.play();
}

function soundRetract() {
	fxRetract.currentTime = 0;
	fxRetract.play();
}

const cursor = document.getElementById("cursor");
let isMouseDown = false;

window.addEventListener("mousemove", function (e) {
	if (!isMouseDown) {
		cursor.style.left = e.clientX + "px";
		cursor.style.top = e.clientY + "px";
	}
});

window.addEventListener("mousedown", function (e) {
	if (e.button === 0) {
		isMouseDown = true;
		cursor.style.animation = "deployCursor 0.5s forwards";
		cursor.style.content = "url('/img/lightsaber-full.png')";
		cursor.style.left = e.clientX + "px";
		cursor.style.top = e.clientY + "px";
		soundDeploy(); // Jouer le son fxDeploy
		fxRun.loop = true; // Activer la lecture en boucle pour fxRun
		soundRun(); // Jouer le son fxRun
	}
});

window.addEventListener("mouseup", function (e) {
	if (e.button === 0) {
		isMouseDown = false;
		cursor.style.animation = "retractCursor 0.5s forwards";
		cursor.style.content = "url('/img/lightsaber.png')";
		fxRun.loop = false; // Désactiver la lecture en boucle pour fxRun
		fxRun.pause();
		fxRun.currentTime = 0;
		soundRetract(); // Jouer le son fxRetract
	}
});

window.addEventListener("mouseout", function (e) {
	if (isMouseDown) {
		isMouseDown = false;
		cursor.style.animation = "retractCursor 0.5s forwards";
		cursor.style.content = "url('/img/lightsaber.png')";
		fxRun.loop = false; // Désactiver la lecture en boucle pour fxRun
		soundRetract(); // Jouer le son fxRetract
	}
});
