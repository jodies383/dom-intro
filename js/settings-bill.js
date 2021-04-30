
var totalCall = document.querySelector(".callTotalSettings")
var totalSms = document.querySelector(".smsTotalSettings")
var theTotal = document.querySelector(".totalSettings")


var setCall = document.querySelector(".callCostSetting")
var setSms = document.querySelector(".smsCostSetting")
var warnLevel = document.querySelector(".warningLevelSetting")
var critLevel = document.querySelector(".criticalLevelSetting")


var addBtn = document.querySelector(".settingsAdd")

var updateBtn = document.querySelector(".updateSettings")


let billToSet = BillWithSettings();

updateBtn.addEventListener("click", changeBill);
function changeBill() {

    var settingsCall = setCall.value;
    var settingsSms = setSms.value;
    var settingsWarning = warnLevel.value;
    var settingsCritical = critLevel.value;

    billToSet.setCallCost(settingsCall);
    billToSet.getCallCost();
    billToSet.getSmsCost();
    billToSet.getWarningLevel();
    billToSet.getCriticalLevel();
    billToSet.setSmsCost(settingsSms);
    billToSet.setWarningLevel(settingsWarning);
    billToSet.setCriticalLevel(settingsCritical);
    theTotal.classList.remove(billToSet.removeTotalCritName());
    theTotal.classList.remove(billToSet.removeTotalWarnName());
}



addBtn.addEventListener("click", setBill);
function setBill() {

    var checkedSetBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked").value;

    billToSet.makeCall(checkedSetBtn);

    billToSet.sendSms(checkedSetBtn);

    totalCall.innerHTML = billToSet.getTotalCallCost();
    totalSms.innerHTML = billToSet.getTotalSmsCost();
    theTotal.innerHTML = billToSet.getTotalCost().toFixed(2);
    theTotal.classList.add(billToSet.totalClassName());

};
