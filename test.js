
function shortEn() {
//var currentURL = "https://google.com";
var currentURL = window.location.href;
  alert(currentURL);
 jQuery(document).ready(function(){

  // jQuery methods go here...

jQuery.get("https://api.urlday.com/short?url="+ currentURL +", function(data, status){
                                      alert("Data: " + data); 

                             });
});                            

//}
  /* Get the text field */
  //var copyText = //document.getElementById("myInput");

  /* Select the text field */
  //copyText.select();
 // copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  //currentURL.execCommand("copy");  

  /* Alert the copied text 
  alert("Copied the link for this dyad: " + data);
  */
}

