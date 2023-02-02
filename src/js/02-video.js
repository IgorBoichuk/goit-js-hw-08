import Player from '@vimeo/player';
import { throttle } from 'lodash';
console.dir(Player);

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on(
  'timeupdate',
  throttle(event => {
    localStorage.setItem('videoplayer-current-time', event.seconds);
  }, 1000)
  // console.log('played the video!');
  //   localStorage.setItem('videoplayer-current-time', event.seconds);
);

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

// player.on(
//   'timeupdate',
//   throttle(e => {
//     localStorage.setItem('videoplayer-current-time', e.seconds);
//   }, 1000)
// );

// ------------------підключити пізніше
// player
//   .setCurrentTime(30.456)
//   .then(function (seconds) {
//     // seconds = the actual time that the player seeked to
//   })
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         // the time was less than 0 or greater than the video’s duration
//         break;

//       default:
//         // some other error occurred
//         break;
//     }
//   });
