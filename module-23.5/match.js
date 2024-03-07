
// এভাবে করলে array এর ভিতরের সকল element আলাদা আলাদা করে পাওয়া যায়

const numbers = [45, 65, 23, 98, 19];



for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}


// উপরের কাজটি নিচের উপায়েও করা যায়:

for(const number of numbers){
    console.log(number);
}

const branches = [
    {id: 1, name: 'Local Office', maneger: 'Md. Momin Shekh', telephone: 8801715-131493, Mobile: 8801975131493, email: 'localofficeavub@gmail.com', geoLocation: '',  }
]