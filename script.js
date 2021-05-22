const form=document.getElementById('form'); 
const username=document.getElementById('username'); 
const email=document.getElementById('email'); 
const password=document.getElementById('password'); 
const password2=document.getElementById('password2'); 




//functions
function showError(input,message)
{
    const formControl=input.parentElement;
    formControl.className="form-control error";
const small=formControl.querySelector('small');
small.innerText=message;
}
function showSuccess(input)
{
    const formControl=input.parentElement;
    formControl.className='form-control success';
    
}


//event listeners

form.addEventListener('submit',function(e){

    e.preventDefault();
// console.log('submit');    /*generally it is used to prevent submiy ,  when one click on submit button  */

if(username.value === '')
{
    showError(username,"usernaem is required");
    

}
else{
    showSuccess(username);

}

// console.log(username);
// console.log(username.value);
});