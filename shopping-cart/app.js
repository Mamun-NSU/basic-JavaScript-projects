function updateCaseNumber(isIncreasing){
    const caseInput = document.getElementById('case-number');
   let caseNumber = caseInput.value;

   if(isIncreasing){
    caseNumber = parseInt(caseNumber) + 1;
   }else if(caseNumber > 0){
    caseNumber = parseInt(caseNumber) - 1;
   }
   caseInput.value = caseNumber;

//    update case total price
   const caseTotal = document.getElementById('case-total');
   caseTotal.innerText = caseNumber *59;
}

document.getElementById('case-plus').addEventListener('click', function(){
    // let caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) + 1;
   updateCaseNumber(true);
   
});

document.getElementById('case-minus').addEventListener('click', function(){
    // let caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) -1;
    updateCaseNumber(false);
})

