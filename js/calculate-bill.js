
var calculateBtn = document.querySelector(".calculateBtn");


var billTotalElement = document.querySelector(".billTotal");


var billStringElement = document.querySelector(".billString");


let calRef = calculateBillEvent();

calculateBtn.addEventListener('click', calculateBtnClicked);


function calculateBtnClicked() {

    var billString = billStringElement.value;


    billTotalElement.innerHTML = calRef.calBill(billString);


    if (billTotalElement.innerHTML >= 30) {
        billTotalElement.classList.remove("warning");
        billTotalElement.classList.add("danger");


    }
    else if (billTotalElement.innerHTML >= 20) {
        billTotalElement.classList.remove("danger");
        billTotalElement.classList.add("warning");
    }
    else {
        billTotalElement.classList.remove("warning");
        billTotalElement.classList.remove("danger");
    }



}
