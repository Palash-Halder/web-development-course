
// Example of Nested Object
const college = {
    name: 'vnc',
    class: ['11', '25'],
    events: ['Science air', 'Rag Day', 'Valedtines Day'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top',
        }
    }

   
}

console.log(college);
console.log(college.unique.color); 
console.log(college.unique.result);
console.log(college.unique.result.merit);

college.unique.result.merit = 'top top top most';

console.log(college.unique.result.merit);
console.log(college.events[1]);

delete college.class;
console.log(college);




