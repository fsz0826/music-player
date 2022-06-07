console.log(111);
const previousBtn = document.querySelector(".icon-play-left");
const playingBtn = document.querySelector(".icon-playing");
const nextBtn = document.querySelector(".icon-play-right");
// nextBtn.onclick = function (e) {
//   console.log(111);
// };
playingBtn.onclick = (e) => {
  if (playingBtn.classList.contains("icon-pause")) {
    playingBtn.classList.remove("icon-pause");
    playingBtn.classList.add("icon-playing");
  } else {
    playingBtn.classList.remove("icon-playing");
    playingBtn.classList.add("icon-pause");
  }
};
