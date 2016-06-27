function onlyOne(){
  var args = Array.prototype.slice.call(arguments);
  var count=0;
  for (var i=0; i<args.length; i++) if (args[i]===true) count++;
  return count===1 ? true : false; 
}