function calculateProbability(n){
 if (n>61) return 1;
 var days=365;
 var count=1;
 
for (var i=0; i<(n-1) ; i++) {
  count = count*days;
  days--;
}

count = count * (365-n+1);

var x = 1-(count/(Math.pow(365, n)));
 return Math.round(x * 100) / 100
}