function sumDigNthTerm(initval, patternl, nthterm) {
   var len = patternl.length;
   var sum = initval;
   var i = 0, j = 0;
   while (i<nthterm-1) {
      sum+=patternl[j];
      j++;
      i++;
      if (j>=len) j=0;
   }
    var string = sum.toString().split('');
    var sum2 = 0;
    for (var elem of string) sum2 += parseInt(elem,10);
    return sum2;       
}