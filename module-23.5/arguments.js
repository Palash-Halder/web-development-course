//array like Object: arguments
// এটা শুধু ফাংশনের ভিতরে পাওয়া যায়


function add(num1, num2) {
    console.log(num1, num2);
    console.log(arguments); // কম দাও/বেশি দাও বা decalre না করলেও সকল argument পেয়ে যাবে। 
    console.log(arguments[2]);
}

add(12, 13, 45, 89, 78);