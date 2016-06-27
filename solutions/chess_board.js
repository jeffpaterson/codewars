function chessBoard(rows, columns) {
 var arr=[];
 for (var i=0; i<rows; i++) {
   var rowCol=[];
   for (var j=0; j<columns; j++) {
     if (i%2===0) j%2 ? rowCol.push("X") : rowCol.push("O");
        else j%2 ? rowCol.push("O") : rowCol.push("X");
         
   }
   arr.push(rowCol);
  }
  return arr;
}