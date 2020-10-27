// Scenario
// Several people are standing in a row divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.

// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)
// Explanation:
// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

// rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
// Explanation:
// The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

// rowWeights([80])  ==>  return (80, 0)
// Explanation:
// The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.

function rowWeights(array){
    // Your code here!

    // Steps:
    // put the element in 2 teams, even and odd index
    // Sum the elements up for the 2 teams (write a summing func)
    // put and return the sum into an array

    // put the element in 2 teams, even and odd index
    let even = [];
    let odd = [];

    array.forEach((el, index) => {
        if(index % 2 === 0) {
            // even team member
            even.push(el);
        } else {
            // odd team member
            odd.push(el);
        }
    });
    // console.log(even);
    // console.log(odd);

    // Sum the elements up for the 2 teams (write a summing func)
    function sum_arr(arr) {
        let total = 0;

        for (let i = 0; i < arr.length; i++) {
            total += arr[i];
        }
        
        return total;
    }

    // put and return the sum into an array
    // console.log([sum_arr(even), sum_arr(odd)]);
    return [sum_arr(even), sum_arr(odd)];

}
// rowWeights([13, 27, 49]);
// rowWeights([97, 45, 23, 89, 64, 62, 56]);
module.exports = {
    rowWeights
};
