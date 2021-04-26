function radioBill() {


    var cTotal = 0;
    var sTotal = 0;
    var radioTotal = 0;

    function calcRadio(checkedRadioBtn) {
        
        if (checkedRadioBtn === "call") {
            
            cTotal += 2.75,
            radioTotal += 2.75;
        }
        else if (checkedRadioBtn === "sms") {
            sTotal += 0.75,
            radioTotal += 0.75;
        }
    }
        function radioCall(){
            return cTotal.toFixed(2);
        }
        function radioSms(){
            return sTotal.toFixed(2);
        }
        function radioT(){
            return radioTotal.toFixed(2);
        }
        function radioBillLevels(){
            if ((radioTotal) >= 50){
                return "critical"
            } else if ((radioTotal) >= 30){
                return "warning"
            }
        }
    
    return {
        calcRadio,
        radioCall,
        radioSms,
        radioT,
        radioBillLevels
    }
}