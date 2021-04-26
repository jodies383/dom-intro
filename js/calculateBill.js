function calculateBillEvent() {

    var billTotal = 0;

    function calBill(string) {
        var billSplit = string.split(",");
        for (var i = 0; i < billSplit.length; i++) {
            var billItem = billSplit[i].trim();
            if (billItem === "call") {
                billTotal += 2.75;
            }
            else if (billItem === "sms") {
                billTotal += 0.75;
            }

        }
        var roundedBillTotal = billTotal.toFixed(2);
        return roundedBillTotal;

    }
 
    function levels() {
        if ((billTotal) >= 30) {
            return "critical"
        }
        else if ((billTotal) >= 20) {
            return "warning"
        }
    }
    return {
        calBill,
        levels

    }
}
