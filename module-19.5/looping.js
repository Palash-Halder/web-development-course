/**
-- Looping Technique
-- 1. for Looping
-- 2. while Looping
-- 3. do while -- > ignore
-- 4. for of --> array loop korar jonno
-- 5. for in --> object loop korar jonno

-- একটা থেকে প্রতিটি উপাদান আলাদা আলাদা করে পেতে
*/

const friends = ['Elon', 'Bill', 'Mark', 'Waren'];

for(const friend of friends){
    console.log(friend);
}

for (let i = 0; i < friends.length; i++) {
    //index array elements
    console.log(i);
    //print array elements
    console.log(friends[i]);
    
}

const numbers = [5, 23, 456, 421, 25, 4512, 54541, 21, 45, 6];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    
}

let i = 0;
while (i < friends.length) {
    console.log(friends[i]);
    i++;
}

let n = 0;
while (n < numbers.length) {
    console.log(numbers[n]);
    n++;
}