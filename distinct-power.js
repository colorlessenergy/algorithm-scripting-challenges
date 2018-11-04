// Euler link https://projecteuler.net/problem=29

// a range between two numbers first range is for base and second range for expnonents
// double for loop
// outer loop is for the bases
// inner loop is for the exponents
// push them into an array
// after sort out the duplicates
// then sort in numberical order descending to ascending

function distinctPower(base1, base2, exp1, exp2) {
  let arrOfDistinctPower = [];
  for (let i = base1; i <= base2; i++) {
    for (let j = exp1; j <= exp2; j++) {
      arrOfDistinctPower.push(Math.pow(i, j));
    }
  }
  // sort out duplicates
  arrOfDistinctPower = removeDuplicatesInArr(arrOfDistinctPower);

  // sort in order from least to greates
  arrOfDistinctPower.sort(function (a, b) {
    return a - b;
  });

  console.log("there are " + arrOfDistinctPower.length + " distinct terms");
  return "there are " + arrOfDistinctPower.length + " distinct terms";
}

function removeDuplicatesInArr(arr) {
  return arr.filter(function (ele, index) {
    return arr.indexOf(ele) === index;
  });
};


distinctPower(2, 100, 2, 100);