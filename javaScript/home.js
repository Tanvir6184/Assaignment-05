
document.getElementById('btn-history').addEventListener('click', function(){
    window.location.href = 'history.html'
})



document.getElementById('nav-blog-button').addEventListener('click', function(){
    window.location.href = 'blog.html'
    
})



// top two button color 
function changeButtonColor(clickedButton){
    const button = document.querySelectorAll('.btn');
    button.forEach((button) =>  {
    button.classList.remove('bg-yellow-600')
    button.classList.add(button.getAttribute('data-original-color'))
})

}





// const addedAmount = document.getElementById('donation-added-amount')



document.getElementById('card-one-main-btn').addEventListener('click', function(){

    const modal = my_modal_1.showModal()
    console.log(modal)

    const inputFieldMoney = getInputFieldValueId('card-one-input-field') ;
    const minus = getMinusFigure ('minus-Amount')
    


    if(isNaN(inputFieldMoney) || inputFieldMoney === "" || inputFieldMoney < 1 || minus < 0 ){
        alert('Provide valid number');
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



document.getElementById('card-two-main-btn').addEventListener('click', function(){

    const secondInputField = getInputFieldValueId('input-field-two')
    const minus = getMinusFigure('minus-Amount')

    if(isNaN(secondInputField) ||  secondInputField === "" || secondInputField < 1 || minus < 0 ){
        alert('Provide valid number')
    }
    else{
        const inputNumberTwo = getAddedAmountValueById('added-amount');
        const totalAddedAmount = secondInputField + inputNumberTwo;
        document.getElementById('added-amount').innerText = totalAddedAmount;


        const mainAccount = getMinusFigure('minus-Amount');
        const totalMinusAmount = mainAccount - secondInputField;
        document.getElementById('minus-Amount').innerText = totalMinusAmount;
    }
})



document.getElementById('card-three-main-btn').addEventListener('click', function(){

    const thirdField = getInputFieldValueId('third-input-field');

    if(isNaN(thirdField) || thirdField === "" || thirdField < 1){
        alert('Provide valid number')
    }

    const inputThirdToNumber = getAddedAmountValueById('third-added-amount')
    const totalBalance = inputThirdToNumber + thirdField;
    document.getElementById('third-added-amount').innerText = totalBalance;

    const mainAccount = getMinusFigure('minus-Amount')
    const totalMinusAmount = mainAccount - thirdField;
    document.getElementById('minus-Amount').innerText = totalMinusAmount;
})