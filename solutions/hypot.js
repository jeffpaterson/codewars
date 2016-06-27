function calculateHypotenuse(a,b){
  if (a<1 || b<1) return error;
  if (a === true || b === true) return error;
  if (isNaN(a) || isNaN(b)) return error;
  var val = Math.hypot(a, b);
  val = Math.round(val*1000)/1000;
  return val;

// TODO: complete calculateHypotenuse so that it returns the hypotenuse length
  // for a triangle with sides of length a, b, and c, where c is the hypotenuse.
  // The solution should verify that inputs are valid numbers (both above zero).
}