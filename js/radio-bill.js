
var myCallTotal = document.querySelector(".callTotalTwo")
var mySmsTotal = document.querySelector(".smsTotalTwo")
var billTotal = document.querySelector(".totalTwo")




var radioBillAddBtn = document.querySelector(".radioBillAddBtn");

let radioRef = radioBill();

radioBillAddBtn.addEventListener("click", clickRadioBill);

function clickRadioBill() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked").value;

    radioRef.calcRadio(checkedRadioBtn);

    myCallTotal.innerHTML = radioRef.radioCall();
    mySmsTotal.innerHTML = radioRef.radioSms();
    billTotal.innerHTML = radioRef.radioT();
    billTotal.classList.add(radioRef.radioBillLevels());


}