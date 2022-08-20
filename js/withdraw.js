// Working With Collecting Money To My Balance
document.getElementById("submitCollecting").addEventListener("click", function () {
    // get the collect money input field
    const collectMoneyInputField = document.getElementById("collectingMoneyInput");
    // get the collect money input field value as a string
    const collectMoneyInputFieldValueString = collectMoneyInputField.value;
    // get the collect money input field value as a floating
    const collectingMoney = parseFloat(collectMoneyInputFieldValueString);
    // clear the value
    collectMoneyInputField.value = "";

    /* add the collect money to the collect total */

    const currentCollectTotal = document.getElementById("collectingTotal");
    // get the current collecting as a string
    const currentCollectTotalString = currentCollectTotal.innerText;
    // get the current collecting  as a float value
    const currentCollectTotalFloat = parseFloat(currentCollectTotalString);
    // calculate the total collecting money
    const totalCollectingMoney = collectingMoney + currentCollectTotalFloat;
    // add to the total collecting
    currentCollectTotal.innerText = totalCollectingMoney;

    /* Reduce Money to the Balance */

    // reduce the collecting money to the balance
    const currentBalance = document.getElementById("balanceTotal");
    // get the current balance as a string
    const currentBalanceString = currentBalance.innerText;
    // get the current balance  as a float value
    const currentBalancefloat = parseFloat(currentBalanceString);
    // calculate the total balance money
    const totalBalance = currentBalancefloat - totalCollectingMoney;
    // add to the total balance
    currentBalance.innerText = totalBalance;
});
