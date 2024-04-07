function familyTrip (input){
let budget = Number(input[0]);
let overnights = Number(input[1]);
let overnightPrice = Number(input[2]);
let CostProcentage = Number(input[3])
let additionalCost = ((budget)*CostProcentage)/100
let totalPrice=0
    if (overnights>7){
        totalPrice = overnights*overnightPrice*0.95+additionalCost
    }else {
        totalPrice = overnights*overnightPrice+additionalCost
    }
    if (totalPrice<=budget){
        console.log(`Ivanovi will be left with ${(budget-totalPrice).toFixed(2)} leva after vacation.`);
    }else {
        console.log(`${(totalPrice-budget).toFixed(2)} leva needed.`);
    }


    console.log();
}
familyTrip(["500","7","66","15"])
