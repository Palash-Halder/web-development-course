function square(number) {
    console.log('value of the number parameter', number);
    const borgo = number * number;
    console.log('square of the given number is: ', borgo);
}

square(4);

function add(num1, num2) {
    const sum = num1 + num2;
    console.log(sum);
}

add(15, 21);
add(75, 98);


function addAll(a, b, c, d, e) {
    const total = a + b + c + d + e;
    console.log(a, b, c, d, e);
    console.log(total);
}

addAll(10, 11, 25, 87, 56);