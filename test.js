
function parseQueryVariable(variable) {
var query = result;
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}



function getQueryVariable(variable) {
var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}




function comPressy() {

var media1 = getQueryVariable("media1");
var media2 = getQueryVariable("media2");
var media1type = getQueryVariable("media1type");
var media2type = getQueryVariable("media12type");
var buttontitle = getQueryVariable("buttontitle");
var buttontitle = String(buttontitle).replace(/\s+/g, '');
var buttonlink = getQueryVariable("buttonlink");
var checksubmit = getQueryVariable("submit");
var tester = getQueryVariable("tester");
	var windy = "?media1="+media1+"%26media2="+media2+"%26buttonlink="+buttonlink+"%26buttontitle="+buttontitle+"%26media1type="+media1type+"%26media2type="+media1type+"%26submit=submit";
    /// First, let's compress it.
    /*my_lzma.compress(windy, compression_mode, function on_compress_complete(result) {
        //alert("Compressed querystring: " + result);
	    var clunky = "https://dyad.link/#" + result; //untested
	    alert("compressed:" + clunky);
        //  window.location = clunky; //untested
	    }, function on_decompress_progress_update(percent) {
            /// Decompressing progress code goes here.
            document.title = "Decompressing: " + (percent * 100) + "%";
        });
    }, function on_compress_progress_update(percent) {
        /// Compressing progress code goes here.
        document.title = "Compressing: " + (percent * 100) + "%";
    });
    */
	
	my_lzma.compress(windy, compression_mode, function on_compress_complete(result) {
        alert("Compressed: " + result);
        var clunky = "https://dyad.link/#" + result; //untested
	 alert("compressed:" + clunky);
        //  window.location = clunky; //untested
        
        }, function on_decompress_progress_update(percent) {
            
        });
    }, function on_compress_progress_update(percent) {
        
    });

}





function decomPressy() {
    /// First, let's compress it.
   var typ = window.location.hash.substr(1); //untested
	    alert("after hash is" + typ);
        /// Now, let's try to decompress it to make sure it works both ways.
        my_lzma.decompress(typ, function on_decompress_complete(result) {
            alert("Decompressed: " + result);
		//here
		var media1 = parseQueryVariable("media1");
var media2 = parseQueryVariable("media2");
var media1type = parseQueryVariable("media1type");
var media2type = parseQueryVariable("media12type");
var buttontitle = parseQueryVariable("buttontitle");
var buttontitle = String(buttontitle).replace(/\s+/g, '');
var buttonlink = parseQueryVariable("buttonlink");
var checksubmit = parseQueryVariable("submit");
var tester = parseQueryVariable("tester");
	
	}, function on_decompress_progress_update(percent) {
            
        });
    }, function on_compress_progress_update(percent) {
        
    });

}



var compression_mode = 1,
 my_lzma = LZMA; /// lzma_worker.js creates a global LZMA object. We store it as a new variable just to match simple_demo.html.
var checksubmit = getQueryVariable("submit");


if(window.location.hash) {
  // Fragment exists - decompress then run modified checksubmit where parameters are parsed from decompressed data then activating rest of interface.
decomPressy();
}

else if (checksubmit) {
	// no fragment - compress then redirect to compressed url with hash included. this needs to replace checksubmit below.
	comPressy();
}


