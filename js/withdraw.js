// Working With Collecting Money To My Balance
document
    .getElementById("submitCollecting")
    .addEventListener("click", function () {
        // get the collect money input field
        const collectingMoney = getInputField("collectingMoneyInput");

        /* add the collect money to the collect total */
        const totalMoney = addTheSavingOrCollectingArea(
            "collectingTotal",
            collectingMoney
        );

        /* Reduce Money to the Balance */
        TotalBalanceMoney("balanceTotal", totalMoney, false);
    });
