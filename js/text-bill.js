var templateElem = document.querySelector(".domTemplate").innerHTML
var textTemplate = Handlebars.compile(templateElem)
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


    callsTotalElem.innerHTML = textTemplate({call: textRef.totalCall()});
    smsTotalElem.innerHTML = textTemplate({sms: textRef.totalSms()});
    totalCostElem.innerHTML = textTemplate({total: textRef.textBillCost()});
    totalCostElem.classList.add(textRef.textBillLevels());

}