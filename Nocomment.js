
function getQueryVariable(variable) {
var query = window.location.search.substring(1);
      
      var vars = query.split("&"); 
     
       
    document.getElementById('media2').muted = true;   
       
       
       
var media1 = decodeURIComponent(media1.replace(/\+/g, '%20') );
var media2 = decodeURIComponent(media2.replace(/\+/g, '%20') );
var buttonlink = decodeURIComponent(buttonlink.replace(/\+/g, '%20') );
var buttontitle = decodeURIComponent(buttontitle.replace(/\+/g, '%20') );
 if (media1type == "video") {
        
jQuery(document).ready(function(){
jQuery(".formy").hide();
 jQuery(".medy").show();
 jQuery(".yt").hide();
 jQuery(".pic").hide();
 });
document.getElementById('media1').src = media1;
document.getElementById('media2').src = media2;
var d2 = document.getElementById('button2');
d2.insertAdjacentHTML('afterend', '<a href="'+ buttonlink +'"><button style="background-color:black;margin: 4px 2px;color:white;border:none;text-decoration:none;" >' + buttontitle + ' </button></a>');
 }
 
 
 else if (media1type == "image") {
        
jQuery(document).ready(function(){
jQuery(".formy").hide();
 jQuery(".medy").hide();
 jQuery(".yt").hide();
 jQuery(".pic").show();
 });
document.getElementById('pic1').src = media1;
document.getElementById('pic2').src = media2;
var d9 = document.getElementById('button3');
d9.insertAdjacentHTML('afterend', '<a href="'+ buttonlink +'"><button style="background-color:black;margin: 4px 2px;color:white;border:none;text-decoration:none;" >' + buttontitle + ' </button></a>');
 }
 
 
else if (media1type == "youtube") {

jQuery(document).ready(function(){
jQuery(".formy").hide();
 jQuery(".medy").hide();
 jQuery(".yt").show();
 jQuery(".pic").hide();
 });
 
 function metAhh() { 
  var title1 =  player1.getVideoData().title;
  var title2 =  player2.getVideoData().title;
var title = title1 + "<br>" + "  X  " + title2;






}

let re = /^(https?:\/\/)?((www\.)?(youtube(-nocookie)?|youtube.googleapis)\.com.*(v\/|v=|vi=|vi\/|e\/|embed\/|user\/.*\/u\/\d+\/)|youtu\.be\/)([_0-9a-z-]+)/i; 
let idone = media1.match(re)[7]; 
let idtwo = media2.match(re)[7]; 
var d1 = document.getElementById('button1');
d1.insertAdjacentHTML('afterend', '<a href="'+ buttonlink +'"><button style="background-color:black;margin: 4px 2px;color:white;border:none;text-decoration:none;" >' + buttontitle + ' </button></a>');

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player1;
var player2;

function onYouTubeIframeAPIReady() {

  
  player1 = new YT.Player('player1', {
    
    
    videoId: idone,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
  
  player2 = new YT.Player('player2', {
    
    
    videoId: idtwo,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });

  

}


function onPlayerStateChange(event) {

  
  
  if (event.data == YT.PlayerState.PLAYING) {
  player1.playVideo();
  player2.playVideo();
   player1.mute(); 
   player2.mute(); 
    

    
   
document.getElementById('media2').muted = true;   
document.querySelectorAll("video").forEach(vid => vid.play());
document.getElementsByTagName("video")[0].removeAttribute("controls");
document.getElementsByTagName("video")[1].removeAttribute("controls");
}
function pauseVid() {
document.querySelectorAll("video").forEach(vid => vid.pause());
document.getElementsByTagName("video")[0].removeAttribute("controls");
document.getElementsByTagName("video")[1].removeAttribute("controls");
}


