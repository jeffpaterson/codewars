function divisors(integer) {
    var i=0, arr = [];
    for(n=2; n<Math.ceil(Math.sqrt(integer)); n++) {
        if(integer%n==0){
            arr.splice(i,0,n);
            if(integer/n!=Math.sqrt(integer)) arr.splice(i+1,0,integer/n);
            i++;
        }
    }
    return (arr.length!=0)? arr : integer + " is prime";
}