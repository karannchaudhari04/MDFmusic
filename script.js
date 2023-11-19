let songIndex = 0;
let audioElement = new Audio('m1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let mastersong = document.getElementById('mastersong');
songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songname: "Faasale - Aditya Rikhari", filePath: "m1.mp3", coverPath: "cover1.jpeg"},
    {songname: "Dil Jhoom - Gadar2", filePath: "m2.mp3", coverPath: "cover2.jpeg"},
    {songname: "Hai Khuda", filePath: "m3.mp3", coverPath: "cover3.jpeg"},
    {songname: "Chaleya - Jawan", filePath: "m4.mp3", coverPath: "cover4.jpeg"},
    {songname: "Jai Shree Ram - Adipurush", filePath: "m5.mp3", coverPath: "cover5.jpeg"},
    {songname: "Dekh Lena - Tum Bin 2", filePath: "m6.mp3", coverPath: "cover6.jpeg"},
    {songname: "Haal-E-Dil - Sanam Teri Kasam", filePath: "m7.mp3", coverPath: "cover7.jpeg"},
    {songname: "Tum se hi - Jab we met", filePath: "m8.mp3", coverPath: "cover8.jpeg"},
    {songname: "Tum hi ho bandhu", filePath: "m9.mp3", coverPath: "cover9.jpg"},
    {songname: "Heeriye - Arjit Singh", filePath: "m10.mp3", coverPath: "cover10.jpg"},
    {songname: "Ram Siya Ram - Ram", filePath: "m11.mp3", coverPath: "cover11.jpg"},
    {songname: "Matargashti - Tamasha", filePath: "m12.mp3", coverPath: "cover12.jpg"},
    {songname: "Om jai jagdish hare", filePath: "m13.mp3", coverPath: "cover13.jpg"},
    {songname: "Tere Hawale", filePath: "m14.mp3", coverPath: "cover14.jpg"},
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songname;
});

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', () => {
    const currentTime = formatTime(audioElement.currentTime);
    const duration = formatTime(audioElement.duration);
    
    document.getElementById('currentTime').innerText = currentTime;
    document.getElementById('duration').innerText = duration;
    
    const progress = (audioElement.currentTime / audioElement.duration) * 100;
    myProgressBar.value = progress;
});

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    
    const formattedMinutes = (minutes < 10) ? `0${minutes}` : minutes;
    const formattedSeconds = (seconds < 10) ? `0${seconds}` : seconds;
    
    return `${formattedMinutes}:${formattedSeconds}`;
}

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
};
let currentSongIndex = 0;
songs = [
    'm1.mp3',
    'm2.mp3',
    'm3.mp3',
    'm4.mp3',
    'm5.mp3',
    'm6.mp3',
    'm7.mp3',
    'm8.mp3',
    'm9.mp3',
    'm10.mp3',
    'm11.mp3',
    'm12.mp3',
    'm13.mp3',
    'm14.mp3',
];

const playSong = (index) => {
    if (audioElement.src !== songs[index]) {
        audioElement.src = songs[index];
    }
    makeAllPlays();
    document.querySelectorAll('.songItemPlay')[index].classList.remove('fa-play-circle');
    document.querySelectorAll('.songItemPlay')[index].classList.add('fa-pause-circle');
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 0;
};
 
const nextSong = () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(currentSongIndex);
};

const previousSong = () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(currentSongIndex);
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, index) => {
    element.addEventListener('click', function () {
        playSong(index);
    });
});

document.querySelector('.fa-step-backward').addEventListener('click', function () {
    previousSong();
});

document.querySelector('.fa-step-forward').addEventListener('click', function () {
    nextSong();
});

document.getElementById('songChange').addEventListener('click', function(event){
    const songName = songs[index].songname; // Get the song name from the array
    mastersong.innerText = songName; // Update the 'mastersong' element with the song name
    console.log("Song Name:", songName);
});