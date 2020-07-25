function getQueryVariable(variable) {
var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}



var media1 = getQueryVariable("media1");
var media2 = getQueryVariable("media2");
var media1type = getQueryVariable("media1type");
var media2type = getQueryVariable("media12type");
var buttontitle = getQueryVariable("buttontitle");
var buttonlink = getQueryVariable("buttonlink");
var checksubmit = getQueryVariable("submit");
if (checksubmit) {
       //alert("form sumbmitted");
var media1 = decodeURIComponent(media1.replace(/\+/g, '%20') );
var media2 = decodeURIComponent(media2.replace(/\+/g, '%20') );
var buttonlink = decodeURIComponent(buttonlink.replace(/\+/g, '%20') );
var buttontitle = decodeURIComponent(buttontitle.replace(/\+/g, '%20') );
 if (media1type == "video") {
        //alert("case 1 mp4");
jQuery(document).ready(function(){
jQuery(".formy").hide();
 jQuery(".medy").show();
 jQuery(".yt").hide();
 jQuery(".pic").hide();
 });
document.getElementById('media1').src = media1;
document.getElementById('media2').src = media2;
var d2 = document.getElementById('button2');
d2.insertAdjacentHTML('afterend', '<a href="'+ buttonlink +'"><button style="background-color:#DA4336;margin: 4px 2px;padding: 5px 5px;color:white;border:none;border-radius:10px;text-decoration:none;" >' + buttontitle + ' </button></a>');
 }
 
 
 else if (media1type == "image") {
        //alert("case image");
jQuery(document).ready(function(){
jQuery(".formy").hide();
 jQuery(".medy").hide();
 jQuery(".yt").hide();
 jQuery(".pic").show();
 });
document.getElementById('pic1').src = media1;
document.getElementById('pic2').src = media2;
var d9 = document.getElementById('button3');
d9.insertAdjacentHTML('afterend', '<a href="'+ buttonlink +'"><button style="background-color:#DA4336;margin: 4px 2px;padding: 5px 5px;color:white;border:none;border-radius:10px;text-decoration:none;" >' + buttontitle + ' </button></a>');
 }
 
 
else if (media1type == "youtube") {
//alert("case 2 youtube");
jQuery(document).ready(function(){
jQuery(".formy").hide();
 jQuery(".medy").hide();
 jQuery(".yt").show();
 jQuery(".pic").hide();
 });
 
 function metAhh() { 
  var title1 =  player1.getVideoData().title;
  var title2 =  player2.getVideoData().title;
//alert(title1);
//alert(title2);
var title = title1 + "  X  " + title2;
alert(title);
jQuery('meta[property="og:title"]').replaceWith('<meta property="og:title" content=title>');
jQuery('meta[property="og:description"]').replaceWith('<meta property="og:description" content=" + title + ">');
}

let re = /^(https?:\/\/)?((www\.)?(youtube(-nocookie)?|youtube.googleapis)\.com.*(v\/|v=|vi=|vi\/|e\/|embed\/|user\/.*\/u\/\d+\/)|youtu\.be\/)([_0-9a-z-]+)/i; // added 7-12-2020;
let idone = media1.match(re)[7]; // added 7-12-2020
//alert(idone);
//var media1 = 'https://youtube.com/embed/' + idone + '?autoplay=1';
//alert(media1);
//document.getElementById('yt1').src = media1;
let idtwo = media2.match(re)[7]; // added 7-12-2020
//alert(idtwo);
//var media2 = 'https://youtube.com/embed/' + idtwo + '?autoplay=1';
//alert(media2);
//document.getElementById('yt2').src = media2;
var d1 = document.getElementById('button1');
d1.insertAdjacentHTML('afterend', '<a href="'+ buttonlink +'"><button style="background-color:#DA4336;margin: 4px 2px;padding: 5px 5px;color:white;border:none;border-radius:10px;text-decoration:none;" >' + buttontitle + ' </button></a>');
// added 7-18-2020
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
    //height: '360',
    //width: '640',
    videoId: idone,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
  
  player2 = new YT.Player('player2', {
    //height: '360',
    //width: '640',
    videoId: idtwo,
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
    //document.getElementById('playButton').innerHTML = 'Pause';

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
    
    function swapSound() {
  if (player1.isMuted()) {
    alert('player1 not muted');
  player2.unMute();
  }
  else if (player2.isMuted()) {
  alert('player 2 not muted');
  player1.unMute();
  }
}
    
    
  }

  // If the video is PAUSED, set the onclick element for pause the video.
  // Once the "playButton" is clicked, the video will resume the video = continue playing the video.
  if (event.data == YT.PlayerState.PAUSED) {
    //document.getElementById('playButton').innerHTML = 'Play';
    //document.getElementById('playButton').onmouseout = function() {
      player2.pauseVideo();
      player1.pauseVideo();
    //};
  }
}

// Div "player" - The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
      metAhh();
  
//document.querySelector('meta[property="og:title"]').setAttribute("content", title);
}
}       
}
       
else {
 jQuery(document).ready(function(){
 jQuery(".formy").show();
 jQuery(".medy").hide();
 jQuery(".yt").hide();
 jQuery(".pic").hide();
  });
 //alert("case 3");
}

function playVid() {
document.querySelectorAll("video").forEach(vid => vid.play());
document.getElementsByTagName("video")[0].removeAttribute("controls");
document.getElementsByTagName("video")[1].removeAttribute("controls");
}
function pauseVid() {
document.querySelectorAll("video").forEach(vid => vid.pause());
document.getElementsByTagName("video")[0].removeAttribute("controls");
document.getElementsByTagName("video")[1].removeAttribute("controls");
}
