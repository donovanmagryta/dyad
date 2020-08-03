
function getQueryVariable(variable) {
var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}


function toggleyt() {
 var valeryt = document.getElementById("togyt").innerHTML;
   if (valeryt == 'A<i class="fas fa-volume-up" aria-hidden="true"></i>') {
       document.getElementById("togyt").innerHTML='B<i class="fas fa-volume-up" aria-hidden="true"></i>';
    player1.unMute();
    player2.mute();
    
  } else {
     document.getElementById("togyt").innerHTML='A<i class="fas fa-volume-up" aria-hidden="true"></i>';
    player2.unMute();
    player1.mute();
  }
}


function togglemp4() {
       //function togglemp4(button){
  var valermp4 = document.getElementById("togmp4").innerHTML;
  if (valermp4 == 'A<i class="fas fa-volume-up" aria-hidden="true"></i>') {
     document.getElementById("togmp4").innerHTML='B<i class="fas fa-volume-up" aria-hidden="true"></i>';
    document.getElementById('media1').muted = false;   /* added 7/30/2020 to test single audio source at first play. */
    document.getElementById('media2').muted = true;   /* added 7/30/2020 to test single audio source at first play. */
    
  } else {
     document.getElementById("togmp4").innerHTML='A<i class="fas fa-volume-up" aria-hidden="true"></i>';
    document.getElementById('media1').muted = true;   /* added 7/30/2020 to test single audio source at first play. */
    document.getElementById('media2').muted = false;   /* added 7/30/2020 to test single audio source at first play. */
  }
}


function copyText() {
 /* Get the text field */
  var copyText = document.getElementById("invisiblediv");
copyText.type = 'text';
copyText.select();
document.execCommand("copy");
copyText.type = 'hidden';
  /* Alert the copied text */
  alert("Link copied. Share away!");
  }

/* var fb = document.getElementById('fb');
fbshare = "https://www.facebook.com/sharer/sharer.php?u=" + window.location + "%26quote=quote1%26picture=https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Litoria_xanthomera_amplexus.jpg/1200px-Litoria_xanthomera_amplexus.jpg&26title=title1%26description=description1%26caption=caption1/";
fb.innerHTML = fbshare;
*/



 var media1 = getQueryVariable("media1");
var media2 = getQueryVariable("media2");
var media1type = getQueryVariable("media1type");
var media2type = getQueryVariable("media2type");
var buttontitle = getQueryVariable("buttontitle");
var buttonlink = getQueryVariable("buttonlink");
var title = getQueryVariable("title");
var checksubmit = getQueryVariable("submit");
var duo = getQueryVariable("duo");


//if (checksubmit) {
       
if (checksubmit && media1 && media2 && media1type && buttontitle && buttonlink && title) {
var media1 = decodeURIComponent(media1.replace(/\+/g, '%20') );
var media2 = decodeURIComponent(media2.replace(/\+/g, '%20') );
var buttonlink = decodeURIComponent(buttonlink.replace(/\+/g, '%20') );
var buttontitle = decodeURIComponent(buttontitle.replace(/\+/g, '%20') );
 var title = decodeURIComponent(title.replace(/\+/g, '%20') );
       
 var lonky = media1type + "~" + media1 + "~" + media2 + "~" + buttonlink + "~" + buttontitle + "~" + title;
  //var lanke = encodeURIComponent(lonky);
  var lanky = btoa(lonky);
  var newlank = "https://dyad.link/?duo=" + lanky;
      // alert(newlank);
window.location = newlank;
}

else if (duo) {
       
       stringy = atob(duo);
       var vars = stringy.split("~");
       var media1 = vars[1];
       var media1type = vars[0];
        var buttonlink = vars[3];
         var buttontitleuri = vars[4];
        var buttontitle = decodeURIComponent(buttontitleuri);
       var titley = vars[5];
       var titley = decodeURIComponent(titley.replace(/\+/g, '%20') );
         var media2 = vars[2];
       
 document.getElementById("invisiblediv").value = window.location;
 document.getElementById('caption').innerHTML = titley;
 document.title = titley;
       
      /* document.getElementById("fbk").value = fbk;
       document.getElementById("twt").value = twt;
       document.getElementById("ldn").value = ldn;
       document.getElementById("rdt").value = rdt;
       */
       
       
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
d2.insertAdjacentHTML('afterend', '<a href="'+ buttonlink +'"><button style="background-color:black;margin: 4px 2px;color:white;border:none;text-decoration:none;" >' + buttontitle + ' </button></a>');
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
d9.insertAdjacentHTML('afterend', '<a href="'+ buttonlink +'"><button style="background-color:black;margin: 4px 2px;color:white;border:none;text-decoration:none;" >' + buttontitle + ' </button></a>');
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
var title = title1 + "<br>" + "  X  " + title2;
// alert(title);
// document.getElementById('caption').innerHTML = title;
//document.querySelector('meta[property="og:title"]').setAttribute("content", title);
//document.querySelector('meta[property="og:description"]').setAttribute("description", title);
//jQuery('meta[property="og:title"]').replaceWith('<meta property="og:title" content=title>');
//jQuery('meta[property="og:description"]').replaceWith('<meta property="og:description" content=" + title + ">');
}

let re = /^(https?:\/\/)?((www\.)?(youtube(-nocookie)?|youtube.googleapis)\.com.*(v\/|v=|vi=|vi\/|e\/|embed\/|user\/.*\/u\/\d+\/)|youtu\.be\/)([_0-9a-z-]+)/i; // added 7-12-2020;
let idone = media1.match(re)[7]; // added 7-12-2020
let idtwo = media2.match(re)[7]; // added 7-12-2020
var d1 = document.getElementById('button1');
d1.insertAdjacentHTML('afterend', '<a href="'+ buttonlink +'"><button style="background-color:black;margin: 4px 2px;color:white;border:none;text-decoration:none;" >' + buttontitle + ' </button></a>');
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

  

}

// 5. The API calls this function when the player's state changes.
function onPlayerStateChange(event) {

  // If the video is PLAYING, set the onclick element for pause the video.
  // Once the "playButton" is clicked, the video will be paused.
  if (event.data == YT.PlayerState.PLAYING) {
  player1.playVideo();
  player2.playVideo();
   player1.mute(); // added 7/30/2020 as test of single audio source at first start.
   player2.mute(); // added 7/30/2020 as test of single audio source at first start.
    //document.getElementById('playButton').innerHTML = 'Pause';

    // Set the onclick event to the button for pause the YouTube video.
   /*  document.getElementById('player1').onmouseover = function() {
     player1.unMute();
      player2.mute();
    
  };
  
  document.getElementById('player2').onmouseover = function() {
      player2.unMute();
      player1.mute();
    };
document.getElementById('player2').ontouchstart = function() {
player2.unmute();
player1.mute();
};

document.getElementById('player1').ontouchstart = function() {
player1.unmute();
player2.mute();
};
*/
  }

  // If the video is PAUSED, set the onclick element for pause the video.
  // Once the "playButton" is clicked, the video will resume the video = continue playing the video.
  if (event.data == YT.PlayerState.PAUSED) {
    //document.getElementById('playButton').innerHTML = 'Play';
    //document.getElementById('playButton').onmouseout = function() {
      player1.pauseVideo();
      player2.pauseVideo();
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
document.getElementById('media1').muted = true;   /* added 7/30/2020 to test single audio source at first play. */
document.getElementById('media2').muted = true;   /* added 7/30/2020 to test single audio source at first play. */
document.querySelectorAll("video").forEach(vid => vid.play());
document.getElementsByTagName("video")[0].removeAttribute("controls");
document.getElementsByTagName("video")[1].removeAttribute("controls");
}
function pauseVid() {
document.querySelectorAll("video").forEach(vid => vid.pause());
document.getElementsByTagName("video")[0].removeAttribute("controls");
document.getElementsByTagName("video")[1].removeAttribute("controls");
}


/* function unmut(e) {
       document.getElementById(e).muted = false;
       document.getElementById(e).style.border = "2px solid green";
}
function mut(e){
       document.getElementById(e).muted = true;
       document.getElementById(e).style.border = "none";
}
*/
/*
document.getElementById('media1').ontouchstart = function() {
media1.muted = false;
media2.muted = true;
};

document.getElementById('media1').onmouseover = function() {
media1.muted = false;
media2.muted = true;
};

document.getElementById('media2').onmouseout = function() {
media1.muted = false;
media2.muted = true;
};

document.getElementById('media1').onmouseout = function() {
media1.muted = true;
media2.muted = false;
};

document.getElementById('media2').ontouchstart = function() {
media2.muted = false;
media1.muted = true;
};

document.getElementById('media2').onmouseover = function() {
media2.muted = false;
media1.muted = true;
};

*/
