

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

//console.log(checkName('palas'));


//Problem: 03

function deleteInvalids(array){

    if (!Array.isArray(array)){
        return 'ইনপুট হিসেবে একটা array দাও না প্লিজ।';

    }
    else{

        return array.filter(element => typeof element === "number");
    }
        

}


console.log(deleteInvalids([12, 10, 78, 'Palash']));
console.log(deleteInvalids(160));



//Problem: 04

function password(obj) {


    const name = obj.name;
    const birthYear = obj.birthYear;
    const siteName = obj.siteName;

    const username = name.toLowerCase();

    const firstLetterOfSiteCapitalized = siteName.charAt(0).toUpperCase();
    const otherLettersOfSite = siteName.slice(1);
    const formattedSiteName = firstLetterOfSiteCapitalized + otherLettersOfSite;

    const password = formattedSiteName + '#' + username + '@' + birthYear;

    return password;
}   

// const userDetails = {
//     name: "kolimuddin",
//     birthYear: 1999,
//     siteName: "google",
// }

// const targetedPassword = password(userDetails);
// console.log(targetedPassword);






//Problem: 05

function monthlySavings(arr, livingCost) {

    let totalPaymentReceived = 0;
    
    for(let i = 0; i <arr.length; i++){

        let payment = arr[i];

        if(payment >= 30000){
            payment -= payment * 0.2;
        }

        totalPaymentReceived  += payment;
    }

    let totalSavings = totalPaymentReceived - livingCost;

    if(totalSavings < 0){
        return 'earn more';

    }
    else{
        return totalSavings;
    }
}


// const arr = [1000, 2000, 5500];
// const livingCost = 5000;

// const totalSavings = monthlySavings(arr, livingCost);


// console.log(totalSavings);






/*
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


function password(obj) {

    const myobj = { name, birthYear, siteName};
    const name = name.toLowerCase();
    const formatedSiteName = siteName.charAt(0).toUpperCase() + siteName.slice(1);

    const password = `${formatedSiteName}#${username}@${birthYera}`;

    return password = generatePassword(password);
    
}

console.log({name: "Palash", birthYear: "1971", siteName: "addidas" });




function password(obj) {


    const name = obj.name;
    const birthYear = obj.birthYear;
    const siteName = obj.siteName;

    const username = name.toLowerCase();

    const firstLetterOfSiteCapitalized = siteName.charAt(0).toUpperCase();
    const otherLettersOfSite = siteName.slice(1);
    const formattedSiteName = firstLetterOfSiteCapitalized + otherLettersOfSite;

    const password = formattedSiteName + '#' + username + '@' + birthYear;

    return password;
}   

// const userDetails = {
//     name: "kolimuddin",
//     birthYear: 1999,
//     siteName: "google",
// }

// const targetedPassword = password(userDetails);
// console.log(targetedPassword);
*/