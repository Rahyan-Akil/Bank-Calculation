document.getElementById('btn-deposit').addEventListener('click', function(){
        // step-2: get the deposit amount from the deposit input field
        // For input field use .value to the the value inside the input field
        /* const depositField = document.getElementById('deposit-field');
        const newDepositAmountString = depositField.value;//deposite input field thake value nisi
        const newDepositAmount = parseFloat(newDepositAmountString); */ //string thake float e convert korsi 
        const depositField1 = document.getElementById('deposit-field');
        const newDepositAmountString1 = depositField1.value;
        const newDepositAmount1 = parseFloat(newDepositAmountString1);

        const depositTotalElement1 = document.getElementById('deposit-total');
        const previousDepositTotalString = depositTotalElement1.innerText;
        const previousDepositTotal = parseFloat(previousDepositTotalString);


        const currentTotal = previousDepositTotal+newDepositAmount1;
        depositTotalElement1.innerText = currentTotal;

        const totalBalance1 = document.getElementById('balance-total');
        const previousTotalBalanceString = totalBalance1.innerText;
        const previousBalaceTotal1 = parseFloat(previousTotalBalanceString);

        const currentBalanceTotal1 = previousBalaceTotal1 + newDepositAmount1;
        totalBalance1.innerText = currentBalanceTotal1;



        

        
        depositField1.value = '';
})
