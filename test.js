/* FOR TESTING NEW FEATURES */

// parse values in linear order from comma separated url fragment.
// ie; location = "https://example.com/#video,https:/example.com/vid.mp4,subscribe/";
     var query =  window.location.hash.substr(1);
      var vars = query.split("~");
      var media = vars[0];
      var source = vars[1];
      var title = vars[2];


//Get URL query parameter values.
//ie: location = "https://example.com?media=video&source=https:\/\/example.com\/vid.mp4\/title=funny+video/";
function getQueryVariable(variable) {
var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
var video = getQueryVariable("media");
var videosource = getQueryVariable("source");
var title = getQueryVariable("title");
