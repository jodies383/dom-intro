function calculateBillEvent() {

    let billTotal = 0;

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
        
        return billTotal.toFixed(2);

    }


    function levels() {
        if ((billTotal) >= 30) {
            return ("danger")
        }
        else if ((billTotal) >= 20) {
            return ("warning")
        }

    }
    function removeLevels() {
        if ((billTotal) <= 30) {
            return billTotal;
        }
        else if ((billTotal) <= 20) {
            return billTotal;
        }
    }
    return {
        calBill,
        levels,
        removeLevels

    }
}
