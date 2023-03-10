import Player from "@vimeo/player";
import { throttle } from "lodash";

const iframe = document.querySelector("iframe");
const player = new Player(iframe);
console.log();
const setCurrentTime = () => {
  if (localStorage.getItem("videoplayer-current-time")) {
    player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
  }
  return;
};
setCurrentTime();

player.on(
  "timeupdate",
  throttle((event) => {
    localStorage.setItem("videoplayer-current-time", event.seconds);
  }, 1000)
);

player.getVideoTitle().then(function (title) {
  console.log("title:", title);
});
