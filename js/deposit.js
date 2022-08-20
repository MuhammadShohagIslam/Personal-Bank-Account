// Working With Saving Money To My Balance
document.getElementById("submitSaving").addEventListener("click", function () {
    // get the saving money input field
    const savingMoneyInputField = document.getElementById("savingMoneyInput");
    // get the saving money input field value as a string
    const savingMoneyInputFieldValueString = savingMoneyInputField.value;
    // get the saving money input field value as a floating
    const savingMoney = parseFloat(savingMoneyInputFieldValueString);
    // clear the value
    savingMoneyInputField.value = "";

    /* add the saving money to the saving total */

    const currentSavingTotal = document.getElementById("savingTotal");
    // get the current saving  as a string
    const currentSavingTotalString = currentSavingTotal.innerText;
    // get the current saving  as a float value
    const currentSavingTotalFloat = parseFloat(currentSavingTotalString);
    // calculate the total saving money
    const totalSavingMoney = savingMoney + currentSavingTotalFloat;
    // add to the total saving
    currentSavingTotal.innerText = totalSavingMoney;

    /* Add Money to the Balance */

    // add the saving money to the balance
    const currentBalance = document.getElementById("balanceTotal");
    // get the current balance as a string
    const currentBalanceString = currentBalance.innerText;
    // get the current balance  as a float value
    const currentBalancefloat = parseFloat(currentBalanceString);
    // calculate the total balance money
    const totalBalance = savingMoney + currentBalancefloat;
    // add to the total balance
    currentBalance.innerText = totalBalance;
});
