/* step-1: */
document.getElementById('btn-withdraw').addEventListener('click',function(){
    /* step-2: */
    const withdrawField1 = document.getElementById('withdraw-field');
    const withdrawFieldSet = withdrawField1.value;
    const withdrawFieldSetString = parseFloat(withdrawFieldSet);

        // step-7
        withdrawField1.value = '';
     /* step-3 */
        const TotalWithdrawField = document.getElementById('withdraw-total');
        const previousTotalWithdrawString = TotalWithdrawField.innerText;
        const previousWithdrawTotal1 = parseFloat(previousTotalWithdrawString);
  
        
        /* step-5 */
        const MainTotal = document.getElementById('balance-total');
        const MainTotalin = MainTotal.innerText;
        const MainTotalinString = parseFloat(MainTotalin);

        if(withdrawFieldSetString > MainTotalinString) {
            alert('bap er bank e taka nai ');
            return;
        }


          /* step-4: */
          const currentWithdrawTotal1 = previousWithdrawTotal1 + withdrawFieldSetString;
          TotalWithdrawField.innerText = currentWithdrawTotal1;


        const MainTotalBalance = MainTotalinString - withdrawFieldSetString;
        MainTotal.innerText = MainTotalBalance;
        
        







  


        
        
        

        
        

        

})
