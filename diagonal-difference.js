// link: https://www.hackerrank.com/challenges/diagonal-difference/problem

// input is a 2d array

// have two variables that store the first diagonal sum and the second diagonal sum
// loop through first array
// for ever iteration add the i th element of the array into the first diagonal sum 
// variable and add the (arr.length - 1) - i element of the array into 
// the second diagonal sum variable
// return subtract both variables and return the absolute 


function diagonalDifference(arr) {
  let LeftToRightDiagonalSum = 0;
  let RightToLeftDiagonalSum = 0;

  for (let i = 0; i < arr.length; i++) {
      let secondDiagonal = (arr.length - 1) - i;
      LeftToRightDiagonalSum += arr[i][i]
      RightToLeftDiagonalSum += arr[i][secondDiagonal];
  }

  return Math.abs(LeftToRightDiagonalSum - RightToLeftDiagonalSum)
}