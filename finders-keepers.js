// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers

function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return num = arr[i];
    }
  }

  // if it still zero that means none of the 
  // elements in the array passed the test
  // so we return undefined
  if (num === 0) {
    return undefined;
  }
  return num;
} 
  
findElement([1, 2, 3, 4], num => num % 2 === 0);