// Function to extract duo from path
function getPathVariable() {
    var path = window.location.pathname.substring(1); // Remove leading "/"
    var segments = path.split("/"); // Split path into segments
    if (segments[0] === "duo" && segments.length > 1) {
        return segments[1]; // Return the value after "/duo/"
    }
    return false;
}

// Keep getQueryVariable for form submission compatibility
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return false;
}

// Toggle functions unchanged
function toggleyt() {
    var valeryt = document.getElementById("togyt").innerHTML;
    if (valeryt == 'A🔊') {
        document.getElementById("togyt").innerHTML = 'B🔊';
        player1.unMute();
        player2.mute();
    } else {
        document.getElementById("togyt").innerHTML = 'A🔊';
        player2.unMute();
        player1.mute();
    }
}

function togglemp4() {
    var valermp4 = document.getElementById("togmp4").innerHTML;
    if (valermp4 == 'A🔊') {
        document.getElementById("togmp4").innerHTML = 'B🔊';
        document.getElementById('media1').muted = false;
        document.getElementById('media2').muted = true;
    } else {
        document.getElementById("togmp4").innerHTML = 'A🔊';
        document.getElementById('media1').muted = true;
        document.getElementById('media2').muted = false;
    }
}

function copyText() {
    navigator.share({ title: document.title, text: title, url: window.location.href });
}

// Get variables from query (for form submission)
var media1 = getQueryVariable("media1");
var media2 = getQueryVariable("media2");
var media1type = getQueryVariable("media1type");
var buttontitle = getQueryVariable("buttontitle");
var buttonlink = getQueryVariable("buttonlink");
var title = getQueryVariable("title");
var checksubmit = getQueryVariable("submit");
var duo = getPathVariable(); // Get duo from path

// Handle form submission
if (checksubmit && media1 && media2 && media1type && buttontitle && buttonlink && title) {
    var media1 = decodeURIComponent(media1.replace(/\+/g, '%20'));
    var media2 = decodeURIComponent(media2.replace(/\+/g, '%20'));
    var buttonlink = decodeURIComponent(buttonlink.replace(/\+/g, '%20'));
    var buttontitle = decodeURIComponent(buttontitle.replace(/\+/g, '%20'));
    var title = decodeURIComponent(title.replace(/\+/g, '%20'));

    var lonky = media1type + "~" + media1 + "~" + media2 + "~" + buttonlink + "~" + buttontitle + "~" + title;
    var lanky = btoa(lonky);
    var newlank = "https://dyad.link/duo/" + lanky;
    window.location = newlank; // Redirect to path-based URL
}
// Handle loading from duo path
else if (duo) {
    console.log("Duo detected:", duo); // Debug log
    var duo = duo.replaceAll("%20", "+").replaceAll("%3D", "=");
    var stringy = atob(duo);
    console.log("Decoded duo:", stringy); // Debug log
    var vars = stringy.split("~");
    var media1type = vars[0];
    var media1 = vars[1];
    var media2 = vars[2];
    var buttonlink = vars[3];
    var buttontitleuri = vars[4];
    var buttontitle = decodeURIComponent(buttontitleuri);
    var titley = decodeURIComponent(vars[5].replace(/\+/g, '%20'));

    console.log("Parsed vars:", vars); // Debug log
    document.getElementById("invisiblediv").value = window.location;
    document.getElementById('caption').innerHTML = titley;
    document.title = titley;

    media1 = decodeURIComponent(media1.replace(/\+/g, '%20'));
    media2 = decodeURIComponent(media2.replace(/\+/g, '%20'));
    buttonlink = decodeURIComponent(buttonlink.replace(/\+/g, '%20'));
    buttontitle = decodeURIComponent(buttontitle.replace(/\+/g, '%20'));

    if (media1type === "video") {
        jQuery(".formy").hide();
        jQuery(".medy").show();
        jQuery(".yt").hide();
        jQuery(".pic").hide();
        document.getElementById('media1').src = media1;
        document.getElementById('media2').src = media2;
        var d2 = document.getElementById('button2');
        d2.insertAdjacentHTML('afterend', '<a href="' + buttonlink + '"><button style="background-color:black;margin: 4px 2px;color:white;border:none;text-decoration:none;">' + buttontitle + ' </button></a>');
    } else if (media1type === "image") {
        jQuery(".formy").hide();
        jQuery(".medy").hide();
        jQuery(".yt").hide();
        jQuery(".pic").show();
        document.getElementById('pic1').src = media1;
        document.getElementById('pic2').src = media2;
        var d9 = document.getElementById('button3');
        d9.insertAdjacentHTML('afterend', '<a href="' + buttonlink + '"><button style="background-color:black;margin: 4px 2px;color:white;border:none;text-decoration:none;">' + buttontitle + ' </button></a>');
    } else if (media1type === "youtube") {
        jQuery(".formy").hide();
        jQuery(".medy").hide();
        jQuery(".yt").show();
        jQuery(".pic").hide();

        let re = /^(https?:\/\/)?((www\.)?(youtube(-nocookie)?|youtube.googleapis)\.com.*(v\/|v=|vi=|vi\/|e\/|embed\/|user\/.*\/u\/\d+\/)|youtu\.be\/)([_0-9a-z-]+)/i;
        let idone = media1.match(re) ? media1.match(re)[7] : null;
        let idtwo = media2.match(re) ? media2.match(re)[7] : null;
        console.log("YouTube IDs:", idone, idtwo); // Debug log

        var d1 = document.getElementById('button1');
        d1.insertAdjacentHTML('afterend', '<a href="' + buttonlink + '"><button style="background-color:black;margin: 4px 2px;color:white;border:none;text-decoration:none;">' + buttontitle + ' </button></a>');

        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        var player1, player2;
        function onYouTubeIframeAPIReady() {
            if (idone) {
                player1 = new YT.Player('player1', {
                    videoId: idone,
                    events: { 'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange }
                });
            }
            if (idtwo) {
                player2 = new YT.Player('player2', {
                    videoId: idtwo,
                    events: { 'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange }
                });
            }
        }

        function onPlayerStateChange(event) {
            if (event.data == YT.PlayerState.PLAYING) {
                player1.playVideo();
                player2.playVideo();
                player1.mute();
                player2.mute();
            }
            if (event.data == YT.PlayerState.PAUSED) {
                player1.pauseVideo();
                player2.pauseVideo();
            }
        }

        function onPlayerReady(event) {
            event.target.playVideo();
        }
    } else {
        console.log("Unknown media1type:", media1type); // Debug log
    }
} else {
    jQuery(".formy").show();
    jQuery(".medy").hide();
    jQuery(".yt").hide();
    jQuery(".pic").hide();
}

function playVid() {
    document.getElementById('media1').muted = true;
    document.getElementById('media2').muted = true;
    document.querySelectorAll("video").forEach(vid => vid.play());
    document.getElementsByTagName("video")[0].removeAttribute("controls");
    document.getElementsByTagName("video")[1].removeAttribute("controls");
}

function pauseVid() {
    document.querySelectorAll("video").forEach(vid => vid.pause());
    document.getElementsByTagName("video")[0].removeAttribute("controls");
    document.getElementsByTagName("video")[1].removeAttribute("controls");
}
