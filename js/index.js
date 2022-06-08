console.log(111);
// $表示单个DOM对象，$$表示DOM数组
let musicList = [
  {
    src: "http://jirengu_1.gitee.io/music/ifyou.mp3",
    title: "IF YOU",
    auther: "Big Bang",
    img: "http://jirengu_1.gitee.io/music/if-you.png",
  },
  {
    src: "http://jirengu_1.gitee.io/music/夏日示爱-郭彩洁-暖手心.m4a",
    title: "暖手心",
    auther: "郭彩洁",
    img: "http://jirengu_1.gitee.io/music/夏日示爱-郭彩洁-暖手心.jpg",
  },
  {
    src: "http://jirengu_1.gitee.io/music/玫瑰.mp3",
    title: "玫瑰",
    auther: "贰佰",
    img: "http://jirengu_1.gitee.io/music/玫瑰.jpeg",
  },
  {
    src: "http://jirengu_1.gitee.io/music/成全-林宥嘉-成全.m4a",
    title: "成全",
    auther: "林宥嘉",
    img: "http://jirengu_1.gitee.io/music/成全-林宥嘉-成全.jpg",
  },
  {
    src: "http://jirengu_1.gitee.io/music/飞行器的执行周期-郭顶-水星记.m4a",
    title: "水星记",
    auther: "郭顶",
    img: "http://jirengu_1.gitee.io/music/飞行器的执行周期-郭顶-水星记.jpg",
  },
];

let index = 0;
let thisMusic = musicList[index];

const $ = (selector) => document.querySelector(selector);
const $previousBtn = $(".icon-play-left");
const $playingBtn = $(".icon-playing");
const $nextBtn = $(".icon-play-right");

const $title = $(".player .main .texts h3");
const $author = $(".player .main .texts p");
$title.innerHTML = thisMusic.title;
$author.innerHTML = thisMusic.auther;
$playingBtn.onclick = (e) => {
  if ($playingBtn.classList.contains("icon-pause")) {
    $playingBtn.classList.remove("icon-pause");
    $playingBtn.classList.add("icon-playing");
  } else {
    $playingBtn.classList.remove("icon-playing");
    $playingBtn.classList.add("icon-pause");
  }
};
$nextBtn.onclick = () => {
  index++;
  index = index % musicList.length;

  thisMusic = musicList[index];
  $title.innerHTML = thisMusic.title;
  $author.innerHTML = thisMusic.auther;
};
$previousBtn.onclick = () => {
  index--;
  index = (index + musicList.length) % musicList.length;

  thisMusic = musicList[index];
  $title.innerHTML = thisMusic.title;
  $author.innerHTML = thisMusic.auther;
};
