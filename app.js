let progress = document.getElementById("progress");
let song = document.getElementById("song");
let controlIcon = document.getElementById("ctrlIcon");




song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}


function playPause() {
    if (controlIcon.classList.contains('fa-pause')) {
        song.pause();
        controlIcon.classList.remove('fa-pause');
        controlIcon.classList.add('fa-play');
    } else {
        song.play();
        controlIcon.classList.remove('fa-play');
        controlIcon.classList.add('fa-pause');
    }
}
controlIcon.addEventListener('click', playPause);


// Update slider position as song plays
song.addEventListener('timeupdate', () => {
    progress.value = song.currentTime;
});


// Seek when user moves slider
progress.addEventListener('input', () => {
    song.currentTime = progress.value;
});