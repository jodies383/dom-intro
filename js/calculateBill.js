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


    // function levels() {
    //     if ((billTotal) >= 30) {
    //         return ("danger")
    //     }
    //     else if ((billTotal) >= 20) {
    //         return ("warning")
    //     }

    // }
    // function removeCrit() {
    //     if ((billTotal) <= 30) {
    //         return ("danger")
    //     }
    // }
    // function removeWarn() {
    //     if ((billTotal) <= 20) {
    //         return ("warning")
    //     }
    // }

return {
    calBill,
    // levels,
    // removeCrit,
    // removeWarn

}
}

