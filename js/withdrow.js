// 1.add event handelar with witdraw btn
// 2.get the withdraw amount from the withdraw input field
// get into persefolate
// get previouse withdrwaw total
// stp 1
document.getElementById('btn-withdraw').addEventListener('click',function()
// step2
{
    const withdrowfield= document.getElementById('withdrow-field');
    const newWithdrawString=withdrowfield.value;
    const newWithdrawAmount=parseFloat( newWithdrawString);
    withdrowfield.value='';
    if (isNaN(newWithdrawAmount)) {
        alert('plase provide a valid number');
        return;
    }
// step3
const WithdrawTotalElement=document.getElementById('withdrow-total');
const previouseWithdrawTotalString=WithdrawTotalElement.innerText;
const previouseWithdrawTotal=parseFloat(previouseWithdrawTotalString);

// set5:set total withdraw amount


// step6:minus withdraw blance
const balanceTotalElement=document.getElementById('balace-total');
const previousBalanceTotalString=balanceTotalElement.innerText;
const previousBalanceTotal= parseFloat(previousBalanceTotalString);

if(newWithdrawAmount>previousBalanceTotal){
    alert('baap ar bank a tk nai')
    return;
}

// step4:calculate withdraw total element
const currentWithdrawTotal=  newWithdrawAmount+previouseWithdrawTotal;
WithdrawTotalElement.innerText=currentWithdrawTotal;
const newBlanceTotal=previousBalanceTotal- newWithdrawAmount;
balanceTotalElement.innerText=newBlanceTotal;


// step7:clear the input field


});