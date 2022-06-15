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
const $timeText = $(".player .time");
const $barCont = $(".player .bar");
const $progressBar = $(".player .bar .progress");

//获取musicList的index随机整数值
let index = parseInt(Math.random() * musicList.length);

let musicAudio = new Audio();

//初始化歌曲信息
function init() {
  let thisMusic = musicList[index];
  $title.innerHTML = thisMusic.title;
  $author.innerHTML = thisMusic.auther;
  $coverBg.style.backgroundImage = "url(" + thisMusic.img + ")";
  $coverBg.style.backgroundSize = "cover";
  musicAudio.src = thisMusic.src;
}
init();

//播放暂停按钮功能定义
$playBtn.onclick = () => {
  if ($playBtn.classList.contains("icon-pause")) {
    musicAudio.pause();
    console.log(musicAudio.currentTime);
  } else {
    musicAudio.play();
  }
  $playBtn.classList.toggle("icon-pause");
  $playBtn.classList.toggle("icon-play");
};

//下一曲默认播放，改变play按钮icon
function togglePlayIcon() {
  $playBtn.classList.remove("icon-play");
  $playBtn.classList.add("icon-pause");
}

//下一曲按钮功能定义
$nextBtn.onclick = loadNextMusic;
function loadNextMusic() {
  index++;
  index = index % musicList.length;
  init();
  musicAudio.play();
  togglePlayIcon();
}

//上一曲按钮功能定义
$previousBtn.onclick = loadPreviousMusic;
function loadPreviousMusic() {
  index--;
  index = (index + musicList.length) % musicList.length;
  init();
  musicAudio.play();
  togglePlayIcon();
}

//获取歌曲总时长,秒为单位
// musicAudio.ondurationchange = () => {
//   console.log(Math.floor(musicAudio.duration));
// };

//当歌曲时间发生改变时，触发进图条更新事件
musicAudio.shouldUpdate = true;
musicAudio.ontimeupdate = function () {
  let _this = this;
  if (_this.shouldUpdate) {
    updateProgerss();
    _this.shouldUpdate = false;
  }
  setTimeout(function () {
    musicAudio.shouldUpdate = true;
  }, 1000);
};

//进度条和时间更新
function updateProgerss() {
  let percent = (musicAudio.currentTime / musicAudio.duration) * 100 + "%";
  $progressBar.style.width = percent;
  let hours = parseInt(musicAudio.currentTime / 60 / 60) + "";
  let minutes = parseInt(musicAudio.currentTime / 60) + "";
  let seconds = parseInt(musicAudio.currentTime % 60) + "";
  hours = hours.length === 2 ? hours : "0" + hours;
  minutes = minutes.length === 2 ? minutes : "0" + minutes;
  seconds = seconds.length === 2 ? seconds : "0" + seconds;
  let text;
  if (parseInt(hours) > 0) {
    text = hours + ":" + minutes + ":" + seconds;
  } else {
    text = minutes + ":" + seconds;
  }
  $timeText.innerHTML = text;
}

//播放完毕自动播放下一曲
musicAudio.onended = loadNextMusic;

//点击进度条调整播放时间
$barCont.onclick = function (e) {
  let percent = e.offsetX / parseInt($barCont.offsetWidth);
  $progressBar.style.width = percent * 100 + "%";
  musicAudio.currentTime = percent * musicAudio.duration;
};
let isPress = false;
$barCont.onmousedown = () => {
  isPress = true;
};
$barCont.onmousemove = function (e) {
  if (isPress) {
    let percent = e.offsetX / parseInt($barCont.offsetWidth);
    $progressBar.style.width = percent * 100 + "%";
  }
};
$barCont.onmouseup = () => {
  isPress = false;
};
