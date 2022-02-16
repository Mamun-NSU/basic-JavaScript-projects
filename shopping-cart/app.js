function updateProductNumber(product, price, isIncreasing){
    const caseInput = document.getElementById(product+'-number');
   let productNumber = caseInput.value;

   if(isIncreasing){
    productNumber = parseInt(productNumber) + 1;
   }else if(productNumber > 0){
    productNumber = parseInt(productNumber) - 1;
   }
   caseInput.value = productNumber;

//    update case total price
   const caseTotal = document.getElementById(product+'-total');
   caseTotal.innerText = productNumber *price;
}
// phone update information
document.getElementById('phone-plus').addEventListener('click', function(){
   /*  const phoneInput = document.getElementById('phone-number');
    const phoneNumber = phoneInput.value;
    phoneInput.value = parseInt(phoneNumber) +1; */
    updateProductNumber('phone', 1219, true);
});

document.getElementById('phone-minus').addEventListener('click', function(){
    /* const phoneInput = document.getElementById('phone-number');
    const phoneNumber = phoneInput.value;
    phoneInput.value = parseInt(phoneNumber) - 1; */

    updateProductNumber('phone', 1219, false);
})

// case update informations
document.getElementById('case-plus').addEventListener('click', function(){
    /* let caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) + 1; */
   
   updateProductNumber('case', 59, true);
   
});

document.getElementById('case-minus').addEventListener('click', function(){
    /* let caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) -1; */
   updateProductNumber('case', 59, false);
})

