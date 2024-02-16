/**
 * Objective: Write a function to give me the sum of all numbers in an array
 * ‍step-1: declare a function
 * step-2: call check whether the function is called properly
 * step-3: set a parameter(s)
 * step-4: pass the parameter(s), check whether parameter is passed in proper format
 * step-5: do the function tasks (step by step)
*/

function sumOfNumbers() {
    
}

/**
 * ফাংশনের ভিতর কোন বডি নাই
 * কোন প্যারা মিটার নাই
 * কোন console.log নাই 
 * তাই undefined return করবে
 */

/**
const sum = sumOfNumbers();
console.log('Sum of numbers is', sum);

*/

// কিন্তু যদি প্যারামিটার দেয়া হয়, console.log করা হয় তাহলে output দেখাবে

/**
function sumOfNumbers(numbers) {
    console.log(numbers);
}

const numbs = [54, 62, 12, 6];
const sum2 = sumOfNumbers(numbs);
console.log('Sum of numbers is', sum2);

*/


function sumOfNumbers(numbers) {
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
    }
    return sum;
}

const numbs = [74, 62, 12, 6];
const sum2 = sumOfNumbers(numbs);
console.log('Sum of numbers is', sum2);



