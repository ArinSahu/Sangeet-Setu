console.log("Chala");

let songIndex=0;
let audioElement = new  Audio("music1.mp3");
let masterPlay=document.getElementById("masterPlay");
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById('gif');
let songs=[
    {songName:"Sajni Re" , filepath:"music1.mp3" , coverpath:"cover1.jpg"},
    {songName:"Music Name" , filepath:"music1.mp3" , coverpath:"cover1.jpg"},
    {songName:"Music Name" , filepath:"music1.mp3" , coverpath:"cover1.jpg"},
    {songName:"Music Name" , filepath:"music1.mp3" , coverpath:"cover1.jpg"},
    {songName:"Music Name" , filepath:"music1.mp3" , coverpath:"cover1.jpg"}
]

masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        gif.style.opacity=1;
        //document.getElementById('songInfoName').innerHTML=songs[0];
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;

    }
})

myProgressBar.addEventListener("timeupdate",()=>{
    console.log("Time Update");
})