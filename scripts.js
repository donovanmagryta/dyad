var arr = document.URL.match(/submit=([0-9]+)/);
var checksubmit = arr[1];
//alert(checksubmit);
if (checksubmit) {
//alert("checksubmit true");
//$(".formy").hide();
//$(".medy").show();
//alert("jquery ran");
document.getElementById('formy').style.display = 'none';
var arrmed1 = document.URL.match(/media1=([0-9]+)/);
var media1 = arrmed1[1];
alert(media1);
//var media1 = urlParams.get('media1');
var media1= decodeURIComponent(media1.replace(/\+/g, '%20') );
alert(media1);
var arrmed2 = document.URL.match(/media2=([0-9]+)/);
var media2 = arrmed1[1];
//var media2 = urlParams.get('media2');
var media2= decodeURIComponent(media2.replace(/\+/g, '%20') );
var arrbutlink = document.URL.match(/buttonlink=([0-9]+)/);
var buttonlink = arrbutlink[1];
//var buttonlink= urlParams.get('buttonlink');
var buttonlink= decodeURIComponent(buttonlink.replace(/\+/g, '%20') );
  var arrbuttitle = document.URL.match(/buttontitle=([0-9]+)/);
var arrbuttitle= arrbuttitle[1];
//var buttontitle = urlParams.get('buttontitle');
var buttontitle= decodeURIComponent(buttontitle.replace(/\+/g, '%20') );
//var media1type = urlParams.get('media1type');
var arrmed1type = document.URL.match(/media1type=([0-9]+)/);
var media1type = arrmed1type[1];
var media1type= decodeURIComponent(medi1type.replace(/\+/g, '%20') );
//var media2type = urlParams.get('media2type');
var arrmed2type = document.URL.match(/media2type=([0-9]+)/);
var media2type = arrmed2type[1];
var media2type= decodeURIComponent(media2type.replace(/\+/g, '%20') );
document.getElementById('media1').src = media1;
document.getElementById('media2').src = media2;
document.getElementById("butlink").value=buttonlink;
document.getElementById("butbut").value=buttontitle;
}
else {
alert("else");
jQuery(".medy").hide();
jQuery(".formy").show()
document.getElementById('medy').style.display = 'none';
}
