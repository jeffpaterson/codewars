function getCount(words) {
 if (!words || words.length === 0 || words === true || words.isArray || typeof words === 'object') { words = "" }
 words = words +"";
  var vowels = words.match(/[aeiou]/gi);
  var consonants = words.match(/[bcdfghjklmnpqrstvwxvz]/gi);
  
  if (vowels == null) {
    vowels = 0
    } else { 
    vowels = vowels.length
    }
  if (consonants == null) {
    consonants = 0
    } else {
      consonants = consonants.length
    }
  return {
   vowels: vowels,
   consonants: consonants
  }
 }