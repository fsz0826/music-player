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
    console.log(musicAudio.currentTime);
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
let newTime = "00:00",
  newTimeHour = 0,
  newTimeMinute = 0,
  newTimeSecond = 0;
let initialTime = 55; //设置初始时间
setInterval(() => {
  newTimeSecond++;
  if (newTimeSecond < 10) {
    newTimeSecond = "0" + newTimeSecond;
  }
  console.log(newTimeSecond);
  if (newTimeSecond === 60) {
    newTimeSecond = "00";
    newTimeMinute++;
    if (newTimeMinute < 10) {
      newTimeMinute = "0" + newTimeMinute;
    }
    console.log(newTimeMinute + "1111");
  }

  // initTime = initTime - 0;
  // newTimeSecond = initialTime;
  // newTimeSecond = newTimeSecond - 0; //当秒为00时，转换为数值型
  // newTimeSecond++;
  // console.log(newTimeSecond);
  // if (newTimeSecond < 60) {
  //   if (newTimeSecond < 10) {
  //     newTimeSecond = "0" + newTimeSecond;
  //   }
  //   newTimeSecond = newTimeSecond;
  //   // console.log(newTimeSecond);
  //   if (newTimeSecond === 60) {
  //     newTimeSecond = 0;
  //     console.log("11111111111");
  //     // newTimeMinute = newTimeMinute - 0; //当分钟为00时，转换为数值型
  //     newTimeMinute++;
  //     if (newTimeMinute < 10) {
  //       newTimeMinute = "0" + newTimeMinute;
  //     }
  //     newTimeMinute = newTimeMinute;
  //     console.log(newTimeMinute);
  //     if (newTimeMinute === 60) {
  //       newTimeMinute = 0;
  //       newTimeHour++;
  //       if (newTimeHour < 10) {
  //         newTimeHour = "0" + newTimeHour;
  //       }
  //       newTimeHour = newTimeHour;
  //     }
  //   }
  // }
  // if (newTimeHour > 0) {
  //   newTime = newTimeHour + ":" + newTimeMinute + ":" + newTimeSecond;
  // }
  // newTime = newTimeMinute + ":" + newTimeSecond;

  // else if ((latestTime = 60)) {
  //   latestTime = "00";
  //   newTimeSecond = latestTime;
  //   newTimeMinute = newTimeMinute - 0;
  //   newTimeMinute++;
  //   if (newTimeMinute < 10) {
  //     newTimeMinute = "0" + newTimeMinute;
  //   }
  newTime = newTimeMinute + ":" + newTimeSecond;
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

// musicAudio.ondurationchange = () => {
//   console.log(musicAudio.duration);
// };
// musicAudio.load();
// musicAudio.oncanplay = () => {
//   console.log(musicAudio.duration);
// };

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
