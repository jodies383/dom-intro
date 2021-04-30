function BillWithSettings() {
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;

    var callCostTotal = 0;
    var smsCostTotal = 0;

    function setCallCost(callCost) {
        theCallCost = callCost;
    }
    function getCallCost() {
        return theCallCost;

    }
    function setSmsCost(smsCost) {
        theSmsCost = smsCost;
    }
    function getSmsCost() {
        return theSmsCost;

    }

    function setWarningLevel(warningLevel) {
        theWarningLevel = warningLevel;

    }
    function getWarningLevel() {
        return theWarningLevel;
    }

    function setCriticalLevel(criticalLevel) {
        theCriticalLevel = criticalLevel;
    }
    function getCriticalLevel() {
        return theCriticalLevel;
    }

    function makeCall(checked) {
        if (!hasReachedCriticalLevel() && checked === "call") {
            callCostTotal += parseFloat(theCallCost);
        }

    }
    function getTotalCost() {
        return callCostTotal + smsCostTotal;

    }
    function getTotalCallCost() {
        return callCostTotal.toFixed(2);

    }
    function getTotalSmsCost() {
        return smsCostTotal.toFixed(2);

    }
    function sendSms(checked) {

        if (!hasReachedCriticalLevel() && checked === "sms") {
            smsCostTotal += parseFloat(theSmsCost);

        }

    }
    function hasReachedCriticalLevel() {
        return getTotalCost() >= getCriticalLevel();

    }
    function totalClassName() {
        if (hasReachedCriticalLevel()) {
            return ("danger");
        }

        if (getTotalCost() >= getWarningLevel()) {
            return ("warning");
        }
    }
    function removeTotalClassName() {
        if (!hasReachedCriticalLevel()) {
            return ("danger");
        }

        if (getTotalCost() < getWarningLevel()) {
            return ("warning");
        }
    }
    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        makeCall,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        sendSms,
        totalClassName,
        removeTotalClassName
    }
}