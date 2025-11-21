let songs = [
  {'number':0,'artist':'Sum 41','title':'In Too Deep','start':0,'duration':1,'url':'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e0/fa/d3/e0fad3a4-a15b-18e4-5c4a-6666d6eb80c5/mzaf_7948915762541534048.plus.aac.p.m4a'},
  {'number':1,'artist':'Queen','title':'Bohemian Rhapsody','start':0,'duration':1,'url':'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/ae/ac/e7/aeace7b3-74d8-7025-0770-37508d58896c/mzaf_833665627772330896.plus.aac.p.m4a'},
  {'number':2,'artist':'The Killers','title':'Mr Brightside','start':12,'duration':1,'url':'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b3/95/6e/b3956e14-35f0-937e-afb0-72774d3f613f/mzaf_8359343604382181711.plus.aac.p.m4a'},
  {'number':3,'artist':'The Killers','title':'Somebody Told Me','start':14,'duration':1,'url':'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/3f/52/56/3f525606-7cb8-0292-51c1-c617802ba773/mzaf_433193577063250516.plus.aac.p.m4a'},
  {'number':4,'artist':'Arctic Monkeys','title':'I Bet You Look Good on the Dancefloor','start':7,'duration':1,'url':'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/d5/fa/0b/d5fa0b43-8a9d-71b8-c174-06120380e2f2/mzaf_9555095373337300237.plus.aac.p.m4a'},
  {'number':5,'artist':'Oasis','title':'Champagne Supernova','start':0,'duration':1,'url':'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/fa/d8/55/fad85524-f55e-2ba5-8d55-99b02e6d0cc2/mzaf_15063109362104085757.plus.aac.p.m4a'},
  {'number':6,'artist':'Oasis','title':'Wonderwall','start':0,'duration':1,'url':'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/38/9c/84/389c846a-0f7a-7e7a-4f13-e63a89c63c23/mzaf_13662991528750375845.plus.aac.p.m4a'},
    {'number':7,'artist':'The Prodigy','title':'Firestarter','start':0,'duration':1,'url':'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a1/52/1b/a1521b00-d50e-7786-2a32-3d394dc6f2d6/mzaf_15637961067680585575.plus.aac.p.m4a'},
      {'number':8,'artist':'Robin Thicke','title':'Blurred Lines (feat. T.I. & Pharrell)','start':0,'duration':1,'url':'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/53/32/8b/53328bdd-d670-144e-3a1a-2161aec0bae2/mzaf_13306512628522041727.plus.aac.p.m4a'},
        {'number':9,'artist':"Ol' Dirty Bastard",'title':'Got Your Money (feat. Kelis)','start':0,'duration':1,'url':'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/e4/31/f1/e431f1f5-8f65-ea33-fe63-6c70894da276/mzaf_16719134120598413060.plus.aac.p.m4a'},
          {'number':10,'artist':"Ol' Dirty Bastard",'title':'Shimmy Shimmy Ya','start':2,'duration':1,'url':'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/2b/64/b2/2b64b20f-0ad6-76d8-2296-7c045e934182/mzaf_7272446628496993126.plus.aac.p.m4a'},
            {'number':11,'artist':'Ginuwine','title':'Pony','start':2,'duration':1,'url':'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/96/ac/39/96ac3940-b663-f019-0204-ffd5cf9f2415/mzaf_3923703278687367376.plus.aac.p.m4a'},
              {'number':12,'artist':'Eurythmics','title':'Sweet Dreams (Are Made of This)','start':12,'duration':1,'url':'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/33/72/78/337278b2-6ec6-ddbd-1d11-94e0c8ca3b22/mzaf_17096504411490598724.plus.aac.p.m4a'},
                {'number':13,'artist':'Rezz & Subtronics','title':'Puzzle Box','start':0,'duration':1,'url':'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/99/fb/ad/99fbad78-630c-60c1-638c-4b84c2776c9c/mzaf_15847070874454272221.plus.aac.p.m4a'},
                  {'number':14,'artist':'deadmau5','title':'Ghosts n Stuff (feat. Rob Swire)','start':5,'duration':1,'url':'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/6e/9d/de/6e9dde9c-5843-3e92-0025-bd9ac3999e76/mzaf_681155943312588514.plus.aac.p.m4a'},
                    {'number':15,'artist':'Soft Cell','title':'Tainted Love','start':1,'duration':1,'url':'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/59/ad/28/59ad2888-2b61-7f07-a779-b18cc013c698/mzaf_5227993960460210837.plus.aac.p.m4a'},
                      {'number':16,'artist':'Britney Spears','title':'...Baby One More Time','start':21,'duration':1,'url':'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/33/9e/52/339e528d-527b-0b3d-cb89-3c0dc6452cd0/mzaf_11541519885175005927.plus.aac.p.m4a'},
                        {'number':17,'artist':'Dr. Dre','title':'The Next Episode (feat. Snoop Dogg & Nate Dogg)','start':1,'duration':1,'url':'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/98/d7/ca/98d7cacf-2f89-9ca1-e16f-e2ac8acb7ad0/mzaf_10798800479140701773.plus.aac.p.m4a'},
                          {'number':18,'artist':'Stereophonics','title':'Dakota','start':0,'duration':1,'url':'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ae/61/f6/ae61f65a-ea86-ac53-2d12-191e6b350245/mzaf_17157481472023863474.plus.aac.p.m4a'},
                            {'number':19,'artist':'PSY','title':'Gangnam Style','start':0,'duration':1,'url':'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/3d/65/ae/3d65ae0a-7b2c-f14d-5680-cdafaa8cfb2d/mzaf_11206445915046452880.plus.aac.p.m4a'},
                              {'number':20,'artist':'Dizzee Rascal','title':'Bassline Junkie','start':7,'duration':1,'url':'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/9b/1d/81/9b1d8140-2357-2de4-32b4-7e53b1461379/mzaf_10746250794825549033.plus.aac.p.m4a'},
                                {'number':21,'artist':'So Solid Crew','title':'21 Seconds','start':28,'duration':1,'url':'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/37/a7/e1/37a7e113-09e5-6957-df5d-e37f8cf2f920/mzaf_9304241075988244477.plus.aac.p.m4a'},
  
   {'number':22,'artist':'INXS','title':'Need You Tonight','start':8,'duration':1,'url':'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/00/48/0c/00480c54-1c92-b625-0fcd-3ecd1e97ca07/mzaf_7734896278082933188.plus.aac.p.m4a' }
  
]

//VARIABLES

const audio = document.getElementById('audio') 

const playButton = document.getElementById('play-button')
const playRing = document.getElementById('play-ring'); // new: SVG ring

const textBox = document.getElementById('text-box')

const skipButton = document.getElementById('skip-button');


let listOfSongs = [];
let userAnswers = [];
let correctAnswers = [];
let currentSong;

// Smooth ring animation variables
let ringStartTime = null;
let ringAnimationFrame = null;
const totalTime = 21000; // 21 seconds in ms

/* disable UI immediately in case it's a problem
playButton.disabled = true;
playButton.setAttribute('aria-disabled', 'true');

setTimeout(() => {
  playButton.disabled = false;
  playButton.removeAttribute('aria-disabled');
}, 2100);
*/

// SONG FUNCTIONS

function randomOrder() {
  
  let numberOfSongs = songs.length;
  let numbers = Array.from({ length: numberOfSongs }, (_, i) => i); // [0, 1, 2, ... max];
  numbers.sort(() => Math.random() - 0.5); // shuffle
  listOfSongs = numbers.slice(0, 20); // take first 20;  
}

function playSong(song) {
 
  
  audio.src = song.url;
  audio.load(); // ensure the browser starts loading the new file

  // Prevent stacking listeners by using { once: true }
  audio.addEventListener('loadedmetadata', () => {

    // Jump to the correct start point only *after* metadata is ready
    audio.currentTime = song.start;

    // Wait for audio to be seekable before playing (prevents "short clips")
    audio.addEventListener('canplay', () => {
      audio.play();

      // stop after duration
      setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
      }, song.duration * 1000);

    }, { once: true });

  }, { once: true });
}

function saveAnswer(answer) {
  
  correctAnswers.push(`${currentSong.title} by ${currentSong.artist}`)
  userAnswers.push(answer)
  textBox.value = '';
  textBox.placeholder = 'Type your answer in this box or press Play to listen again'
}

function changeSong() {
  
  let song = songs[listOfSongs.shift()]
    
  currentSong = song;
  
    // Reset and start ring for the new song
  resetRing();
  startRingCountdown();
  
  console.log(listOfSongs)
  console.log(userAnswers)
  console.log(correctAnswers)
  
  playSong(song)
  
  skipSong.timeout = setTimeout(() => {
  saveAnswer(textBox.value);
  listOfSongs.length > 0 ? changeSong() : endGame();
}, totalTime);
  
}

// RING ANIMATION FUNCTIONS

function startRingCountdown() {
  cancelAnimationFrame(ringAnimationFrame); // stop any previous animation
  ringStartTime = null;

  function animateRing(timestamp) {
    if (!ringStartTime) ringStartTime = timestamp;
    const elapsed = timestamp - ringStartTime;
    const progress = Math.min(elapsed / totalTime, 1);
    const dashOffset = 283 * progress; // circumference 2*PI*45
    playRing.style.strokeDashoffset = dashOffset;

    if (progress < 1) {
      ringAnimationFrame = requestAnimationFrame(animateRing);
    }
  }

  ringAnimationFrame = requestAnimationFrame(animateRing);
}

function resetRing() {
  cancelAnimationFrame(ringAnimationFrame);
  playRing.style.strokeDashoffset = 0;
}


//GAMEPLAY FUNCTIONS
randomOrder()
  console.log(listOfSongs)

function startGame() {
  
  
  textBox.placeholder = 'Answer here or press Play to listen again'
  changeSong()
 
}
  
function endGame() {

  console.log(listOfSongs)
  console.log(userAnswers)
  console.log(correctAnswers)

  // Start div and first button
  let results = '<div class="centred-no-gap"><h1>GAME OVER</h1>';

  //results += '<button id="play-again-1" class="skip-button" style="display: block; margin-bottom: 2px;">Play again</button>';
  
  for (let i = 0; i < correctAnswers.length; i++) {
    results += `<p>Song ${i + 1} was <strong>${correctAnswers[i]}</strong></p>
                <p>You said: <strong>${userAnswers[i]}</strong></p><hr>`;
  }


  
  results += '<button id="play-again-2" class="skip-button" style="display:block;">Play again</button>';
  results += '</div>';

  // Assign HTML to the body
  document.body.innerHTML = results;

  // Attach listeners AFTER elements exist
  // document.getElementById('play-again-1').addEventListener('click', () => location.reload());
  document.getElementById('play-again-2').addEventListener('click', () => location.reload());
}

function skipSong() {
  saveAnswer(textBox.value); // record blank answer for the skipped song
  
  // Stop audio + ring animation
  audio.pause();
  audio.currentTime = 0;
  cancelAnimationFrame(ringAnimationFrame);
  
  // Stop the current scheduled changeSong
  clearTimeout(skipSong.timeout);

 if (listOfSongs.length > 0) {
    changeSong();
  } else {
    endGame()}
 
}


playButton.addEventListener('click', () => {
  skipButton.style.display = 'block';   
  if (listOfSongs.length === 20) {
       // startRingCountdown();
       startGame()}
     
     else {playSong(currentSong)}
} )

textBox.addEventListener('input', () => {
  if (listOfSongs.length < 20 && textBox.value.trim() !== '') {
    skipButton.style.display = 'block';
  } else {
    skipButton.style.display = 'none';
  }
});

skipButton.addEventListener('click', skipSong);
 

