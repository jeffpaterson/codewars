function convertToMixedNumeral(parm){
  var nums = parm.split("/");
  if (nums[1]===nums[0]) return "1";
  var a = Math.floor(nums[0]/nums[1]);
  var b = nums[0]%nums[1];
  var c = nums[1];
  if (a<0 && b!==0) {
    a=a+1;
    b=b*-1;
    }
  if (nums[0]<0) b=b*-1;
  if (a<0 && b<0) b=b*-1;  
  if (b===0) return a+"";
  if (a===0) return b+"/"+c;
  return a+" "+b+"/"+c;
}
