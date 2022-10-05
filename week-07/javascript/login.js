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
        var btnTrue = [];

        if (emailExpression.test(emailValid.value) && passwordExpression.test(passwordValid.value)) {
            btnTrue.push('Email: ' + emailValid.value + '\n' + 'Password: ' + passwordValid.value);
            alert(btnTrue);
        } else if (emailExpression.test(emailValid.value) && !passwordExpression.test(passwordValid.value)) {
            alert('Password incorrect');
        } else if (!emailExpression.test(emailValid.value) && passwordExpression.test(passwordValid.value)) {
            alert('Email incorrect');
        } else if (!emailExpression.test(emailValid.value) && !passwordExpression.test(passwordValid.value)) {
            alert('Email & Password incorrect')
        }

        var emailRequest = emailValid.value
        var passwordRequest =  passwordValid.value
        
        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login?email=' + emailRequest + '&password=' + passwordRequest

        if (btnTrue.length != 0) {
            fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                if(data.success == true) {
                    alert('The request was succesfull: ' + data.msg);
                } else {
                    if (data.errors == undefined) {
                        alert('The request was not succesfull: ' + data.msg);
                    } else {
                        var errorMsg = [];
                        for (let i = 0; i < data.errors.length; i++) {
                            errorMsg.push(data.errors[i].msg)
                        }
                        var errorMsgText = errorMsg.join('\n');
                        alert('The request was not succesfull: ' + errorMsgText);
                    }
                }
            })
            .catch(function(error) {
                alert('The request failed: ' + error);
            })
        }  
    });
}