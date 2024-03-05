/*function deleteInvalids(array){

   if(!Array.isArray(array)){
      return 'Invalid input';
   }
      return array.filter(element => typeof element === 'number');

}


let array = ['Palash', 15, 52, 25];
let outputArray = deleteInvalids(array);

console.log(outputArray);
*/

let arr = ['polash', 10, 20, 30, 'rijwan', 100, true, 200]; 

function validity(arr = []) { 
    if(typeof arr !== 'object') { 
        return 'wrong input value';  
    } 

    let newArr = []; 

    for(let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === 'number') {
            newArr.push(arr[i]);
        }
    }

    return newArr; 
}

console.log(validity(arr)));
