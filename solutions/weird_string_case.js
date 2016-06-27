function toWeirdCase(string){
 var arr=string.split(" "), newArr=[];
 for (var i=0; i<arr.length; i++) {
   for (var j=0, word=""; j<arr[i].length; j++) {
     word += (j%2===0) ? arr[i][j].toUpperCase() : arr[i][j].toLowerCase(); 
    }
   newArr.push(word);
  }
 return newArr.join(" ");
}