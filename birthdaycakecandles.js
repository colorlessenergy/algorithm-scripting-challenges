// link: https://www.hackerrank.com/challenges/birthday-cake-candles/problem
// array of numbers is the input
    // we need to find the largest number in they array
    // count how many times the largest number shows up


function birthdayCakeCandles(ar) {
    // increment this number for everytime the largest number is seen in the array
    let counter = 0;
    // pass in null because we don't care about this context at this moment.
    let largestNumber = Math.max.apply(null, ar);

    // loop through the array and add 1 to the counter if the largest number is found
    ar.forEach(function (number) {
        if (number == largestNumber) counter++;
    });

    return counter;
}
