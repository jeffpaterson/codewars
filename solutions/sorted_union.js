function uniteUnique(...args) {
  var str = args.join(), arr=[], newStr="";
  for (var i=0; i<str.length; i++) {
    if (newStr.indexOf(str[i])===-1) newStr+=str[i];
  }
 newStr = newStr.replace(",","");
  for (var i=0; i<newStr.length; i++) {
    if (newStr[i].match(/[0-9]/)) {
      arr.push(+newStr[i]);
      } else {
      arr.push(newStr[i]);
      }
  }
  return arr;
}