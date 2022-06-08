console.log(111);
// $表示单个DOM对象，$$表示DOM数组

const $ = (selector) => document.querySelector(selector);
const $previousBtn = $(".icon-play-left");
const $playingBtn = $(".icon-playing");
const $nextBtn = $(".icon-play-right");
// nextBtn.onclick = function (e) {
//   console.log(111);
// };
$playingBtn.onclick = (e) => {
  if ($playingBtn.classList.contains("icon-pause")) {
    $playingBtn.classList.remove("icon-pause");
    $playingBtn.classList.add("icon-playing");
  } else {
    $playingBtn.classList.remove("icon-playing");
    $playingBtn.classList.add("icon-pause");
  }
};
