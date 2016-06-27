function evenator(str) {
  str = str.replace(/[.,\/#!$%\^?&\*;:{}=\-`_~()]/g,"");
  if (str.length===0) return str;
  if (str.length===1) return str+str;
  var words = str.split(" ");
  
  for (var i=0; i<words.length; i++) {
    if (words[i].length%2 !== 0) {
        words[i]=words[i]+words[i].charAt(words[i].length-1);
     }
   }
  return words.join(" ");
}