/* FOR TESTING NEW FEATURES */
var title = "test-title";
var desc = "test-description";
document.querySelector('meta[property="og:title"]').setAttribute("content", title);
document.querySelector('meta[property="og:description"]').setAttribute("description", desc);
//jQuery('meta[property="og:title"]').replaceWith('<meta property="og:title" content=title>');
//jQuery('meta[property="og:description"]').replaceWith('<meta property="og:description" content=" + title + ">');
