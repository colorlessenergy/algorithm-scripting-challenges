// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing(before).

// Third argument is what you will be replacing the second argument with (after).

//   Note
// Preserve the case of the first character in the original word when you are replacing it.For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

// problem statement: implement the replace method in javascript

// pseudo code
// use a regex to check if the word exist in the string.
// make the string into the a array and check the index of the word
// replace the lemenet in the index with the replace word.

function myReplace(str, before, after) {
  let stringToArray = str.split(' ');

  // test if the first lettter of the word is uppercase
  let isCap = /[A-Z]/.test(before) ;
  if (str.match(before)) {
    // use to perserve the case the of the word that is bieng chnaged
    if (isCap) {
      after = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
      after = after.charAt(0).toLowerCase() + after.slice(1);
    }
    stringToArray[stringToArray.indexOf(before)] = after;
  }
  return stringToArray.join(' ');
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");