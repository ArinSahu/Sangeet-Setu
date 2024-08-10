// console.log("Chala");

let songIndex=1;
let audioElement = new  Audio("songs/music1.mp3");
let masterPlay=document.getElementById("masterPlay");
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"Sajni Re" , filepath:"Music1.mp3" , coverpath:"covers/cover1.jpeg"},
    {songName:"Apna bana le piya" , filepath:"Music2.mp3" , coverpath:"covers/cover2.jpeg"},
    {songName:"Pehle bhi mai" , filepath:"Music3.mp3" , coverpath:"covers/cover3.jpeg"},
    {songName:"Sanam teri kasam" , filepath:"Music4.mp3" , coverpath:"covers/cover4.jpeg"},
    {songName:"Tera hone laga hoon" , filepath:"Music5.mp3" , coverpath:"covers/cover5.jpeg"}
]


songItems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
});

masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();    
        let y = document.getElementById(songIndex);
        console.log(y);
        y.classList.remove('fa-circle-play');
        y.classList.add('fa-circle-pause');
        gif.style.opacity=1;
        //document.getElementById('songInfoName').innerHTML=songs[0];
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    }
    else{
        audioElement.pause();
        let eee = document.getElementById(songIndex);
        eee.classList.remove('fa-circle-play');
        eee.classList.add('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;

    }
})

audioElement.addEventListener("timeupdate",()=>{
    // console.log("Time Update");
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime= myProgressBar.value*audioElement.duration/100;
})

const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        if(audioElement.paused){

            makeAllplays();
            songIndex=parseInt(e.target.id);
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.src=`songs/music${songIndex}.mp3`;
            
            audioElement.play();
            gif.style.opacity=1;
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
        }
        else{
            makeAllplays();
            audioElement.pause();
        }
    })
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=1){
        songIndex=1;
    }
    else{
        songIndex-=1;
    }
    makeAllplays();
    audioElement.src=`songs/music${songIndex}.mp3`;
    masterSongName.innerText =songs[songIndex-1].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=5){
        songIndex=1;
    }
    else{
        songIndex+=1;
    }
    makeAllplays();
    audioElement.src=`songs/music${songIndex}.mp3`;
    masterSongName.innerText =songs[songIndex-1].songName;
    let ee = document.getElementById(songIndex);
    ee.classList.remove('fa-circle-play');
    ee.classList.add('fa-circle-pause');
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})
document.getElementById('masterPlay').addEventListener('click',()=>{
   
    if(audioElement.paused){
        let x=document.getElementById(songIndex);
        // console.log(x);
        x.classList.remove('fa-circle-pause');
        x.classList.add('fa-circle-play');
    }
})
