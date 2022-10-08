import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const CURRENT__TIME = 'videoplayer-current-time';

const saveCurrentTime = data => {
  localStorage.setItem(CURRENT__TIME, data.seconds);
};

const onPlayVideo = () => {
  player.setCurrentTime(localStorage.getItem(CURRENT__TIME));
  player.off('play', onPlayVideo);
};

player.on('timeupdate', throttle(saveCurrentTime, 1000));

player.on('play', onPlayVideo);
