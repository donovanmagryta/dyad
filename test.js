// javascript for test.html


  var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Variables of the divs (where the YouTube iframe will load):
var player1;
var player2;

function onYouTubeIframeAPIReady() {

  // Div player:
  player1 = new YT.Player('player1', {
    height: '360',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
  
  player2 = new YT.Player('player2', {
    height: '360',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });

  // After loading the iframe, set the "playVideo" onclick event on "playButton" anchor element.
  ///document.getElementById('playButton').onclick = function() {
   // player1.playVideo();
 // };

}

// 5. The API calls this function when the player's state changes.
function onPlayerStateChange(event) {

  // If the video is PLAYING, set the onclick element for pause the video.
  // Once the "playButton" is clicked, the video will be paused.
  if (event.data == YT.PlayerState.PLAYING) {
  player2.playVideo();
  player1.playVideo();
    document.getElementById('playButton').innerHTML = 'Pause';

    // Set the onclick event to the button for pause the YouTube video.
    document.getElementById('player1').onmouseover = function() {
     player1.unMute();
      player2.mute();
    //};
  }
  
  document.getElementById('player2').onmouseover = function() {
      player2.unMute();
      player1.mute();
    };
  }

  // If the video is PAUSED, set the onclick element for pause the video.
  // Once the "playButton" is clicked, the video will resume the video = continue playing the video.
  if (event.data == YT.PlayerState.PAUSED) {
    document.getElementById('playButton').innerHTML = 'Play';
    //document.getElementById('playButton').onmouseout = function() {
      player2.pauseVideo();
      player1.pauseVideo();
    //};
  }
}

// Div "player" - The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

 
  
  //
  var buttonstate=0;
function onoff(element) {
  buttonstate= 1 - buttonstate;
  var blabel;
  if(buttonstate)
  {
    blabel="Play";
    player1.pauseVideo();
    player2.pauseVideo();
  }
  else
  {
    blabel="Pause";
    player1.playVideo();
    player2.playVideo();
  }
  var child=element.firstChild;
  child.innerHTML=blabel;
}

