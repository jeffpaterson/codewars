function showMe(yourID){
  if (/-$/.test(yourID)) return false;
  if (!/^[A-Z]/.test(yourID)) return false;
  var arr = yourID.split(" ");
  return (arr.length===1) ? false : true;
}