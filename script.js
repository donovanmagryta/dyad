
const queryString = window.location.search;
var checksubmit = (urlParams.has('submit'));
if (checksubmit) {
$(".formy").hide()
document.getElementById('formy').style.display = 'none';
var media1 = urlParams.get('media1');
var media1= decodeURIComponent(media1.replace(/\+/g, '%20') );
var media2 = urlParams.get('media2');
var media2= decodeURIComponent(media2.replace(/\+/g, '%20') );
var buttonlink= urlParams.get('buttonlink');
var buttonlink= decodeURIComponent(buttonlink.replace(/\+/g, '%20') );
var buttontitle = urlParams.get('buttontitle');
var buttontitle= decodeURIComponent(buttontitle.replace(/\+/g, '%20') );
var media1type = urlParams.get('media1type');
var media1type= decodeURIComponent(medi1type.replace(/\+/g, '%20') );
var media2type = urlParams.get('media2type');
var media2type= decodeURIComponent(media2type.replace(/\+/g, '%20') );
document.getElementById('media1').src = media1;
document.getElementById('media2').src = media2;
document.getElementById("butlink").value=buttonlink;
document.getElementById("butbut").value=buttontitle;
}
else {
$(".medy").hide()
document.getElementById('medy').style.display = 'none';
}
