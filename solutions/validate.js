function isValidCoordinates(coordinates){
 var res = coordinates.split(",");
 if (res.length!==2) return false;
 if (res[0] == 1e1) return false;
 if (res[1] == 1e1) return false;
if (isNaN(res[0])) return false;
 if (isNaN(res[1])) return false;

 if ((res[0]>=-90 && res[0]<=90) && (res[1]>=-180 && res[1]<=180)) return true;
return false;
}