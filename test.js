var arr = document.URL.match(/submit=([0-9]+)/);
var checksubmit = arr[1];
if (checksubmit) {
alert("checksubmit sent");
alert(checksubmit);
$(document).ready(function(){
$(".form").hide();
$(".media").show();
 });
var media = document.URL.match(/media=([0-9]+)/);
var media = media[1];
var mediae= decodeURIComponent(media.replace(/\+/g, '%20') );
document.getElementById('media').src = media;
}
else {
 alert("checksubmit not in url query");
 $(document).ready(function(){
 $(".form").show();
 $(".media").hide();
  });
}
