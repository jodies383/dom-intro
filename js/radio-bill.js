// get a reference to the sms or call radio buttons
var myCallTotal = document.querySelector(".callTotalTwo")
var mySmsTotal = document.querySelector(".smsTotalTwo")
var billTotal = document.querySelector(".totalTwo")


//get a reference to the add button

var radioBillAddBtn = document.querySelector(".radioBillAddBtn");

//create a variable that will keep track of the total bill


// var cTotal = 0;
// var sTotal = 0;


//add an event listener for when the add button is pressed
let radioRef = radioBill();

radioBillAddBtn.addEventListener("click", clickRadioBill);

function clickRadioBill() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked").value;
   
    radioRef.calcRadio(checkedRadioBtn);

    myCallTotal.innerHTML = radioRef.radioCall();
    mySmsTotal.innerHTML = radioRef.radioSms();
    billTotal.innerHTML = radioRef.radioT();
   
    // if (checkedRadioBtn === "call") {
    //     // billItemType will be 'call' or 'sms'{
    //         cTotal += 2.75;
    //     }
    //     else if (checkedRadioBtn === "sms") {
    //         sTotal += 0.75;
    //     }
    //     myCallTotal.innerHTML = cTotal.toFixed(2);
    //     mySmsTotal.innerHTML = sTotal.toFixed(2);
    //     var myTotalCost = cTotal + sTotal;
    //     billTotal.innerHTML = myTotalCost.toFixed(2);

    //     if (myTotalCost >= 50){
    //         // adding the danger class will make the text red
    //         billTotal.classList.add("danger");
    //     }
    //     else if (myTotalCost >= 30){
    //         billTotal.classList.add("warning");
    //     }
 
}
    

    

    


//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
