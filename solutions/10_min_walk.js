function isValidWalk(walk) {
 var x=0;
 var y=0;
   for (i=0;i<walk.length;i++) {
     if (walk[i]==='n') {x=x+1}
     if (walk[i]==='s') {x=x-1}
     if (walk[i]==='e') {y=y+1}
     if (walk[i]==='w') {y=y-1}
   }
  if (x===0 && y===0 && walk.length===10) {
    return true;
    } else { return false}
}