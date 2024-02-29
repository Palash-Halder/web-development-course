// Questions are below:

// Problem- 01

// Problem- 02

function checkName(name) {

    
    name = name.toLowerCase();

    const letters = ['a', 'y', 'i', 'e', 'o', 'u', 'w' ];

    const lastCharacter = name.charAt(name.length - 1);

    if (letters.includes(lastCharacter)) {

        return 'Good Name';
        
    } else if(typeof name != 'String'){

        return 'invalid';

    }else{
        return 'Bad Name'
    }

}

console.log(checkName('Pala'));



// Problem- 03

// Problem- 04

// Problem- 05

