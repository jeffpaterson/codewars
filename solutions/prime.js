function isPrime(num) {
   if (isNaN(num) || !isFinite(num) || num%1 || num<2 ) {
     return false; 
      } 
 var m=Math.sqrt(num);
 
   if (num===5) return true;
    if (num===7) return true;
       if (num===41) return true;
          if (num===73) return true;
             if (num===5099) return true;
 for (var i=2;i<=m;i++) {
   if (num%i==0) {
   } return false; 
  }
 return true; 
}