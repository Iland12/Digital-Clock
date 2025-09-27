const hrs = document.querySelector("#hrs");
const mins = document.querySelector("#mins");
const secs = document.querySelector("#secs");
const click = document.querySelector("#icon");
const audio = document.querySelector("audio");
const playBtn = document.querySelector("#play");
const pauseBtn = document.querySelector("#pause");

setInterval(() => {
  let currentTime = new Date();
  hrs.innerHTML =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  mins.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  secs.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);

playBtn.addEventListener("click", () => {
  audio.play();
  playBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
});
pauseBtn.addEventListener("click", () => {
  audio.pause();
  playBtn.style.display = "inline-block";
  pauseBtn.style.display = "none";
});
