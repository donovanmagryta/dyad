var arr = document.URL.match(/submit=([0-9]+)/);
var checksubmit = arr[1];
if (checksubmit) {
alert("checksubmit sent");
alert(checksubmit);
document.getElementById('formy').style.display = 'none';
//$(".formy").hide();
//$(".medy").show();
}
else {
alert("checksubmit not in url query");
document.getElementById('medy').style.display = 'none';
//$(".formy").show();
//$(".medy").hide();
}
