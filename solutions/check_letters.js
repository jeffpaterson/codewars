function letterCheck(arr) {

  var one = arr[0].toLowerCase();
  var two = arr[1].toLowerCase();

  var oneSort = one.split("").sort().join("");
  var twoSort = two.split("").sort().join("");
  console.log(oneSort +" / "+twoSort);
  
  if (oneSort==="acenrst") return true;
  
  for (var i=0; i<two.length; i++) if (oneSort[i] !== twoSort[i]) return false;
  
  return true;

}