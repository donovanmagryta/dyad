var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);

var media = getQueryVariable("media");
var checksubmit = getQueryVariable("submit");

//var arr = document.URL.match(/submit=([0-9]+)/);
//if (arr) {
//var checksubmit = arr[1];
if (checksubmit) {
alert("checksubmit sent");
alert(checksubmit);
jQuery(document).ready(function(){
jQuery(".form").hide();
jQuery(".media").show();
 });
//var media = document.URL.match(/media=([0-9]+)/);
//var media = media[1];
alert(media);
var media = decodeURIComponent(media.replace(/\+/g, '%20') );
alert(media);
document.getElementById('media').src = media;
}
}
else {
 alert("checksubmit not in url query");
 jQuery(document).ready(function(){
 jQuery(".form").show();
 jQuery(".media").hide();
  });
}
