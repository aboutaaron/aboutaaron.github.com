/* clearcache.js

Written by: Aaron Williams.
Use: Clear LA Times page cache.
Reason: I don't like redundant typing.

*/

(function() {
    var url = window.location.href;
    var myRandomNumber = Math.random().toString(36).substr(2, 5);
    window.open(url + "?" + myRandomNumber, "_self");
})();