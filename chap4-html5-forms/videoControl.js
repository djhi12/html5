const videoEl = document.getElementsByTagName('video')[0], 
playPauseBtn = document.getElementById('playPause'),
vidControls = document.getElementById('controls'),
muteBtn = document.getElementById('muteUnmute'),
timeHolder = document.getElementById('timer');

videoEl.removeAttribute('controls');

videoEl.addEventListener('canplaythrough', function() {
    vidControls.classList.remove('hidden');
}, false);

playPauseBtn.addEventListener('click', function() {
    if (videoEl.paused) {
        videoEl.play();
    } else {
        videoEl.pause();
    }
}, false );

videoEl.addEventListener('play', function() {
    playPauseBtn.classList.add('playing');
}, false);

videoEl.addEventListener('pause', function() { 
    playPauseBtn.classList.remove('playing');
}, false);

muteBtn.addEventListener('click', function() {
    if (videoEl.muted) {
        videoEl.muted = false;
    } else {
        videoEl.muted = true;
    }
}, false);

videoEl.addEventListener('ended', function() {
    videoEl.currentTime = 0;
}, false);

videoEl.addEventListener('timeupdate', function() {
    timeHolder.innerHTML = secondsToTime(videoEl.currentTime);
}, false);


console.log(videoEl);
console.log('The code is working!');