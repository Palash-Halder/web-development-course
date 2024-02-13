const country = 'Bangladesh';
const division = "Dhaka";
const district = `Gopalgonj`;

const thana = new String('Demra');

console.log(thana);


const numbers = [54, 98, 78, 21, 65];
console.log(numbers.length);
console.log(numbers[1]);

// change element
numbers[1] = 25;
console.log(numbers);



// String is immutable --> not changeable 
// Array is mutable --> you can change the array elements
// Length and index wise letter/neumber
const capital = 'Rajshahi';
console.log(capital);
console.log(capital.length);
console.log(capital[0]);
capital[0] = 'B';
console.log(capital); // number is changeable but string not. 