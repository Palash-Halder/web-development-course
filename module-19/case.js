const school = 'RAJ UK Uttara Model School';

console.log(school);


//uppercase: ABCD EFG
//lowercase: abcd efg
console.log(school.toLowerCase());
console.log(school.toUpperCase());



const subject = 'Chemistry';
const book = 'chemistry';

if (subject === book) {
    console.log('I am reading book');
} else {
    console.log('Pretending to read');
}



if (subject.toLowerCase === book.toLowerCase) {
    console.log('I am reading book');
} else {
    console.log('Pretending to read');
}


const drink = ' water'; // এখানে একটা স্পেস দেয়া হয়েছে। তাই trim() ব্যবহার করতে হয়েছে
const liquid = 'water';

if (drink.trim() === liquid.trim()) {
    console.log('পানির অপর নাম জীবন');
} else {
    console.log('সমুদ্রে পানি আছে খাইতে পারি না');
}


