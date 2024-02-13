const address = 'andorKilla';
const part = address.slice(5, 10); //শুরুর index আর শেষের index

console.log(part);


const sentence = 'I am a good and hrdworking person.';
console.log(sentence.split(' '));

console.log(sentence.split('a'));


const friendsStr = 'Rahim,Kahim,dahim,lahim,fahim,sahim';
const friends = friendsStr.split(',');
console.log(friends);


const realFriend = ['Rahim', 'kahim', 'dahim', 'lahim', 'fahim', 'sahim'];
console.log(realFriend);
console.log(realFriend.join());
console.log(realFriend.join('|'));
console.log(realFriend.join('-'));
