
$(document).ready(function(){

//CSS & JS changer for the audio player

  if (bowser.chrome == true) //Initiate script if browser being used is Chrome
  {
      var link  = document.getElementById('cssLoad'); //Load css for Chrome
      link.href = 'css/chrome.css';

      var link2  = document.getElementById('playerLoad'); //Load player JS functions for Chrome
      link2.src = 'js/player.js';
  }

  var bowserChrome = bowser.chrome;

  if (bowserChrome !== true) //Initiate script if browser being used is other then Chrome
  {
      var link  = document.getElementById('cssLoad'); //Load css for other browsers
      link.href = 'css/other.css';

      var link2  = document.getElementById('playerLoad'); //Load player JS functions for other browsers
      link2.src = 'js/player2.js';
  }



//Nav buttons

  $(".topbtn").mouseenter(function(){
    $(this).stop(true);
    $(this).clearQueue();
      $(this).animate({
        left : "0px"
      }, 300); //Speed of animation (going out)

  });

  $(".topbtn").mouseleave(function(){
    $(this).animate({
      left:"-92px"
    },700,'easeOutBounce'); //Speed of animation (going in)
  });

});