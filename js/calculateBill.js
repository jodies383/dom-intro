function calculateBillEvent() {

    var billTotal = 0;

    function calBill(string) {
        var billString = string.split(",");
        for (var i = 0; i < billString.length; i++) {
            var billItem = billString[i].trim();
            if (billItem === "call") {
                billTotal += 2.75;
            }
            else if (billItem === "sms") {
                billTotal += 0.75;
            }

        }

    }
    function myBill() {
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
        myBill,
        levels

    }
}
