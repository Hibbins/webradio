
$(document).ready(function() {

  //Chrome

  var audioSrc = document.getElementById("audioSrc");

  var playBtn = document.getElementById("playButton");

  var pauseBtn = document.getElementById("pauseButton");

  var volCtrl = document.getElementById("volumeCtrl");

  var muteBtn = document.getElementById("muteButton");

  $(muteBtn).on('click', function(){
  if (audioSrc.muted == false){
    // Mute the audio
    audioSrc.muted = true;

  } else {
    // Unmute the audio
    audioSrc.muted = false;
  }
  });

  $(volCtrl).on('change', function(){
    //Volume up/down
    audioSrc.volume = volCtrl.value / 100;
    //Fetches volume value and makes it whole tenth's
  });

  $(playBtn).on('click', function(){
    //Play audio
    audioSrc.play();
    audioSrc.volume = volCtrl.value / 100;
    //Fetches volume value and makes it whole tenth's
  });

  $(pauseBtn).on('click', function(){
    //Pause audio
    audioSrc.pause();
  });

  });