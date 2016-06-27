function scoreboard(arr){
   var newArr=[];
   for (var i=arr.length-1; i>=0; i--) {
       var Result = function(name, chickenwings, hamburgers, hotdogs) {
           this.name = name;
           this.score= (chickenwings*5)+(hamburgers*3)+(hotdogs*2);
       }
   newArr.push(new Result(arr[i].name, arr[i].chickenwings, arr[i].hamburgers, arr[i].hotdogs));
   }
   var byScore = newArr.slice(0);
   byScore.sort(function(a,b) {
       return b.score - a.score; 
    });
   var byName = byScore.slice(0);
   byName.sort(function(a, b){
       var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
       var scoreA=a.score; b.score;
       if (a.score===b.score) {
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
       }
   })
   return byName;
}