const videoEl = document.getElementsByTagName('video')[0], 
playPauseBtn = document.getElementById('playPause'),
vidControls = document.getElementById('controls'),
muteBtn = document.getElementById('muteUnmute'),
timeHolder = document.getElementById('timer');

videoEl.removeAttribute('controls');

videoEl.addEventListener('canplaythrough', function() {
    vidControls.classList.remove('hidden');
}, false);

console.log(videoEl);
console.log('It is working');