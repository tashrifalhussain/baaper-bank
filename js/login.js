//step1 :add even handelar in the submit btn
document.getElementById('btn-submit').addEventListener('click',function(){
//  step2 : get the email address inside the email input failed
// alawys remember to use .value to get text from an input field
const emailField=document.getElementById('user-email');
const email=emailField.value;

// step-3:get password
// set a:set id in html
// set b:get the element
// set c:get the .value in the element
const passwordFieled=document.getElementById('user-password');
const password=passwordFieled.value;

// Danger: do not verify email password on the client side
// step 4.ay vabe kora uchit na client side a tau korsi sto manush tai.varify email and password
if(email==='tashrifpranto@gamil.com' && password==='pranto005'){
    window.location.href='bank.html';
}
else{
   alert('Incorrect Email or Password');
}
    });
    

    