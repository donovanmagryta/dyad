function getQueryVariable(variable) {
var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

var media = getQueryVariable("media");
//alert(media);
var checksubmit = getQueryVariable("submit");
//alert(checksubmit);
//var arr = document.URL.match(/submit=([0-9]+)/);
//if (arr) {
//var checksubmit = arr[1];
if (checksubmit) {
alert("checksubmit is:");
alert(checksubmit);
jQuery(document).ready(function(){
jQuery(".form").hide();
jQuery(".media").show();
 });
//var media = document.URL.match(/media=([0-9]+)/);
//var media = media[1];
//alert(media);
var media = decodeURIComponent(media.replace(/\+/g, '%20') );
alert("url decoded media is:");
alert(media);
var med1="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4";
document.getElementById('media1').src = med1;
//document.getElementById('media1').src = media1;
}
//}
else {
 alert("no data submitted");
 jQuery(document).ready(function(){
 jQuery(".form").show();
 jQuery(".media").hide();
  });
}
