
var billTypeText = document.querySelector(".billTypeText");


var addToBillBtn = document.querySelector(".addToBillBtn");

var callsTotalElem = document.querySelector(".callTotalOne");
var smsTotalElem = document.querySelector(".smsTotalOne");
var totalCostElem = document.querySelector(".totalOne");

let textRef = textBill();

addToBillBtn.addEventListener('click', textBillSum);


function textBillSum() {
    var billType = billTypeText.value.trim();

    textRef.textBillTotal(billType);


    callsTotalElem.innerHTML = textRef.totalCall();
    smsTotalElem.innerHTML = textRef.totalSms();
    totalCostElem.innerHTML = textRef.textBillCost();
    totalCostElem.classList.add(textRef.textBillLevels());

}

