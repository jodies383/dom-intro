var templateElem = document.querySelector(".domTemplate").innerHTML
var radioTemplate = Handlebars.compile(templateElem)
var myCallTotal = document.querySelector(".callTotalTwo")
var mySmsTotal = document.querySelector(".smsTotalTwo")
var billTotal = document.querySelector(".totalTwo")




var radioBillAddBtn = document.querySelector(".radioBillAddBtn");

let radioRef = radioBill();

radioBillAddBtn.addEventListener("click", clickRadioBill);

function clickRadioBill() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked").value;

    radioRef.calcRadio(checkedRadioBtn);

    myCallTotal.innerHTML = radioTemplate({call: radioRef.radioCall()});
    mySmsTotal.innerHTML = radioTemplate({sms: radioRef.radioSms()});
    billTotal.innerHTML = radioTemplate({total: radioRef.radioT()});
    radioTemplate({warnings: billTotal.classList.add(radioRef.radioBillLevels())});

   }