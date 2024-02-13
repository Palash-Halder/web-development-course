import * as fs from 'fs';

const person = {
    name: 'Palash Halder',
    age: 35,
    profession: 'developer',
    salary: 25000,
    married: true,
    'favourite palces': ['bandarban', 'saintmartin', 'kuakata']
}

person.salary = 30000;
person['age'] = 38;

console.log(person);

console.log(person);

// dot notaion: dot diye value access kora jay
//
console.log(person.name);
console.log(person.age);
console.log(person.profession);


const income = person.salary;
console.log(income);


//bracket notation
//third bracket diye access kora jay
//এভাবেও property value নেয়া যায়
console.log(person['age']);
const boyos = person['age'];
console.log(boyos);

console.log(person['favourite palces']);
//console.log(person.'favourite palces');

const keyName = 'profession';
console.log(keyName);

const propName = 'profession';
person[propName] = 'devops';

console.log(person);

