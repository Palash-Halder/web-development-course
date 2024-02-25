/*function calculateMoney(ticketSale) {

    const securityGuardSalary = 500;
    const ticketRate = 120;
    const lunchSubsidy = 50;
    const staffNumber = 8;

    const totalExpenses = securityGuardSalary + (lunchSubsidy * staffNumber);

    const totalIncome = 120 * ticketSale;

    return totalExpenses;
    console.log(totalExpenses);
   
    
    
}
const income = ticketSale(50);
*/

/*
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
calculateMoney();

const output = calculateMoney(-10);
console.log(output);

*/

const names = [raju, hadi, pronoy, palash];

function checkName(name) {
    const endCharater = name[name.lengath - 1];
    return endCharater === 'a' || endCharater === 'a' || endCharater === 'y' || endCharater === 'i' || endCharater === 'e' || endCharater === 'o' || endCharater === 'u' || endCharater === 'w';
}

names.forEach(name => {
    if(checkName(name)){
        return "Bad Name";
    }else{
        return "Good Name";
    }
});






