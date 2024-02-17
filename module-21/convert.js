// 12 inch 1 feet

function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}

// 75 
function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch ';
    return result;
}

//const shuvoHeight = inchToFeet(75);
//console.log(shuvoHeight);

const shuvoHeight2 = inchToFeet2(100);
console.log(shuvoHeight2);


// Miles to KM
function mileToKm(mile) {
    const mileToMeter = mile * 1609.34;
    const mileNumber = mileToMeter / 1000;
    const kmNumber = parseInt(mileNumber);
    const meterFraction = mileToMeter % 1000;
    const meterRemaining = parseInt(meterFraction)
    result2 = kmNumber + ' km ' + meterRemaining + ' m ';
    return result2;
}

const distance = mileToKm(10);
console.log(distance)