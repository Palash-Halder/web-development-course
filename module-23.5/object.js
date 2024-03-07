// অবজেক্ট-এর কিছু বৈশিষ্ট্য থাকে আর অবজেক্ট কিছু কাজ করতে পারে।
// অবজেক্ট-এর ভিতরে: String, number, boolean, array, array[object], function, object, object{object} থাকতে পারে।
const nayok = {
    name: 'Palash Halder',
    id: 121,
    address: 'movie cinema',
    isSingle: true,
    friends: ['Apu', 'Razz', 'Salman', 'Amir'],
    movies: [{name: 'no. 1', year: 2015}, {name: 'king Kahn', year: 2018} ],
    act: function (){
        console.log('acting like Sakib Khan');
    },
    car: {
        brand: 'Tesla',
        price: 50000000,
        made: 2024,
        manufacturer: {
            name: 'Tesla',
            ceo: 'Elon Mask',
            country: 'USA'
        }
    }
}

console.log(student.car);
console.log(nayok.act);
nayok.act();
