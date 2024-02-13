// Object Literal

const mobile = {
    brand: 'Samsung',
    price: 25000,
    color: 'ocean-blue',
    camera: '108mp',
    isNew: true,
}

//for of: array
//for in: object

for(const prop in mobile){
    console.log(prop);
    console.log(mobile[prop]);
}

const keys = Object.keys(mobile);
console.log(keys);

for(const key of keys){
    console.log(key, ':', mobile[key]);
}


// Declare Object ------------->

const pen = { brand: 'HP', price: 10, colors: 'black'}
const pencil = new Object();
console.log(pencil);
const rubber = Object.create({});
console.log(rubber);

//using new
