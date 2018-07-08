// The DNA strand is missing the pairing element.Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG.Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C", "G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

// problem statement: look at every char in the string and pair it with it missing element.

// pseudo code
// store all the found pairs in a array
// loop through the string and check if the string is either A T C G
// after every char you find the pair 

function pairElement(str) {
  let completePair = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "A") {
      completePair.push(["A", "T"]);
    } else if (str[i] === "T") {
      completePair.push(["T", "A"]);
    } else if (str[i] === "C") {
      completePair.push(["C", "G"])
    } else if (str[i] === "G") {
      completePair.push(["G", "C"])
    }
  }
  return completePair;
}

pairElement("GCG");