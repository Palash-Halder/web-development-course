

//Problem: 01

function calculateMoney(ticketSale) {

    if(ticketSale < 0){
        return"মনু ফাজলামি বাদ দাও";
    }

    const securityGuardSalary = 500;
    const lunchSubsidy = 50;
    const staffNumber = 8;

    const totalExpenditure = securityGuardSalary + (lunchSubsidy * staffNumber);

    const totalSale = ticketSale * 120;

    const profitLoss = totalSale - totalExpenditure;

    return profitLoss;

    
}


//Problem: 02
function checkName(name) {

    if(typeof name !== 'string'){
        return 'invalid';
    }

    name = name.toLowerCase();
    

    const letters = ['a', 'y', 'i', 'e', 'o', 'u', 'w' ];

    const lastCharacter = name.charAt(name.length - 1);

    if (letters.includes(lastCharacter)) {
        return 'Good Name';
    }else {
        return 'Bad Name'
    }

}

console.log(checkName('palas'));


//Problem: 03
function deleteInvalids(array){

    if (!Array.isArray(array)){
        return 'ইনপুট হিসেবে একটা array দাও না প্লিজ';

    }
    else{

        return array.filter(element => typeof element === "number");
    }
        

}


//console.log(deleteInvalids([12, 10, 78, 'Palash']));
//console.log(deleteInvalids(160));



