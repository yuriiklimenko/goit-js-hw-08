import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const CURRENT__TIME = 'videoplayer-current-time';

const player = new Player(iframe);

player.setCurrentTime(localStorage.getItem(CURRENT__TIME));

const saveCurrentTime = data => {
  localStorage.setItem(CURRENT__TIME, data.seconds);
};

player.on('timeupdate', throttle(saveCurrentTime, 1000));
