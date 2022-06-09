function change(){
    var pass_1 = document.getElementById('pass_1');
    if(pass_1.type == "password"){
        pass_1.type = 'text';
    }
    else{
        pass_1.type = 'password'
    }
    var pass_2 = document.getElementById('pass_2');
    if(pass_2.type == "password"){
        pass_2.type = 'text';
    }
    else{
        pass_2.type = 'password'
    }
}

function change_2(){
    var pass_3 = document.getElementById('pass_3');
    if(pass_3.type == "password"){
        pass_3.type = 'text';
    }
    else{
        pass_3.type = 'password'
    }
}

function slide(){
    var pass_3 = document.getElementById('SignupForm');
    pass_3.style.marginLeft = '0px';
    pass_3.style.opacity = '100%';

    var pass_5 = document.getElementById('SigninForm');
    pass_5.style.marginLeft = '-100%';
    pass_5.style.opacity = '0%';
}


function slide_1(){
    var pass_4 = document.getElementById('SignupForm');
    pass_4.style.marginLeft = '100%';
    pass_4.style.opacity = '0%';
    var pass_6 = document.getElementById('SigninForm');
    pass_6.style.marginLeft = '0';
    pass_6.style.opacity = '100%';
}

var pass_3 = document.getElementById('SignupForm');
var pass_5 = document.getElementById('SigninForm');
var pass_4 = document.getElementById('SignupForm');

var pass_8 = document.querySelector('label.login');
var pass_9 = document.querySelector('label.signup');

var pass_6 = document.getElementById('SigninForm');

var pass_7 = document.querySelector('a.SigninLink').addEventListener("click",e => {
    e.preventDefault;
    pass_4.style.marginLeft = '100%';
    pass_4.style.opacity = '0%';
    pass_6.style.marginLeft = '0';
    pass_6.style.opacity = '100%';
    pass_8.click();
})

var pass_10 = document.querySelector('a.SignupLink').addEventListener("click",e => {
    e.preventDefault;
    pass_5.style.marginLeft = '-100%';
    pass_5.style.opacity = '0%';
    pass_3.style.marginLeft = '0px';
    pass_3.style.opacity = '100%';
    pass_9.click();
})

const isValidEmail = email_2 => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email_2).toLowerCase());
}

var error_4 = document.querySelector('.error_4');
var error_5 = document.querySelector('.error_5');

var border_1 = document.querySelector('.Email_Frame_2 input');
var border_2 = document.querySelector('.Password_Frame_3 input');

// var icon_1 = document.querySelector('.Attention_1');

var error_6 = document.querySelector('.error_6');

document.querySelector('.Button_Frame_2').onclick = function(){
    var email_2 = document.getElementById('email_2').value;
    var password_3 = document.getElementById('pass_3').value;
    
    if(email_2 == ""){
        if (password_3 == "")
        {
            error_4.style.opacity = '100%';
            error_5.style.opacity = '0%';
            error_6.style.opacity = '100%';
            border_1.style.border = '1px solid #F12A2A';
            border_2.style.border = '1px solid #F12A2A';
            return false
        }
        else
        {
            error_4.style.opacity = '100%';
            error_5.style.opacity = '0%';
            error_6.style.opacity = '0%';
            border_1.style.border = '1px solid #F12A2A';
            border_2.style.border = '';
            return false
        }
    }
    
    else if(!isValidEmail(email_2)){
        if (password_3 == "")
        {
        error_5.style.opacity = '100%';
        error_4.style.opacity = '0%';
        error_6.style.opacity = '100%';
        border_1.style.border = '1px solid #F12A2A';
        border_2.style.border = '1px solid #F12A2A';
        return false
        }
        else
        {
            error_5.style.opacity = '100%';
            error_4.style.opacity = '0%';
            error_6.style.opacity = '0%';
            border_1.style.border = '1px solid #F12A2A';
            border_2.style.border = '';
            return false 
        }
    }
    else if(password_3 == ""){
        if (email_2 == "")
        {
            error_4.style.opacity = '100%';
            error_5.style.opacity = '0%';
            error_6.style.opacity = '100%';
            border_1.style.border = '1px solid #F12A2A';
            border_2.style.border = '1px solid #F12A2A';
            return false
        }
        else
        {
            error_4.style.opacity = '0%';
            error_5.style.opacity = '0%';
            error_6.style.opacity = '100%';
            border_1.style.border = '';
            border_2.style.border = '1px solid #F12A2A';
            return false
        }
    }
    else {
        error_4.style.opacity = '0%';
        error_5.style.opacity = '0%';
        error_6.style.opacity = '0%';
        border_1.style.border = '';
        border_2.style.border = '';
        return true
    }
}

var error_1 = document.querySelector('.error_1');
var error_2 = document.querySelector('.error_2');

var error_3 = document.querySelector('.error_3');
var error_7 = document.querySelector('.error_7');

var error_8 = document.querySelector('.error_8');
var border_5 = document.querySelector('.Password_Frame_2 input');

var border_3 = document.querySelector('.Email_Frame input');
var border_4 = document.querySelector('.Password_Frame_1 input');

var error_9 = document.querySelector('.error_9');
var border_5 = document.querySelector('.Password_Frame_2 input');

document.querySelector('.Button_Frame').onclick = function(){
    var email_1 = document.getElementById('email_1').value;
    var password_1 = document.getElementById('pass_1').value;
    var password_2 = document.getElementById('pass_2').value;


    if(email_1 == "")
    {
        if (password_1 == "")
        {
            error_1.style.opacity = '100%';
            error_2.style.opacity = '0%';
            error_3.style.opacity = '100%';
            error_7.style.opacity = '0%';
            border_3.style.border = '1px solid #F12A2A';
            border_4.style.border = '1px solid #F12A2A';
            if(password_2 == "")
            {
                error_8.style.opacity = '100%';
                error_9.style.opacity = '0%';
                border_5.style.border = '1px solid #F12A2A';
                return false
            }
            else if(password_2 != password_1) {
                error_9.style.opacity = '100%';
                error_8.style.opacity = '0%';
                border_5.style.border = '1px solid #F12A2A';
                return false
            }
            else{
                error_8.style.opacity = '0%';
                border_5.style.border = '';
                error_9.style.opacity = '0%';
            }
            return false
        }
        else if(password_1.length < 8){
            error_1.style.opacity = '100%';
            error_2.style.opacity = '0%';
            error_3.style.opacity = '0%';
            error_7.style.opacity = '100%';
            border_3.style.border = '1px solid #F12A2A';
            border_4.style.border = '1px solid #F12A2A';
            if(password_2 == "")
            {
                error_8.style.opacity = '100%';
                error_9.style.opacity = '0%';
                border_5.style.border = '1px solid #F12A2A';
                return false
            }
            else if(password_2 != password_1) {
                error_9.style.opacity = '100%';
                error_8.style.opacity = '0%';
                border_5.style.border = '1px solid #F12A2A';
                return false
            }
            else{
                error_8.style.opacity = '0%';
                border_5.style.border = '';
                error_9.style.opacity = '0%';
            }
            return false
        }
        else
        {
            error_1.style.opacity = '100%';
            error_2.style.opacity = '0%';
            error_3.style.opacity = '0%';
            error_7.style.opacity = '0%';
            border_3.style.border = '1px solid #F12A2A';
            border_4.style.border = '';
            error_8.style.opacity = '0%';
            border_5.style.border = '';
            if(password_2 == "")
            {
                error_8.style.opacity = '100%';
                error_9.style.opacity = '0%';
                border_5.style.border = '1px solid #F12A2A';
                return false
            }
            else if(password_2 != password_1) {
                error_9.style.opacity = '100%';
                error_8.style.opacity = '0%';
                border_5.style.border = '1px solid #F12A2A';
                return false
            }
            else{
                error_8.style.opacity = '0%';
                border_5.style.border = '';
                error_9.style.opacity = '0%';
            }
            return false
        }
    }
    else if(!isValidEmail(email_1)){
        if (password_1 == "")
        {
        error_1.style.opacity = '0%';
        error_2.style.opacity = '100%';
        error_3.style.opacity = '100%';
        error_7.style.opacity = '0%';
        border_3.style.border = '1px solid #F12A2A';
        border_4.style.border = '1px solid #F12A2A';
        if(password_2 == "")
        {
            error_8.style.opacity = '100%';
            error_9.style.opacity = '0%';
            border_5.style.border = '1px solid #F12A2A';
            return false
        }
        else if(password_2 != password_1) {
            error_9.style.opacity = '100%';
            error_8.style.opacity = '0%';
            border_5.style.border = '1px solid #F12A2A';
            return false
        }
        else{
            error_8.style.opacity = '0%';
            border_5.style.border = '';
            error_9.style.opacity = '0%';
        }
        return false
        }
        else if(password_1.length < 8){
            error_1.style.opacity = '0%';
            error_2.style.opacity = '100%';
            error_3.style.opacity = '0%';
            error_7.style.opacity = '100%';
            border_3.style.border = '1px solid #F12A2A';
            border_4.style.border = '1px solid #F12A2A';
            if(password_2 == "")
            {
                error_8.style.opacity = '100%';
                border_5.style.border = '1px solid #F12A2A';
                error_9.style.opacity = '0%';
                return false
            }
            else if(password_2 != password_1) {
                error_9.style.opacity = '100%';
                error_8.style.opacity = '0%';
                border_5.style.border = '1px solid #F12A2A';
                return false
            }
            else{
                error_8.style.opacity = '0%';
                border_5.style.border = '';
                error_9.style.opacity = '0%';
            }
            return false
        }
        else
        {
            error_1.style.opacity = '0%';
            error_2.style.opacity = '100%';
            error_3.style.opacity = '0%';
            error_7.style.opacity = '0%';
            border_3.style.border = '1px solid #F12A2A';
            border_4.style.border = '';
            if(password_2 == "")
            {
                error_8.style.opacity = '100%';
                border_5.style.border = '1px solid #F12A2A';
                error_9.style.opacity = '0%';
                return false
            }
            else if(password_2 != password_1) {
                error_9.style.opacity = '100%';
                error_8.style.opacity = '0%';
                border_5.style.border = '1px solid #F12A2A';
                return false
            }
            else{
                error_8.style.opacity = '0%';
                border_5.style.border = '';
                error_9.style.opacity = '0%';
            }
            return false 
        }
    }
    else if(password_1 == ""){
        if (email_1 == "")
        {
            error_1.style.opacity = '100%';
            error_2.style.opacity = '0%';
            error_3.style.opacity = '100%';
            error_7.style.opacity = '0%';
            border_3.style.border = '1px solid #F12A2A';
            border_4.style.border = '1px solid #F12A2A';
            if(password_2 == "")
            {
                error_8.style.opacity = '100%';
                error_9.style.opacity = '0%';
                border_5.style.border = '1px solid #F12A2A';
                return false
            }
            else if(password_2 != password_1) {
                error_9.style.opacity = '100%';
                error_8.style.opacity = '0%';
                border_5.style.border = '1px solid #F12A2A';
                return false
            }
            else{
                error_8.style.opacity = '0%';
                border_5.style.border = '';
                error_9.style.opacity = '0%';
            }
            return false
        }
        
        else
        {
            error_1.style.opacity = '0%';
            error_2.style.opacity = '0%';
            error_3.style.opacity = '100%';
            error_7.style.opacity = '0%';
            border_3.style.border = '';
            border_4.style.border = '1px solid #F12A2A';
            if(password_2 == "")
            {
                error_8.style.opacity = '100%';
                error_9.style.opacity = '0%';
                border_5.style.border = '1px solid #F12A2A';
                return false
            }
            else if(password_2 != password_1) {
                error_9.style.opacity = '100%';
                error_8.style.opacity = '0%';
                border_5.style.border = '1px solid #F12A2A';
                return false
            }
            else{
                error_8.style.opacity = '0%';
                border_5.style.border = '';
                error_9.style.opacity = '0%';
            }
            return false
        }
    }
    else if(password_1.length < 8){
        if (email_1 == "")
        {
            error_1.style.opacity = '100%';
            error_2.style.opacity = '0%';
            error_3.style.opacity = '0%';
            error_7.style.opacity = '100%';
            border_3.style.border = '1px solid #F12A2A';
            border_4.style.border = '1px solid #F12A2A';
            if(password_2 == "")
            {
                error_8.style.opacity = '100%';
                error_9.style.opacity = '0%';
                border_5.style.border = '1px solid #F12A2A';
                return false
            }
            else if(password_2 != password_1) {
                error_9.style.opacity = '100%';
                error_8.style.opacity = '0%';
                border_5.style.border = '1px solid #F12A2A';
                return false
            }
            else{
                error_8.style.opacity = '0%';
                border_5.style.border = '';
                error_9.style.opacity = '0%';
            }
            return false
        }
        else
        {
            error_1.style.opacity = '0%';
            error_2.style.opacity = '0%';
            error_3.style.opacity = '0%';
            error_7.style.opacity = '100%';
            border_3.style.border = '';
            border_4.style.border = '1px solid #F12A2A';
            if(password_2 == "")
            {
                error_8.style.opacity = '100%';
                error_9.style.opacity = '0%';
                border_5.style.border = '1px solid #F12A2A';
                return false
            }
            else if(password_2 != password_1) {
                error_9.style.opacity = '100%';
                error_8.style.opacity = '0%';
                border_5.style.border = '1px solid #F12A2A';
                return false
            }
            else{
                error_8.style.opacity = '0%';
                border_5.style.border = '';
                error_9.style.opacity = '0%';
            }
            return false
        }
    }    
    else
    {
        error_1.style.opacity = '0%';
        error_2.style.opacity = '0%';
        error_3.style.opacity = '0%';
        error_7.style.opacity = '0%';
        border_3.style.border = '';
        border_4.style.border = '';
        if(password_2 == "")
        {
            error_8.style.opacity = '100%';
            error_9.style.opacity = '0%';
            border_5.style.border = '1px solid #F12A2A';
            return false
        }
        else if(password_2 != password_1) {
            error_9.style.opacity = '100%';
            error_8.style.opacity = '0%';
            border_5.style.border = '1px solid #F12A2A';
            return false
        }
        else{
            error_8.style.opacity = '0%';
            border_5.style.border = '';
            error_9.style.opacity = '0%';
        }
        return true
    }
}

const isValidEmail_2 = email_1 => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email_1).toLowerCase());
}