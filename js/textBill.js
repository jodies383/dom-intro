function textBill() {

    var callsTotal = 0;
    var smsTotal = 0;
    var textTot = 0;

    function textBillTotal(billTypeEntered) {

        if (billTypeEntered === "call") {
            callsTotal += 2.75,
            textTot += 2.75;
        }
        else if (billTypeEntered === "sms") {
            smsTotal += 0.75,
            textTot += 0.75;
        }
    } function totalCall() {
        return callsTotal;

    } function totalSms() {
        return smsTotal;

    } function textBillCost() {
        return textTot;
    }
    function textBillLevels() {
        if ((textTot) >= 50) {
            return "critical"
        }
        else if ((textTot) >= 30) {
            return "warning"
        }
    }
    return {
        textBillTotal,
        totalCall,
        totalSms,
        textBillCost,
        textBillLevels
    }
}

