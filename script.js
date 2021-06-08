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
 
//checking email is valid or not 
function checkEmail(input)
{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(input).toLowerCase());
    if(re.test(input.value.trim()))
    {
        showSuccess(input);

    }
    else{

        showError(input,"email is not valid ");

    }

}

// checking input length with the help of function we formed 
function checkLength(input, min ,max)
{
    if(input.value.length <min)
    {
        showError(input ,`${getFieldName(input)} must be at last ${min} characters`)

    }
    else if(input.value.length > max)
    {
        showError(input ,`${getFieldName(input)} must be at less than  ${max} characters`)
        
    }
    else
    {
        showSuccess(input);
    }
}
// checking required fields 

function checkRequired(inputArr)
{
    inputArr.forEach(function(input) {

            if(input.value.trim()==='')
            {
                // showError(input,`${input.id} is required` );  yaha pe function kyu banaya hoga , as {thi} line is aslo working 
                showError(input,`${getFieldName(input)} is required` );
            }
        // console.log(input.value);
        // console.log(input.id);
        else {
            showSuccess(input); 
        }
    }); 

}

//checking if both the password are  maching or not 
function checkPasswordsMatch(input1, input2)
{
    if(input1.value!== input2.value)
    {
        showError(input2,"password do not matches ")
    }
}
//filename function defining 
function getFieldName(input)
{
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);  
     // number given in slice argument , the new array is formed from that indexx position including elemnt at that index 

}

//event listeners

form.addEventListener('submit',function(e){

    e.preventDefault();

    checkRequired([username,email,password,password2]);
    checkLength(username ,3,15);
    checkLength(password,6,20);
    checkEmail(email);
    checkPasswordsMatch(password,password2);
// console.log('submit');    /*generally it is used to prevent submiy ,  when one click on submit button  */

//  if(username.value === '')
// {
//     showError(username,"username is required");
    

// }
// else{ 
//     showSuccess(username);

// }
// if(email.value === '')
// {
//     showError(email,"email is required");
    

// } else if(!isValidEmail(email.value)) 
// {
//     showError(email,"email is not valid ")

// }
// else{ 
//     showSuccess(email);

// }

// if(password.value === '')
// {
//     showError(password,"password is required");
    

// }
// else{ 
//     showSuccess(password);

// }
// if(password2.value === '')
// {
//     showError(password2,"password2 is required");
    

// }
// else{ 
//     showSuccess(password2);

// }

// above style is become messy if we uses morer types of input fileds , so we are using checkrequired 


// console.log(username);
// console.log(username.value);
});