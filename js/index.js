// $表示单个DOM对象，$$表示DOM数组
let musicList = [
  {
    src: "../assets/music/本草纲目-周杰伦.mp3",
    title: "本草纲目",
    auther: "周杰伦",
    img: "../assets/bg-img/本草纲目.jpg",
  },
  {
    src: "../assets/music/不再犹豫-Beyond.mp3",
    title: "不再犹豫",
    auther: "Beyond",
    img: "../assets/bg-img/不再犹豫.jpg",
  },
  {
    src: "../assets/music/光辉岁月-Beyond.mp3",
    title: "光辉岁月",
    auther: "Beyond",
    img: "../assets/bg-img/光辉岁月.jpg",
  },
  {
    src: "../assets/music/海阔天空-Beyond.mp3",
    title: "海阔天空",
    auther: "Beyond",
    img: "../assets/bg-img/海阔天空.jpg",
  },
  {
    src: "../assets/music/灰色轨迹-Beyond.mp3",
    title: "灰色轨迹",
    auther: "Beyond",
    img: "../assets/bg-img/灰色轨迹.jpg",
  },
];

const $ = (selector) => document.querySelector(selector);
const $previousBtn = $(".icon-play-left");
const $playBtn = $(".icon-play");
const $nextBtn = $(".icon-play-right");
const $coverBg = $("div.cover");
const $title = $(".player .main .texts h3");
const $author = $(".player .main .texts p");
let $timeText = $(".player .time");

//获取musicList的index随机整数值
let index = parseInt(Math.random() * musicList.length);

let musicAudio = new Audio();

init();

$playBtn.onclick = () => {
  if ($playBtn.classList.contains("icon-pause")) {
    musicAudio.pause();
  } else {
    musicAudio.play();
  }
  $playBtn.classList.toggle("icon-pause");
  $playBtn.classList.toggle("icon-play");
};

//初始化歌曲信息
function init() {
  let thisMusic = musicList[index];
  $title.innerHTML = thisMusic.title;
  $author.innerHTML = thisMusic.auther;
  $coverBg.style.backgroundImage = "url(" + thisMusic.img + ")";
  $coverBg.style.backgroundSize = "cover";
  musicAudio.src = thisMusic.src;
  $timeText.innerHTML = "00:00";
}
Math.floor(musicAudio.currentTime);
let newTime,
  newTimeHour,
  newTimeMinute = "59",
  newTimeSecond;
let latestTime = 55;
setInterval(() => {
  latestTime = latestTime - 0;
  latestTime++;
  if (latestTime < 60) {
    if (latestTime < 10) {
      latestTime = "0" + latestTime;
    }
    newTimeSecond = latestTime;
  }
  // else if ((latestTime = 60)) {
  //   latestTime = "00";
  //   newTimeSecond = latestTime;
  //   newTimeMinute = newTimeMinute - 0;
  //   newTimeMinute++;
  //   if (newTimeMinute < 10) {
  //     newTimeMinute = "0" + newTimeMinute;
  //   }
  //   newTime = newTimeMinute + ":" + newTimeSecond;
  // } else if ((newTimeMinute = 60)) {
  //   newTimeMinute = "00";
  //   newTimeHour++;
  //   if (newTimeHour < 10) {
  //     newTimeHour = "0" + newTimeHour;
  //   }
  //   newTime = newTimeHour + ":" + newTimeMinute + ":" + newTimeSecond;
  // }
  $timeText.innerHTML = newTime;
}, 1000);
//下一曲默认播放，改变play按钮icon
function togglePlayIcon() {
  $playBtn.classList.remove("icon-play");
  $playBtn.classList.add("icon-pause");
}

$nextBtn.onclick = () => {
  index++;
  index = index % musicList.length;
  init();
  musicAudio.play();
  togglePlayIcon();
};

$previousBtn.onclick = () => {
  index--;
  index = (index + musicList.length) % musicList.length;
  init();
  musicAudio.play();
  togglePlayIcon();
};
