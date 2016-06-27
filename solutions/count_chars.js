function count (string) {  
  // The function code should be herd
  var stringArray = string.split("");
  if (stringArray.length<1) return {};
    var val = stringArray.reduce(function (acc, curr) {
      if (typeof acc[curr] == 'undefined') {
        acc[curr] = 1;
        } else {
        acc[curr] += 1;
      }
  return acc;
}, {});
 return val;
}