function fearNotLetter(str) {

  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);

    // check if the code of the current character
    // is the expected one by comparing it to the 
    // char code at the first letter plus the iteration

    if (code !== str.charCodeAt(0) + i) {
      // subtract one from code because
      // it is ahead by one and we need the letter that is missing
      // which is one letter behind the current charcode
      return String.fromCharCode(code - 1);
    }

  }
  return undefined;
}

fearNotLetter("abce");