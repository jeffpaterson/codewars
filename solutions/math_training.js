const roundIt = n => {
  n = n.toString();
  var len = n.length, i = n.indexOf(".");
  if (i === (len-1)/2) return Math.round(n);
  if (i < (len-1)/2) return Math.ceil(n);
  return Math.floor(n);
}