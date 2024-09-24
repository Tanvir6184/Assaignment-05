
function getInputFieldValueId(id){
 const moneyAddedBtn = document.getElementById(id).value;
 const inputNumber = parseFloat(moneyAddedBtn);
 return inputNumber;
}



function getAddedAmountValueById(id){
    const addedAmountField = document.getElementById(id).innerText;
    const addedAmountFieldNumber = parseFloat(addedAmountField);
    return addedAmountFieldNumber;
}


function getMinusFigure(id){
    const minusAmountText = document.getElementById(id).innerText;
    const minusAmountNumber = parseFloat(minusAmountText);
    return minusAmountNumber;
}


function ShowSomethingById(id){
    document.getElementById('donation-card-main').classList.add('hidden')
    document.getElementById('blog-main-html').classList.add('hidden')
    document.getElementById('transaction-container').classList.add('hidden')
    

    // Showing history 
    document.getElementById(id).classList.remove('hidden');
}