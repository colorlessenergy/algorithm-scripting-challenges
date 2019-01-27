// link: https://www.hackerrank.com/challenges/compare-the-triplets/problem

// inputs two arrays

// first store two variables one for The first arrays score and the second array scored
// loop through one of the array (both arrays will be the same length)
// compare each value of one array with the second one
// if the value is bigger give the first or the second array a point
// if they are equal give no points

function compareTriplets(a, b) {
  let scoreOne = 0;
  let scoreTwo = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      scoreOne +=1;
    } else if (a[i] < b[i]) {
      scoreTwo += 1;
    }
  }

  return [scoreOne, scoreTwo];
}