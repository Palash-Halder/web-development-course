
// Recap Previous Lesson
function add(price1, price2) {
    const total = price1 + price2;
    return total;
}

const bill = add (5, 80);
console.log(bill);


// We can do this in the following way:

function add2(price1, price2) {
    return price1 + price2;
}

const bill2 = add(10, 95);
console.log(bill2);


function doMath(num1, num2) {
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiply = num1 * num2;
    const result = multiply / 2;
    return result;
}

const result = doMath(20, 5);
console.log(result);