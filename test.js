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
var media1 = decodeURIComponent(media1.replace(/\+/g, '%20') );
alert("url decoded media is:");
alert(media);
//var srca = document.getElementById("media1");
//srca.src = media;
var buttonlink = decodeURIComponent(buttonlink.replace(/\+/g, '%20') );
document.getElementById('media1').src = media1;
document.getElementById('media2').src = media2;
document.getElementById("butlink").value=buttonlink;
document.getElementById("butbut").value=buttontitle;
}
//}
else {
 alert("no data submitted");
 jQuery(document).ready(function(){
 jQuery(".form").show();
 jQuery(".media").hide();
  });
}
