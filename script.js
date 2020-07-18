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
 });
document.getElementById('media1').src = media1;
document.getElementById('media2').src = media2;
var d2 = document.getElementById('button2');
d2.insertAdjacentHTML('afterend', '<a href="'+ buttonlink +'"><button style="background-color:#DA4336;margin: 4px 2px;padding: 5px 5px;color:white;border:none;border-radius:10px;text-decoration:none;" >' + buttontitle + ' </button></a>');
 }
else if (media1type == "youtube") {
alert("case 2 youtube");
jQuery(document).ready(function(){
jQuery(".formy").hide();
 jQuery(".medy").hide();
 jQuery(".yt").show();
 });
let re = /^(https?:\/\/)?((www\.)?(youtube(-nocookie)?|youtube.googleapis)\.com.*(v\/|v=|vi=|vi\/|e\/|embed\/|user\/.*\/u\/\d+\/)|youtu\.be\/)([_0-9a-z-]+)/i; // added 7-12-2020;
let idone = media1.match(re)[7]; // added 7-12-2020
var media1 = 'https://youtube.com/embed/' + idone + '?autoplay=1';
//alert(media1);
//document.getElementById('yt1').src = media1;
let idtwo = media2.match(re)[7]; // added 7-12-2020
//alert(id);
var media2 = 'https://youtube.com/embed/' + idtwo + '?autoplay=1';
//alert(media2);
//document.getElementById('yt2').src = media2;
var d1 = document.getElementById('button1');
d1.insertAdjacentHTML('afterend', '<a href="'+ buttonlink +'"><button style="background-color:#DA4336;margin: 4px 2px;padding: 5px 5px;color:white;border:none;border-radius:10px;text-decoration:none;" >' + buttontitle + ' </button></a>');
// added 7-18-2020
 // Load the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  const video_container = document.getElementById('video_container');
  const videos = [media1, media2];


  const players = [];
       
       
   function mute(){ //need to modify for either/or not both videos
    players.forEach(function(p){
      p.playVideo();
    })
  }
  
  function playAll(){
    players.forEach(function(p){
      p.playVideo();
    })
  }

  function pauseAll(){
    players.forEach(function(p){
      p.stopVideo();
    })
  }

  function state_changed(e) {
    console.log('state changed', e)
    // PLAYING
    if(e.data === 1) {
      playAll();
    } 
    // PAUSED
    if(e.data === 2){
      pauseAll();
    }
  }


  function onYouTubePlayerAPIReady() {
    videos.forEach(function(v){
      const el = document.createElement('div');
      video_container.append(el);
      const player = new YT.Player(el, {
        videoId: v,
        events: {
          onStateChange: state_changed,
        },
      });
      players.push(player);
    });
// added 7-18-2020      
       
}

}
else {
 jQuery(document).ready(function(){
 jQuery(".formy").show();
 jQuery(".medy").hide();
 jQuery(".yt").hide();
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
