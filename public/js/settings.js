const isValidEmail = email_enter => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email_enter).toLowerCase());
}

document.querySelector('.ButtonSave').onclick = function(){
    var email_enter = document.getElementById('email_enter').value;
    var border_1 = document.querySelector('.EmailEnter input');
    var error_1 = document.querySelector('.error_1');
    var error_2 = document.querySelector('.error_2');

    if(email_enter == ""){
        error_1.style.opacity = '100%';
        error_2.style.opacity = '0%';
        border_1.style.border = '1px solid #F12A2A';
        return false
    }
    else if(!isValidEmail(email_enter))
    {
        error_1.style.opacity = '0%';
        error_2.style.opacity = '100%';
        border_1.style.border = '1px solid #F12A2A';
        return false 
    }
    else {
        error_1.style.opacity = '0%';
        error_2.style.opacity = '0%';
        border_1.style.border = '';
        return true
    }
}