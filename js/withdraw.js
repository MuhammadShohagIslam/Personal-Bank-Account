// Working With Collecting Money To My Balance
document
    .getElementById("submitCollecting")
    .addEventListener("click", function () {
        // get the collect money input field
        const collectingMoney = getInputField("collectingMoneyInput");

        /* Reduce Money to the Balance */
        const totalBalance = TotalBalanceMoney(
            "balanceTotal",
            collectingMoney,
            false
        );
        console.log(totalBalance);

        if (collectingMoney > totalBalance) {
            return 0;
        } else {
            /* add the collect money to the collect total */
            addTheSavingOrCollectingArea("collectingTotal", collectingMoney);
        }
    });
