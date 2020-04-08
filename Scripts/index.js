const mobileNav =  document.querySelector('.mobile-nav');
const openMobileNavBtn = document.querySelector('.open-mobile-nav-icon');
const closeMobileNavBtn = document.querySelector('.close-mobile-nav-icon');

const rewindBtn = document.querySelector('.rewind-btn');
const playOrPauseBtn = document.querySelector('.play-btn2');
const fastforwardBtn = document.querySelector('.fast-forward-btn');
const podcasts = [
          'Assets/podcasts/Bah Khrist - Timing.mp3', 
          'Assets/podcasts/Big Sean ft 21 Savage - Pull up n wreck.mp3', 
          'Assets/podcasts/Lil Wayne ft Big Sean and Lil Baby - I do it.mp3'
     ];

let podcast = new Audio();
let currentPodcast = 0;

window.addEventListener('DOMContentLoaded', function() {
     loadPodcast();
     
     closeMobileNavBtn.addEventListener('click', function() {
          mobileNav.classList.remove('active');
     })
     
     openMobileNavBtn.addEventListener('click', function() {
          mobileNav.classList.add('active');
     })
     
     playOrPauseBtn.addEventListener('click', function() {
          currentPodcast = podcasts[this.parentNode.parentNode.parentNode.id]
          if(podcast.paused) {
               podcast.play();
               this.src = 'Assets/Images/pause.png';
          } else {
               podcast.pause();
               this.src = 'Assets/Images/play.png'
          }
     })
     
     rewindBtn.addEventListener('click', function() {
          console.log(this)
     })
     
     fastforwardBtn.addEventListener('click', function() {
          console.log(this)
     })
})

function loadPodcast() {
     podcast.src = podcasts[currentPodcast];
}