// Replace getQueryVariable with getHashVariable to read from URL hash
function getHashVariable(variable) {
    var hash = window.location.hash.substring(1); // Remove leading "#"
    var vars = hash.split("&"); // Split hash into key-value pairs
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return false;
}

// Keep getQueryVariable for form submission compatibility (if still needed)
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return false;
}

// Toggle functions remain unchanged
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

// Get variables from query (for form submission) and hash (for duo)
var media1 = getQueryVariable("media1");
var media2 = getQueryVariable("media2");
var media1type = getQueryVariable("media1type");
var media2type = getQueryVariable("media2type");
var buttontitle = getQueryVariable("buttontitle");
var buttonlink = getQueryVariable("buttonlink");
var title = getQueryVariable("title");
var checksubmit = getQueryVariable("submit");
var duo = getHashVariable("duo"); // Now reads from hash instead of query

// Handle form submission and redirect with hash
if (checksubmit && media1 && media2 && media1type && buttontitle && buttonlink && title) {
    var media1 = decodeURIComponent(media1.replace(/\+/g, '%20'));
    var media2 = decodeURIComponent(media2.replace(/\+/g, '%20'));
    var buttonlink = decodeURIComponent(buttonlink.replace(/\+/g, '%20'));
    var buttontitle = decodeURIComponent(buttontitle.replace(/\+/g, '%20'));
    var title = decodeURIComponent(title.replace(/\+/g, '%20'));

    var lonky = media1type + "~" + media1 + "~" + media2 + "~" + buttonlink + "~" + buttontitle + "~" + title;
    var lanky = btoa(lonky);
    var newlank = "https://dyad.link/#duo=" + lanky; // Use hash instead of query
    window.location = newlank; // Redirect to new hash-based URL
}

// Handle loading from duo in hash
else if (duo) {
    var duo = duo.replaceAll("%20", "+").replaceAll("%3D", "=");
    var stringy = atob(duo);
    var vars = stringy.split("~");
    var media1 = vars[1];
    var media1type = vars[0];
    var buttonlink = vars[3];
    var buttontitleuri = vars[4];
    var buttontitle = decodeURIComponent(buttontitleuri);
    var titley = decodeURIComponent(vars[5].replace(/\+/g, '%20'));
    var media2 = vars[2];

    document.getElementById("invisiblediv").value = window.location;
    document.getElementById('caption').innerHTML = titley;
    document.title = titley;

    var media1 = decodeURIComponent(media1.replace(/\+/g, '%20'));
    var media2 = decodeURIComponent(media2.replace(/\+/g, '%20'));
    var buttonlink = decodeURIComponent(buttonlink.replace(/\+/g, '%20'));
    var buttontitle = decodeURIComponent(buttontitle.replace(/\+/g, '%20'));

    if (media1type == "video") {
        jQuery(document).ready(function() {
            jQuery(".formy").hide();
            jQuery(".medy").show();
            jQuery(".yt").hide();
            jQuery(".pic").hide();
        });
        document.getElementById('media1').src = media1;
        document.getElementById('media2').src = media2;
        var d2 = document.getElementById('button2');
        d2.insertAdjacentHTML('afterend', '<a href="' + buttonlink + '"><button style="background-color:black;margin: 4px 2px;color:white;border:none;text-decoration:none;">' + buttontitle + ' </button></a>');
    } else if (media1type == "image") {
        jQuery(document).ready(function() {
            jQuery(".formy").hide();
            jQuery(".medy").hide();
            jQuery(".yt").hide();
            jQuery(".pic").show();
        });
        document.getElementById('pic1').src = media1;
        document.getElementById('pic2').src = media2;
        var d9 = document.getElementById('button3');
        d9.insertAdjacentHTML('afterend', '<a href="' + buttonlink + '"><button style="background-color:black;margin: 4px 2px;color:white;border:none;text-decoration:none;">' + buttontitle + ' </button></a>');
    } else if (media1type == "youtube") {
        jQuery(document).ready(function() {
            jQuery(".formy").hide();
            jQuery(".medy").hide();
            jQuery(".yt").show();
            jQuery(".pic").hide();
        });

        function metAhh() {
            var title1 = player1.getVideoData().title;
            var title2 = player2.getVideoData().title;
            var title = title1 + "<br>" + "  X  " + title2;
        }

        let re = /^(https?:\/\/)?((www\.)?(youtube(-nocookie)?|youtube.googleapis)\.com.*(v\/|v=|vi=|vi\/|e\/|embed\/|user\/.*\/u\/\d+\/)|youtu\.be\/)([_0-9a-z-]+)/i;
        let idone = media1.match(re)[7];
        let idtwo = media2.match(re)[7];
        var d1 = document.getElementById('button1');
        d1.insertAdjacentHTML('afterend', '<a href="' + buttonlink + '"><button style="background-color:black;margin: 4px 2px;color:white;border:none;text-decoration:none;">' + buttontitle + ' </button></a>');

        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        var player1, player2;

        function onYouTubeIframeAPIReady() {
            player1 = new YT.Player('player1', {
                videoId: idone,
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
            player2 = new YT.Player('player2', {
                videoId: idtwo,
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
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
            metAhh();
        }
    }
} else {
    jQuery(document).ready(function() {
        jQuery(".formy").show();
        jQuery(".medy").hide();
        jQuery(".yt").hide();
        jQuery(".pic").hide();
    });
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
