// problem-1 seerToMon :

//  declaring function and parameter

function seerToMon(conversionInput) {

    //  Validating unexpected input 
    if (conversionInput < 0 || typeof conversionInput !== "number") {
        const invalidNumber = "Please provide a valid number";
        return invalidNumber;
    }

    // calling the formula of conversion

    const mon = conversionInput / 40;

    // returning output

    return mon;
};

const seer = seerToMon(40);

console.log(seer);


// problem-2  totalSales:

// declaring function and parameters

function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {

    //  Validating unexpected input 
    if (shirtQuantity < 0 || typeof shirtQuantity !== "number") {
        const invalidNumber = "Please provide a valid number";
        return invalidNumber;
    }

    if (pantQuantity < 0 || typeof pantQuantity !== "number") {
        const invalidNumber = "Please provide a valid number";
        return invalidNumber;
    }

    if (shoeQuantity < 0 || typeof shoeQuantity !== "number") {
        const invalidNumber = "Please provide a valid number";
        return invalidNumber;
    }


    // Price of products

    const shirtPrice = 100;
    const pantPrice = 200;
    const shoePrice = 500;

    // cost of each products sold

    const totalShirtCost = shirtPrice * shirtQuantity;
    const totalPantCost = pantPrice * pantQuantity;
    const totalShoeCost = shoePrice * shoeQuantity;

    // Total cost/sales of products

    const totalCost = totalShirtCost + totalPantCost + totalShoeCost;

    // returning output
    return totalCost;

};

console.log(totalSales(1, 5, 1));



// problem-3 deliveryCost:

// declaring function and parameter

function deliveryCost(deliveryQuantity) {

    // Charges for different Quantities

    const chargeFor100 = 100;
    const chargeForExtra100 = 80;
    const chargeForExceeding = 50;

    //  Validating unexpected input 
    if (deliveryQuantity < 0 || typeof deliveryQuantity !== "number") {
        const invalidNumber = "Please provide a valid number";
        return invalidNumber;
    }

    // declaring condition

    // if need to deliver less than or equal to 100 Quantities
    if (deliveryQuantity <= 100) {

        const costOfDelivery = deliveryQuantity * chargeFor100;

        return costOfDelivery;
    }

    // if need to deliver less than or equal to 200 Quantities
    else if (deliveryQuantity <= 200) {

        // charge for first 100 Quantities
        const costOfDelivery1 = chargeFor100 * 100;

        // determining rest of the Quantities and Charge
        const exceeding100 = deliveryQuantity - 100;

        const costOfDelivery2 = exceeding100 * chargeForExtra100;

        // calculating first 100 Quantities charge and rest of the Quantities charge
        const totalDeliverCost200 = costOfDelivery1 + costOfDelivery2;

        return totalDeliverCost200;
    }

    // if need to deliver more than 200 Quantities
    else {

        // charge for first 200 Quantities
        const costOfDelivery1 = chargeFor100 * 100;
        const costOfDelivery2 = chargeForExtra100 * 100;

        // determining rest of the Quantities and Charge
        const exceeding200 = deliveryQuantity - 200;

        const costOfDelivery3 = exceeding200 * chargeForExceeding;

        // Calculating total delivery charge 
        const totalDeliverCost = costOfDelivery1 + costOfDelivery2 + costOfDelivery3;

        return totalDeliverCost;
    }
};


const deliverCost = deliveryCost(740);

console.log(deliverCost);


// problem-4  perfectFriend:

// declaring function and parameter
function perfectFriend(friendsName) {

    // declaring a blank variable to fetch the 5 letter string
    let nameLength5 = "";

    //  Validating unexpected input 
     if(friendsName.length==0){
         return "please provide a valid name"
     }

     if(typeof friendsName != "object"){
        return "please provide a valid array list"
    }

    // Initializing for loop to find the 5 letter friend name
    for (const element of friendsName) {
        if (element.length == 5) {
            nameLength5 = element;
            break;
        }
    }
    return nameLength5;
};

const friendsName = ['Howl' , "Emon", "jisha", "rahim", "karim"];

console.log(perfectFriend(friendsName));






function vowelsAndConsonants(s) {
    let vowel=["a", "e", "i", "o", "u"]
    for(let i=0; i<s.length; i++){
      
        // 186no. line er meaning holo vowel er indexOf (given parameter er [i-mane i er maan onushare kon array er maan boshbe])
        // simply bujhano hocche given parameter e i-er no. onujayi jei maan ta asche oitar index no. vowel e koto
        // seta jodi -1 theke boro hoy tahole print korte hobe given parameter er i-onujayi maan!
        if(vowel.indexOf(s[i])>-1){
            console.log(s[i]);
        }
    }
    
    for(let i of s){
        if(vowel.indexOf(s[i])<0){
            console.log(s[i]);
        }
    }
}

console.log(vowelsAndConsonants(["b", "e", "i", "o", "u", "j", "a", "k"]))