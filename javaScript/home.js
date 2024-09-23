
// document.getElementById('btn-history').addEventListener('click', function(){
//     window.location.href = 'history.html'
// })



// document.getElementById('nav-blog-button').addEventListener('click', function(){
//     window.location.href = 'blog.html'
    
// })




const addedAmount = document.getElementById('donation-added-amount')



document.getElementById('card-one-main-btn').addEventListener('click', function(){

    const inputFieldMoney = getInputFieldValueId('card-one-input-field') ;


    if(isNaN(inputFieldMoney) || inputFieldMoney === "" ){
        alert('Please write valid number');
    }
    else{
    
    
        const fieldToNumber = getAddedAmountValueById('donation-added-amount');
        const TotalAmount = fieldToNumber + inputFieldMoney;
        document.getElementById('donation-added-amount').innerText = TotalAmount;
        
        const minusFunction = getMinusFigure('minus-Amount');
        const totalMinusAmount = minusFunction - inputFieldMoney;
        document.getElementById('minus-Amount').innerText = totalMinusAmount;
        
    }
})