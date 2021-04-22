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
            return cTotal;
        }
        function radioSms(){
            return sTotal;
        }
        function radioT(){
            return radioTotal;
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