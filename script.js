const title = document.getElementById('title')
const artist = document.getElementById('artist')
const audio = document.querySelector('audio')

const progressContainer = document.getElementById('progress-container')
const progress = document.getElementById('progress')
const currentTimeElement = document.getElementById('current-time')
const durationElement = document.getElementById('duration')

const prevBtn = document.getElementById('prev')
const playBtn = document.getElementById('play')
const nextBtn = document.getElementById('next')

//  FAKE DATABASE

//  OBJECT ANLAYISHI

const songs = [
   {
      
      // OBYEKTIN DAXILINDE KEY HISSELER BIR-BIRINDEN VERGULLE AYRILIR
      // OBYEKT IKI HISSEDEN IBARETDIR : {KEY:VALUE}
      name:'bastard',
      displayName: 'Bastardin mahnisi',
      artist: 'Bastard'

   },
   {
      name:'blackpink',
      displayName: 'Blacpinkin mahnisi',
      artist: 'Blackpink'
   }, 
   {
      name:'joel',
      displayName: 'Joelin mahnisi',
      artist: 'Joel'
   }, 
   {
      name:'masked',
      displayName: 'Masked mahnisi',
      artist: 'Masked'
   }
]

//  boolean deyerlerin adlandirilmasi qaydalari:
// is ile bashlayir
// BURADA CALLBACK UCUN IKI VEZIYYET YARANIR KLIKLENEN ZAMAN MAHNI OXUSUN YA DAYANSIN!
// Bunun ucun state olaraq isPlaying deyisheninden istifade edirik.
// state - veziyyet demekdir
let isPlaying = false // qlobal deyishen

function playSong() {
   isPlaying = true
   playBtn.classList.replace('fa-play', 'fa-pause')
   // 3rd PARTY API (kitabxanaya) muraciet
   //  play metodunu calishdirir
   audio.play()

}

function pauseSong() {
   isPlaying = false
   playBtn.classList.replace('fa-pause', 'fa-play')
   audio.pause()

}

// function pauseSongClassicFunction()  0

// ARROW Function 2015-ci ilde ES6 standartlari ile gelen ozelliklerden biridir
// const pauseSongArrow = _ =>  console.log("Salam")
// if(isPlaying) {

// }

// else {

// }

// TERNARY OPERATOR ? :

playBtn.onclick = function() {
   // if(isPlaying) {
   //    pauseSong()
   // }
   // else {
   //    playSong()
   // }
   isPlaying ? pauseSong() : playSong()
}

// playBtn.addEventListener('click', ()=> ())