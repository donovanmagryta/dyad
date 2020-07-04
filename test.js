var arr = document.URL.match(/submit=([0-9]+)/);
var checksubmit = arr[1];
if (checksubmit) {
alert("checksubmit sent");
alert(checksubmit);
$(".formy").hide();
$(".medy").show();
}
else {
alert("checksubmit not in url query");
$(".formy").show();
$(".medy").hide();
}
