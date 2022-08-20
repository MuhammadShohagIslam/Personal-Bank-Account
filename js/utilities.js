// common function
function getInputField(inputField) {
    const moneyInputField = document.getElementById(inputField);
    const moneyInputFieldValueString = moneyInputField.value;
    let moneyInputFieldValue;
    // checking if it is number or text value
    if (
        !isNaN(moneyInputFieldValueString) &&
        moneyInputFieldValueString !== ""
    ) {
        moneyInputFieldValue = parseFloat(moneyInputFieldValueString);
    } else {
        alert("Please Provide Number");
        moneyInputField.value = "";
        return 0;
    }
    moneyInputField.value = "";
    return moneyInputFieldValue;
}

// add money for saving or collecting area
function addTheSavingOrCollectingArea(fieldArea, addingMoney) {
    const currentTotal = document.getElementById(fieldArea);
    const currentTotalString = currentTotal.innerText;
    const currentTotalValue = parseFloat(currentTotalString);
    const totalMoney = addingMoney + currentTotalValue;
    currentTotal.innerText = totalMoney;
}

// adding or reduce money from balance
function TotalBalanceMoney(balanceField, totalMoney, isIncrease) {
    const currentBalance = document.getElementById(balanceField);
    const currentBalanceString = currentBalance.innerText;
    const currentBalanceValue = parseFloat(currentBalanceString);

    let totalBalance;
    if (isIncrease) {
        totalBalance = currentBalanceValue + totalMoney;
    } else {
        if (currentBalanceValue < totalMoney) {
            alert("You Do Not Have Enough Money");
            return 0;
        } else {
            totalBalance = currentBalanceValue - totalMoney;
        }
    }
    currentBalance.innerText = totalBalance;
    return totalBalance;
}
