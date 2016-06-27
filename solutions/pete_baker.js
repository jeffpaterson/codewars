function cakes(recipe, available) {
  return Object.keys(recipe).map(function(ing) { 
    if (! available.hasOwnProperty(ing)) return 0;
    return Math.floor(available[ing]/recipe[ing]);
    } ).reduce(
    (prev,curr) => Math.min(prev,curr));
}