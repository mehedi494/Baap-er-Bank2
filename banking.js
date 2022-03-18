const dpsiteBtn = document.getElementById("deposite-btn")

dpsiteBtn.addEventListener("click", function () {
    const inputTxt = document.getElementById("deposite-input-field");
    const dpsiteTxt = document.getElementById("deposite-amount");
    const totalBalanceTxt = document.getElementById("totalBalanceAmount")

    const inputAmount = parseFloat(inputTxt.value)
    console.log(typeof (inputAmount))
    
    if ( typeof(inputAmount) == 'number' && inputAmount>0) {
        dpsiteTxt.innerText = inputAmount

        const oldBalanceTxt = totalBalanceTxt.innerText
        const oldBlcAmount = parseFloat(oldBalanceTxt)
        const newBalance = (oldBlcAmount + inputAmount);
        totalBalanceTxt.innerText = newBalance;
    
    
      
    }
    else {
        window.alert("Please enter valid number")
    }
})

const withdrawbtn = document.getElementById("withdrawbtn")
withdrawbtn.addEventListener("click", function () {
    const inputTxt = document.getElementById("withdraw-input-field");
    const withdrTxt = document.getElementById("withdraw-amount");
    const totalBalanceTxt = document.getElementById("totalBalanceAmount")

    const inputAmount = parseFloat(inputTxt.value)
    // console.log("work")
    
    if ( typeof(inputAmount) == 'number' && inputAmount>0) {
        // console.log('work')
        withdrTxt.innerText = inputAmount
        

        const oldBalanceTxt = totalBalanceTxt.innerText
        const oldBlcAmount = parseFloat(oldBalanceTxt)
        const newBalance = (oldBlcAmount - inputAmount);
        if (newBalance >= 0) {
            totalBalanceTxt.innerText = newBalance;
      }
        else {
            window.alert('Insuffficent amount')
            withdrTxt.innerText = 0
    }
    
      
    }
    else {
        window.alert("Please enter valid number")
    }
})