var arr = document.URL.match(/media=([0-9]+)/);
var checksubmit = arr[1];
if (checksubmit) {
alert("checksubmit sent");
alert(checksubmit);
jQuery(document).ready(function(){
jQuery(".form").hide();
jQuery(".media").show();
 });
var media = document.URL.match(/media=([0-9]+)/);
var media = media[1];
var media = decodeURIComponent(media.replace(/\+/g, '%20') );
document.getElementById('media').src = media;
}
else {
 alert("checksubmit not in url query");
 jQuery(document).ready(function(){
 jQuery(".form").show();
 jQuery(".media").hide();
  });
}
