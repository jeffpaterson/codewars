function errBob(string){
  var arr = string.split(/(?=[,.?!\s])/g);
  var up = /[B-DF-HJ-NP-TV-Z]$/;
  var low = /[b-df-hj-np-tv-z]$/;
  for (var i=0; i<arr.length; i++) {
    if (up.test(arr[i])) arr[i]+="ERR";
    if (low.test(arr[i])) arr[i]+="err";
  }
  return arr.join("");
}