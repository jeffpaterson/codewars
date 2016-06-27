function chuckPushUps(string) {
  if (typeof string !== "string") return "FAIL!!";
  if (string==="") return "FAIL!!";
  var arr = string.split(" ");
  var x = 0, high=0;
  for (var i=0; i<arr.length; i++) {
    arr[i] = arr[i].replace(/[^10]/g, "");
    x = parseInt(arr[i], 2) || x;
    if (x>high) high=x;
  }
  return high===0 ? "CHUCK SMASH!!" : high;
}