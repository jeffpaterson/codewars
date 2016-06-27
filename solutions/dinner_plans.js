function commonGround(a, b){
 var sam1 = a.split(" "), sam2 = b.split(" "), same=[];
 for (var i=0; i<sam1.length; i++) {
   for (var j=0; j<sam2.length; j++) {
     if (sam1[i]===sam2[j]) same.push(sam1[i]);
   }
 }
  return (same.length>0) ? same.join(" ") : "death";
}