

// Problem-03

function deleteInvalids(array){

    if (!Array.isArray(array)){
        return 'ইনপুট হিসেবে একটা array দাও না প্লিজ';

    }
    else{

        return array.filter(element => typeof element === "number");
    }
        

}

//const array = [1, 'apple', 3, 'banana', 4, 'orange', 5];
//const array = 'Palash'

console.log(deleteInvalids('Palash'));
console.log(deleteInvalids(["1", {num:2, NaN}]));
console.log(deleteInvalids({num: [1, 2, 3]}));
console.log(deleteInvalids([1, 'apple', 3, 'banana', 4, 'orange', 5]));
