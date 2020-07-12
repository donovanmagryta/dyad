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
if (media1type == "video"){ // added 7-12-2020
jQuery(document).ready(function(){
jQuery(".formy").hide();
jQuery(".yt").hide();  
 jQuery(".medy").show();
 });
var media1 = decodeURIComponent(media1.replace(/\+/g, '%20') );
var media2 = decodeURIComponent(media2.replace(/\+/g, '%20') );
var buttonlink = decodeURIComponent(buttonlink.replace(/\+/g, '%20') );
var buttontitle = decodeURIComponent(buttontitle.replace(/\+/g, '%20') );
document.getElementById('media1').src = media1;
document.getElementById('media2').src = media2;
var d1 = document.getElementById('button1');
d1.insertAdjacentHTML('afterend', '<a href="'+ buttonlink +'"><button style="font-size:50px;background-color:red;margin: 4px 2px;padding: 5px 5px;color:white;border:none;border-radius:10px;text-decoration:none;" >' + buttontitle + ' </button></a>');
}
} // added 7-12-20
if (media1type == "youtube")  { // added 7-12-2020
jQuery(document).ready(function(){
 jQuery(".formy").hide();
 jQuery(".medy").hide();
  jQuery(".yt").show();
  });
var media1 = decodeURIComponent(media1.replace(/\+/g, '%20') );
let re = /^(https?:\/\/)?((www\.)?(youtube(-nocookie)?|youtube.googleapis)\.com.*(v\/|v=|vi=|vi\/|e\/|embed\/|user\/.*\/u\/\d+\/)|youtu\.be\/)([_0-9a-z-]+)/i; // added 7-12-2020;
let id = media1.match(re)[7]; // added 7-12-2020
//alert(id);
var media1 = 'https://youtube.com/embed/' + id + '?autoplay=1';
//alert(sourc);
document.getElementById('ytmedia1').src = media1;
}
if (media2type == "youtube")  { // added 7-12-2020
jQuery(document).ready(function(){
 jQuery(".formy").hide();
 jQuery(".medy").hide();
  jQuery(".yt").show();
  });
var media2 = decodeURIComponent(media2.replace(/\+/g, '%20') );
let re = /^(https?:\/\/)?((www\.)?(youtube(-nocookie)?|youtube.googleapis)\.com.*(v\/|v=|vi=|vi\/|e\/|embed\/|user\/.*\/u\/\d+\/)|youtu\.be\/)([_0-9a-z-]+)/i; // added 7-12-2020;
let id = media2.match(re)[7]; // added 7-12-2020
//alert(id);
var media2 = 'https://youtube.com/embed/' + id + '?autoplay=1';
//alert(sourc);
document.getElementById('ytmedia2').src = media2;
}
else {
 jQuery(document).ready(function(){
 jQuery(".formy").show();
 jQuery(".medy").hide();
  });
}
