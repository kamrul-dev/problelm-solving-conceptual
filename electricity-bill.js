// Calculate Electricity bill
// for first 100 unit - 5 tk per unit
// for more than 100 unit - 6 tk for every unit more than 100


function electricityBill(unit){
    let bill;
    if(unit <= 100){
        bill = unit * 5;
    }
    else if(unit > 100){
        let firstBill = 100 * 5;
        let remainingBill = (unit -100) * 6;
        bill = firstBill + remainingBill;
    }
    return bill;
}
console.log(electricityBill(200));