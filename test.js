var arr = document.URL.match(/submit=([0-9]+)/);
var checksubmit = arr[1];
if (checksubmit) {
alert("checksubmit sent");
alert(checksubmit);
 //var x = document.getElementById("formy");
 // if (x.style.display === "none") {
   // x.style.display = "block";
 // } else {
    //x.style.display = "none";
 // }
//document.getElementById('formy').style.display = 'none';
 $(document).ready(function(){
$(".formy").hide();
$(".medy").show();
}
                   }
else {
alert("checksubmit not in url query");
 //var y = document.getElementById("medy");
  //if (y.style.display === "none") {
    ///y.style.display = "block";
 // } else {
   //// y.style.display = "none";
  }
//document.getElementById('medy').style.display = 'none';
$(document).ready(function(){
$(".formy").show();
$(".medy").hide();
}
}
