
$(document).ready(function() {

  //Other browsers

  var audioSrc = document.getElementById("audioSrc");

  //Sets volume to 30
  audioSrc.volume = 0.3;

  //Fetches volume value and makes it whole tenth's
  $('.volnum').html(audioSrc.volume.toFixed(1) * 100);

  //Get buttons by ID
  var playBtn = document.getElementById("playBtn");

  var pauseBtn = document.getElementById("pauseBtn");

  var volBtnUp = document.getElementById("volUp");

  var volBtnDown = document.getElementById("volDown");

  var muteBtn = document.getElementById("muteBtn");

  var triggerMute = "#muteBtn.unmute";

  //Switches image for the mute button (mute & unmute)
  $(triggerMute).on('click', function(){
      $(this).toggleClass('mute');
  });

  //Mute button (trigger)
  $(muteBtn).on('click', function(){
  if (audioSrc.muted == false){

    //Mutes the audio
    audioSrc.muted = true;

  } else {

    //Unmutes the audio
    audioSrc.muted = false;
  }
  });

  //Volume up
  function volumeUp(){
    var volume = $(audioSrc).prop("volume")+0.1;
    if(volume >1){
        volume = 1;
    }
    $(audioSrc).prop("volume",volume);
  }

  //Volume down
  function volumeDown(){
      var volume = $(audioSrc).prop("volume")-0.1;
      if(volume <0){
          volume = 0;
      }
      $(audioSrc).prop("volume",volume);
  }

  //Increase volume by 10 when clicked
  $(volBtnUp).on('click', function(){
    volumeUp();
    $('.volnum').html(audioSrc.volume.toFixed(1) * 100);
  });

  //Lower volume by 10 when clicked
  $(volBtnDown).on('click', function(){
    volumeDown();
    $('.volnum').html(audioSrc.volume.toFixed(1) * 100);
  });

  //Play audio
  $(playBtn).on('click', function(){
    audioSrc.play();
    playBtn.className = "";
    playBtn.className = "playbtn2";
    pauseBtn.className = "";
    pauseBtn.className = "pausebtn";
  });

  //Pause audio
  $(pauseBtn).on('click', function(){
    audioSrc.pause();
    pauseBtn.className = "";
    pauseBtn.className = "pausebtn2";
    playBtn.className = "";
    playBtn.className = "playbtn";
  });

  });