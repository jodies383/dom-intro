function calculateBillEvent() {



    function calBill(string) {
        let billTotal = 0;
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

    return {
        calBill,

    }
}

