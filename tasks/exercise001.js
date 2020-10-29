// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice.
// Your task will be to return the sum of the numbers that occur only once.
// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.
// More examples in the test cases below.

// Good luck!

function singles(arr){
    if (arr === undefined) throw new Error("array is required");
    // Your code here!

    // Steps:
    // store prev values in an array_pre
    // check cur against the element in array_prev
    // if there already, deduct it from sum

    let sum = 0;    //initail value of sum
    let arr_prev = [];  // store prev values

    for (const number of arr) {
        if (arr_prev.includes(number)) {
            sum -= number;
        }
        else {
            arr_prev.push(number);
            sum += number;
        }
    }
    return sum;
}

// console.log(singles([6, 9, 6, 3, 3, 7]));   // expect 16

module.exports = {
    singles
};
