window.onload = function() {

    // Email validation

    var emailValid = document.getElementById('email');
    var emailExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    emailValid.onblur = function() {
        var emailCharValid =  emailExpression.test(emailValid.value);
        if (emailCharValid == true) {
            emailValid.classList.add('green-border');
        } else {
            emailValid.classList.add('red-border');
        }
    }

    emailValid.onfocus = function() {
        emailValid.classList.remove('red-border', 'green-border');
    }

    // Password validation

    var passwordValid = document.getElementById('password');
    var passwordExpression = /^["a-zA-Z"0-9]{8,20}$/;

    passwordValid.onblur = function() {
        var passwordCharValid = passwordExpression.test(passwordValid.value);
        if (passwordCharValid == true) {
            passwordValid.classList.add('green-border');
        } else {
            passwordValid.classList.add('red-border');
        }
    }

    passwordValid.onfocus = function() {
        passwordValid.classList.remove('red-border', 'green-border');
    }

    // Button validation
    var buttonLogin = document.getElementById('button');

    buttonLogin.addEventListener('click',  function loginBtn(e) {
        e.preventDefault();
        
        if (emailExpression.test(emailValid.value) && passwordExpression.test(passwordValid.value)) {
            alert('Email: ' + emailValid.value + '\n' + 'Password: ' + passwordValid.value);
        } else if (emailExpression.test(emailValid.value) && !passwordExpression.test(passwordValid.value)) {
            alert('Password incorrect');
        } else if (!emailExpression.test(emailValid.value) && passwordExpression.test(passwordValid.value)) {
            alert('Email incorrect');
        } else if (!emailExpression.test(emailValid.value) && !passwordExpression.test(passwordValid.value)) {
            alert('Email & Password incorrect')
        }
    });
}