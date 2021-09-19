const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#button-check");
const errorMessage = document.querySelector("#error-message");
// const nextButton = document.querySelector("#next-button");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validate(){
    hideError();
    console.log("check here");
    console.log("bill", billAmount.value);
    console.log("given", cashGiven.value);
    if(billAmount.value > 0)
    {
        if(Number(cashGiven.value) >= Number(billAmount.value))
        {
            const amountToBeReturned = Number(cashGiven.value) - Number(billAmount.value);
            calculateChange(amountToBeReturned);
        }
        else
        {
            showError("Cash given should be atleast equal to Bill Amount.");
        }
    }
    else
    {
        showError("Invalid Bill Amount!");
    }
});

function calculateChange(amountToBeReturned){
    for(var i=0; i<availableNotes.length; i++)
    {
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideError(){
    errorMessage.style.display = "none";
}

function showError(msg){
    errorMessage.style.display = "block";
    errorMessage.innerText= msg;
}







































