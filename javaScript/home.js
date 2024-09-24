
document.getElementById('nav-blog-button').addEventListener('click', function(){
    ShowSomethingById('blog-main-html')
})

document.getElementById('donation-btn').addEventListener('click', function(){
    ShowSomethingById('donation-card-main')
})

document.getElementById('btn-history').addEventListener('click', function(){
    ShowSomethingById('transaction-container');
})







const modalId1 = document.getElementById('my_modal_1');
document.getElementById('card-one-main-btn').addEventListener('click', function(){

    const firstField = getInputFieldValueId('card-one-input-field');

    if(isNaN(firstField) || firstField === "" || firstField < 1){
        alert('Provide valid number')
        return ;
    }

    const addedAmountToNumber = getAddedAmountValueById('donation-added-amount')
    const totalBalance = addedAmountToNumber + firstField;
    document.getElementById('donation-added-amount').innerText = totalBalance;


    const mainAccount = getMinusFigure('minus-Amount')
    const newMinusAmount = mainAccount - firstField;
    if (newMinusAmount >= 0) {
       document.getElementById('minus-Amount').innerText = newMinusAmount;


    //    Transaction history
        const p = document.createElement('p');
        p.innerText = `Added: ${firstField} Tk. Balance ${newMinusAmount}`
        console.log(p)
        document.getElementById('transaction-added').appendChild(p)
        

    } else {
        alert('Insufficient balance');
        return;
    }
    modalId1.showModal();
})





const modalId2 = document.getElementById('my_modal_1');
document.getElementById('card-two-main-btn').addEventListener('click', function(){

    const secondField = getInputFieldValueId('input-field-two');

    if(isNaN(secondField) || secondField === "" || secondField < 1){
        alert('Provide valid number')
        return ;
    }

    const addedAmountToNumber = getAddedAmountValueById('added-amount')
    const totalBalance = addedAmountToNumber + secondField;
    document.getElementById('added-amount').innerText = totalBalance;


    const mainAccount = getMinusFigure('minus-Amount')
    const newMinusAmount = mainAccount - secondField;
    if (newMinusAmount >= 0) {
       document.getElementById('minus-Amount').innerText = newMinusAmount;
    } else {
        alert('Insufficient balance');
        return;
    }
    modalId2.showModal();
})




const modalId3 = document.getElementById('my_modal_1');
document.getElementById('card-three-main-btn').addEventListener('click', function(){

    const thirdField = getInputFieldValueId('third-input-field');

    if(isNaN(thirdField) || thirdField === "" || thirdField < 1){
        alert('Provide valid number')
        return ;
    }

    const inputThirdToNumber = getAddedAmountValueById('third-added-amount')
    const totalBalance = inputThirdToNumber + thirdField;
    document.getElementById('third-added-amount').innerText = totalBalance;


    const mainAccount = getMinusFigure('minus-Amount')
    const newMinusAmount = mainAccount - thirdField;
    if (newMinusAmount >= 0) {
       document.getElementById('minus-Amount').innerText = newMinusAmount;
    } else {
        alert('Insufficient balance');
        return;
    }
    modalId3.showModal();


})



