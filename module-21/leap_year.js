/**
 * Simple Logic:
 * Year will be leap year if the year is divisible by 4
 * 
 */

function isLeapYear(year) {
    if (year % 4 === 0) {
        //console.log(year +' is a leap year');
        return true;
    }
    else{
        //console.log(year +' is not a leap year');
        return false;
    }
}

const isLeaYr = isLeapYear(2043);
console.log(isLeaYr);


/**
 * 1. those year that is not divisible by 100 and if the year is divisible by 4 then it will be leap year
 * 2. 
 
*/

function isLeapYear2(year) {
    if (year % 100 !== 0 && year % 4 === 0 ) {
        return true;
    }
    else if (year % 100 === 0 && year % 400 === 0) {
        return true;
    }
    else{
        return false;
    }
    
}

const isLeapYr2 = isLeapYear2(2100);
const isLeapYr3 = isLeapYear2(2400);
const isLeapYr4 = isLeapYear2(1900);
const isLeapYr5 = isLeapYear2(2052);
console.log(isLeapYr2, isLeapYr3, isLeapYr4, isLeapYr5);