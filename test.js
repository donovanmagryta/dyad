jQuery(document).ready(function(){
var lank = window.location.href;
//var lank = "https://google.com";
//alert(lank);
var geturl = "https://api.urlday.com/short?url=" + lank;
//alert(geturl);
 jQuery(".buttn").click(function(){
    jQuery.get(geturl, function(data, status){

      var hi = JSON.stringify(data.result);
      str = hi.slice(1, -1);
      alert(str);
     $(".dummy").html(str);
    
  });
  });
  
});
