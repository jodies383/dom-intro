// get a reference to the textbox where the bill type is to be entered
var billTypeText = document.querySelector(".billTypeText");

//get a reference to the add button
var addToBillBtn = document.querySelector(".addToBillBtn");

//create a variable that will keep track of the total bill
var callsTotalElem = document.querySelector(".callTotalOne");
var smsTotalElem = document.querySelector(".smsTotalOne");
var totalCostElem = document.querySelector(".totalOne");

// var callsTotal = 0;
// var smsTotal = 0;

//add an event listener for when the add button is pressed
let textRef = textBill();

addToBillBtn.addEventListener('click', textBillSum);


function textBillSum() {
    var billType = billTypeText.value.trim();

    textRef.textBillTotal(billType);
    
    
    callsTotalElem.innerHTML = textRef.totalCall();
    smsTotalElem.innerHTML = textRef.totalSms();
    totalCostElem.innerHTML = textRef.textBillCost();
    totalCostElem.classList.add(textRef.textBillLevels());
    
//     // get the value entered in the billType textfield
//     var billTypeEntered = billTypeText.value.trim();
//     // update the correct total
//     if (billTypeEntered === "call") {
//         callsTotal += 2.75;
//     } else if (billTypeEntered === "sms") {
//         smsTotal += 0.75;
//     }
}


//     //update the totals that is displayed on the screen.
//     callsTotalElem.innerHTML = callsTotal.toFixed(2);
//     smsTotalElem.innerHTML = smsTotal.toFixed(2);
//     var totalCost = callsTotal + smsTotal;
//     totalCostElem.innerHTML = totalCost.toFixed(2);

//     if (totalCost >= 50) {
//         // adding the danger class will make the text red
//         totalCostElem.classList.add("danger");
//     } else if (totalCost >= 30) {
//         totalCostElem.classList.add("warning");
//     }
// }


//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen