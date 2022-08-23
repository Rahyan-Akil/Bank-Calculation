// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2: get the deposit amount from the deposit input field
    // For input field use .value to the the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;//deposite input field thake value nisi
    const newDepositAmount = parseFloat(newDepositAmountString); //string thake float e convert korsi 
    
    // step-3: get the current deposit total
    // for non-input(element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total'); //deposite er total amount er id nicchi
    const previousDepositTotalString = depositTotalElement.innerText; //jehetu eita text field tai innertext er value nicchi
    const previousDepositTotal = parseFloat(previousDepositTotalString); //string to float 
    
    // step-4: add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount; //ager value + new value =currentDepositTotal
    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal; //deposit-total id moddhe currentDepositTotal value rakhtasi 

    // step-5: get ballance current total
    const balanceTotalElement = document.getElementById('balance-total'); //ekdom final value tar class nicchi 
    const previousBalanceTotalString = balanceTotalElement.innerText;//string ta k inner text hisabe nicchi then float e convert kortasi 
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount; 
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    // step-7: clear the deposit field
    depositField.value = '';
})