var arr = document.URL.match(/submit=([0-9]+)/);
//var checksubmit = arr[1];
//if (checksubmit) {
if (z) {
alert("checksubmit sent");
alert(checksubmit);
$(document).ready(function(){
$(".formy").hide();
$(".medy").show();
 });
}
else {
 alert("checksubmit not in url query");
 $(document).ready(function(){
 $(".formy").show();
 $(".medy").hide();
  });
}
