// 导入音频文件
import jay01Audio from "public/jay01.mp3";
import jay02Audio from "public/jay02.mp3";
import jay03Audio from "public/jay03.mp3";

// 创建音频元素并设置属性
const jay01Sound = new Audio(jay01Audio);
const jay02Sound = new Audio(jay02Audio);
const jay03Sound = new Audio(jay03Audio);

// 获取卡片元素
const card1 = document.querySelector(".card:nth-child(1)");
const card2 = document.querySelector(".card:nth-child(2)");
const card3 = document.querySelector(".card:nth-child(3)");

// 监听鼠标悬停事件，并播放相应的音频
card1.addEventListener("mouseenter", () => {
  jay01Sound.play();
});
card2.addEventListener("mouseenter", () => {
  jay02Sound.play();
});
card3.addEventListener("mouseenter", () => {
  jay03Sound.play();
});
