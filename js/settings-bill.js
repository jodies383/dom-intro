// get a reference to the sms or call radio buttons
var totalCall = document.querySelector(".callTotalSettings")
var totalSms = document.querySelector(".smsTotalSettings")
var theTotal = document.querySelector(".totalSettings")

// get refences to all the settings fields
var setCall = document.querySelector(".callCostSetting")
var setSms = document.querySelector(".smsCostSetting")
var warnLevel = document.querySelector(".warningLevelSetting")
var critLevel = document.querySelector(".criticalLevelSetting")

//get a reference to the add button
var addBtn = document.querySelector(".settingsAdd")

//get a reference to the 'Update settings' button
var updateBtn = document.querySelector(".updateSettings")

// create a variables that will keep track of all the settings
var callSetting = 0;
var smsSetting = 0;
var warningSetting = 0;
var critSetting = 0;

// create a variables that will keep track of all three totals.
var totalC = 0;
var totalS = 0;
var totalAll = 0;



function changeBill() {
    callSetting = Number(setCall.value)
    smsSetting = Number(setSms.value)
    warningSetting = Number(warnLevel.value)
    critSetting = Number(critLevel.value)

    if (totalAll >= critSetting && critSetting > 0) {
        theTotal.classList.remove("warning");
        theTotal.classList.add("danger");

    }
    else if (totalAll >= warningSetting && warningSetting > 0) {
        theTotal.classList.remove("danger");
        theTotal.classList.add("warning");
    }
    else {
        theTotal.classList.remove("warning");
        theTotal.classList.remove("danger");
    }


}


//add an event listener for when the 'Update settings' button is pressed

updateBtn.addEventListener("click", changeBill);


function setBill() {
    var checkedSetBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked").value;

    if (totalAll < critSetting) {
        if (checkedSetBtn === "call") {
            totalC += parseFloat(callSetting);

        } else if (checkedSetBtn === "sms") {
            totalS += parseFloat(smsSetting);
        }
        if (totalAll >= critSetting) {
            totalAll += 0;
            totalCall += 0;
            totalSms += 0;
        }

        totalCall.innerHTML = parseFloat(totalC).toFixed(2);
        totalSms.innerHTML = parseFloat(totalS).toFixed(2);
        totalAll = totalC + totalS;
        theTotal.innerHTML = parseFloat(totalAll).toFixed(2);

    }

    if (totalAll >= critSetting) {
        theTotal.classList.remove("warning");
        theTotal.classList.add("danger");


    }
    else if (totalAll >= warningSetting) {
        theTotal.classList.remove("danger");
        theTotal.classList.add("warning");
    }
    else {
        theTotal.classList.remove("warning");
        theTotal.classList.remove("danger");
    }


};




//add an event listener for when the add button is pressed

addBtn.addEventListener("click", setBill);


//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
