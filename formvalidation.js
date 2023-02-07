console.log('This is form validation project by me');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validEmail = false;
let validPhone = false;
let validUser = false;
$('#failure').hide();
$('#success').hide();


// console.log(name,email,phone)
name.addEventListener('blur',()=>{
    console.log('name is blurred');
    // validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('Your name is valid.');   
        name.classList.remove('is-invalid');
        validUser = true;
    }
    else{
        console.log('Your name is not valid.');
        name.classList.add('is-invalid');
        validUser = false;
    }
    
    
    
})

email.addEventListener('blur',()=>{
    console.log('email is blurred');
    // validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('Your email is valid.');   
        email.classList.remove('is-invalid')
        validEmail = true;
    }
    else{
        console.log('Your email is not valid.');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

phone.addEventListener('blur',()=>{
    console.log('phone is blurred');
    // validate phone here
    let regex = /^(98)[0-9]{8}$/;
    let str = phone.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('Your phone number is valid.');   
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else{
        console.log('Your phone number is not valid.');
        phone.classList.add('is-invalid');
        validPhone = true;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('You clicked on submit');
    console.log(validEmail,validPhone,validUser);
    
    // Submit your form here
    if(validEmail && validPhone && validUser){
        let failure = document.getElementById('failure');
        console.log('Phone, Email and user are valid. Submitting the form');
        let success = document.getElementById('success');
         success.classList.add('show');
        //  failure.classList.remove('show');
        $('#failure').hide();
        $('#success').show();
        name.value = "";
        email.value = "";
        phone.value = "";
    }
    else{
        console.log('One of Email, Phone or Username are not valid. hence not submitting the form. Please correct the errors and try again.');
        let failure = document.getElementById('failure');
         failure.classList.add('show');
        //  success.classList.remove('show');
        $('#success').hide();
        $('#failure').show();
    }
    
    
})

