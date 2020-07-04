var arr = document.URL.match(/submit=([0-9]+)/);
var checksubmit = arr[1];
if (checksubmit) {
alert("checksubmit sent");
alert(checksubmit);
}
else {
alert("checksubmit not in url query");
}
