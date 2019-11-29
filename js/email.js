var a = "jan.jecmen";
var b = "@";
var c = "gmail.com";
(function(email) {
    document.write("<a href=\"mailto:" + email + "\">" + email + "</a>");
})(a + b + c)
