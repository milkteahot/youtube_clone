document.cookie = "safeCookie=youtube; SameSite=Lax";
document.cookie = "crossCooke=youtube; SameSite=None; Secure";

var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
tag.id = "iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[1];
console.log(firstScriptTag);

firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//player 변수 설정
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "360",
    width: "640",
    videoId: "OCCpGh4ujb8",
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  // event.target.playVideo();
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
  }
}
function stopVideo() {
  player.stopVideo();
}

const playBtn = document.getElementById("playBtn");
playBtn.addEventListener("click", () => {
  player.playVideo();
});
const stopBtn = document.getElementById("stopBtn");
stopBtn.addEventListener("click", () => {
  player.stopVideo();
});
const pauseBtn = document.getElementById("pauseBtn");
pauseBtn.addEventListener("click", () => {
  player.pauseVideo();
});
