window.onload = function() {

    // Email validation

    var emailValid = document.getElementById('email');

    emailValid.onblur = function() {
        var emailExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var emailCharValid =  emailExpression.test(emailValid.value);
        if (emailCharValid == true) {
            emailValid.classList.add('green-border');
            console.log(emailValid.value + ' true');
        } else {
            emailValid.classList.add('red-border');
            console.log(emailValid.value + ' Estas en el Horno');
        }
    }

    emailValid.onfocus = function() {
        emailValid.classList.remove('red-border', 'green-border');
    }

    // Password validation

    var passwordValid = document.getElementById('password');

    passwordValid.onblur = function() {
        var passwordExpression = /^["a-zA-Z"0-9]{8,20}$/; 
        var passwordCharValid = passwordExpression.test(passwordValid.value);
        if (passwordCharValid == true) {
            passwordValid.classList.add('green-border');
            console.log(passwordValid.value + ' true');
        } else {
            passwordValid.classList.add('red-border');
            console.log(passwordValid.value + ' Eso esta malo');
        }
    }

    passwordValid.onfocus = function() {
        passwordValid.classList.remove('red-border', 'green-border');
    }
}