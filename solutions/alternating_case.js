String.prototype.toAlternatingCase = function () {
    var str = this, newStr="";

    for (var i=0; i<str.length; i++) {
        var char = str.charCodeAt(i);
    
        if ( char<91 && char>64) {
              newStr += String.fromCharCode(char+32);
          } else if 
           ( char>96 && char<123) {
              newStr += String.fromCharCode(char-32);
          } else {
          newStr += str[i];
          }
       }
    return newStr;
 }