document.addEventListener('DOMContentLoaded', ()=>{
    const videoElement = document.querySelector('.video-section video');
    const playButton = document.querySelector('.video-section img');
    playButton.addEventListener("click", ()=>{
        videoElement.play();
    })
    videoElement.addEventListener('play', ()=> {
        playButton.style.display = 'none';
    })
    videoElement.addEventListener('pause', ()=> {
        playButton.style = '';
    })
})