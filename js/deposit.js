// Working With Saving Money To My Balance
document.getElementById("submitSaving").addEventListener("click", function () {
    // get saving money from the input field as value
    const savingMoney = getInputField("savingMoneyInput");

    /* add the saving money to the saving total */
    addTheSavingOrCollectingArea("savingTotal", savingMoney);

    /* Add Money to the Balance */
    TotalBalanceMoney("balanceTotal", savingMoney, true);
});
