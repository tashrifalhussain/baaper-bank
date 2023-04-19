// step1:add event listener to the deposite btn
document.getElementById('btn-deposite').addEventListener('click',function(){
//   step2:get the deposite amount from input field
// for input flied always use .value to find input value
const depositeField=document.getElementById('deposite-field');
const newDepositAmountString=depositeField.value;
const  newDepositAmount=parseFloat(newDepositAmountString);
// step3:get the current deposite total
// only input and textarea use .value other use innertext
const depositTotalElement=document.getElementById('deposit-total');

const previousDepositTotalString=depositTotalElement.innerText;
const previousDepositTotal=parseFloat(previousDepositTotalString);
// step4:add number of deposite
const currentDepositTotal=newDepositAmount+ previousDepositTotal;




depositTotalElement.innerText= currentDepositTotal;
// step:5get balance current total
const balanceTotalElement=document.getElementById('balace-total');
const previousBalanceTotalString=balanceTotalElement.innerText;
const previousBalanceTotal=parseFloat(previousBalanceTotalString);
// st:6calculate current total balance
const currentBalanceTotal=newDepositAmount+ previousBalanceTotal;
// set the balance total
balanceTotalElement.innerText=currentBalanceTotal;

// clear the input /deposite field
depositeField.value = '';
});
