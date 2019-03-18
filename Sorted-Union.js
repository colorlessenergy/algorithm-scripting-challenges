// they can pass in more than 1 argument so i have to check "argument"

// loop through arguments 
// check if it is a number
// if it is check if it is in the array full of uniqueNumber
// if it is go to next one
// if it isnt in uniquenumber push it into that array
// if it isnt a number
// loop throuhg it
// check if that number is in the uniqiue number
// if it isn't skip it

function uniteUnique(arr) {
  let uniqueNumber = [];
  let lookUp = {};
  for (let i = 0; i < arguments.length; i++) {

    arguments[i].forEach(ele => {
      if (typeof ele !== 'number') {
        ele.forEach((num) => {
          if (!lookUp[num]) {
            uniqueNumber.push([num]);
            console.log(uniqueNumber)
            lookUp[num] = true;
          }
        })
      }

      if (!lookUp[ele]) {
        uniqueNumber.push(ele);
        lookUp[ele] = true;
      }
      
    })
    
  }
  return uniqueNumber;
}

uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);