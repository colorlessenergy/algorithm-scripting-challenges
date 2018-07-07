// link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin

// problem statement.. check the front of a word and if it is a vowel add way to the end of the string otherwise if it is a consonant or consonant cluster take that and move it to the end with ay


// store two variables one with all vowels and one with all consonants

// psuedo code
// check in front of the string and see if it is a vowel.
// if it is a vowel put 'way' to the end of the string.
// otherwise if it is a consonant or a consonant cluster move it to the end of the string with the suffix of ay.

const vowels = 'aeiou';
const consonants = "bcdfghjklmnpqrstvwxyz"

function translatePigLatin(str) {
  // had to store all the consonants so i can check if more than one consonant is in the front and to be able to add all the chars to the end.
  let allConsonants = [];
  vowels.split('').forEach((currentVowel) => {
    if (str.startsWith(currentVowel)) {
      str += "way";
    }
  });

  for (let i = 0; i < consonants.split('').length; i++) {
    if (str.startsWith(consonants.split('')[i])) {
      allConsonants.push(consonants.split('')[i]);
      str = str.slice(1);
      // had to reset the loop to 0 just in case the consonants that  have already passed showed up again.
      i = 0;
    }
  };

  // to add the ay to the end only  if any consonants have been found in the front.
  if (allConsonants.length !== 0) {
    str += allConsonants.join('') + 'ay';
  }
  
  return str;
}

translatePigLatin("paragraphs");
translatePigLatin("california");
translatePigLatin("glove");