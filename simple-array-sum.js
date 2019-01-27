// challenge
// https://www.hackerrank.com/challenges/simple-array-sum/problem

function simpleArraySum(ar) {
    /*
     * have a variable to keep track of the current sum
     * loop array and add one every value to the variable
     * return the variable
     */

    // normal 
    // let sum = 0;

    // for (let i = 0; i < ar.length; i++) {
    //     sum += ar[i];
    // }

    // functional programing

    let sum = ar.reduce((result, num) => {
        return result + num;
    });

    return sum;
}