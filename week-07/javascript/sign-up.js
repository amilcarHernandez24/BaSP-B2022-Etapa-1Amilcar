window.onload = function() {

    // Name validation

    var nameSignUp = document.getElementById('name');
    var nameExp = /^[a-zA-Z]{3,30}$/;

    function nameValidated() {
        if (nameExp.test(nameSignUp.value) == true) {
            return true;
        }
    }

    nameSignUp.onblur = function () {
        if (nameValidated() == true) {
            nameSignUp.classList.add('green-border');
        } else {
            nameSignUp.classList.add('red-border');
        }
    }

    nameSignUp.onfocus = function() {
        nameSignUp.classList.remove('red-border', 'green-border');
    }

    // Last name validation

    var lastNameSignUp = document.getElementById('lastName');
    var lastNameExp = /^[a-zA-Z]{3,30}$/;

    function lastNameValidated() {
        if (lastNameExp.test(lastNameSignUp.value) == true) {
            return true;
        }
    }

    lastNameSignUp.onblur = function () {
        if (lastNameValidated() == true) {
            lastNameSignUp.classList.add('green-border');
        } else {
            lastNameSignUp.classList.add('red-border');
        }
    }

    lastNameSignUp.onfocus = function() {
        lastNameSignUp.classList.remove('red-border', 'green-border');
    }

    // DNI validation

    var idSignUp = document.getElementById('dni');
    var idExp = /^[0-9]{7,15}$/;

    function idValidated () {
        if (idExp.test(idSignUp.value) == true) {
            return true;
        }
    }

    idSignUp.onblur = function() {
        if (idValidated() == true) {
            idSignUp.classList.add('green-border');
        } else {
            idSignUp.classList.add('red-border');
        }
    }

    idSignUp.onfocus = function() {
        idSignUp.classList.remove('red-border', 'green-border');
    }

    //DOB declaration

    var dobSignUp = document.getElementById('dob');
    dobSignUp.onblur = function() {
        console.log(dobSignUp.value);
    }


    // Phone validation

    var phoneSignUp = document.getElementById('phone');
    var phoneExp = /^[0-9]{9,20}$/;

    function phoneValidated() {
        if (phoneExp.test(phoneSignUp.value) == true) {
            return true;
        }
    }

    phoneSignUp.onblur = function() {
        if (phoneValidated() == true) {
            phoneSignUp.classList.add('green-border');
        } else {
            phoneSignUp.classList.add('red-border');
        }
    }

    phoneSignUp.onfocus = function() {
        phoneSignUp.classList.remove('red-border', 'green-border');
    }

    // Address validation

    var addressSignUp = document.getElementById('address');
    var addressExp = /^["a-zA-Z"0-9 ]{5,100}$/;

    function addressValidation() {
        if (addressExp.test(addressSignUp.value) == true) {
            return true;
        }
    }
    
    addressSignUp.onblur = function() {
        if (addressValidation() == true) {
            addressSignUp.classList.add('green-border');
        } else {
            addressSignUp.classList.add('red-border');
        }
    }

    addressSignUp.onfocus = function() {
        addressSignUp.classList.remove('red-border', 'green-border');
    }

    // Location validation

    var locationSignUp = document.getElementById('city');
    var locationExp = /^["a-zA-Z"0-9 ]{3,100}$/;

    function locationValidated() {
        if (locationExp.test(locationSignUp.value) == true) {
            return true;
        }
    }
    
    locationSignUp.onblur = function() { 
        if (locationValidated() == true) {
            locationSignUp.classList.add('green-border');
        } else {
            locationSignUp.classList.add('red-border');
        }
    }

    locationSignUp.onfocus = function() {
        locationSignUp.classList.remove('red-border', 'green-border');
    }

    // Zip code validation 

    var zipCodeSignUp = document.getElementById('zipCode');
    var zipCodeExp = /^[0-9]{4,5}$/;

    function zipCodeValidated() {
        if (zipCodeExp.test(zipCodeSignUp.value) == true) {
            return  true;
        }
    }
    
    zipCodeSignUp.onblur = function() {
        if (zipCodeValidated() == true) {
            zipCodeSignUp.classList.add('green-border');
        } else {
            zipCodeSignUp.classList.add('red-border');
        }
    }

    zipCodeSignUp.onfocus = function() {
        zipCodeSignUp.classList.remove('red-border', 'green-border');
    }    

    // Email validation

    var emailSignUp = document.getElementById('email');
    var emailExp = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    function emailValidated() {
        if (emailExp.test(emailSignUp.value) == true) {
            return true;
        }
    }
    
    emailSignUp.onblur = function() {
        if (emailValidated() == true) {
            emailSignUp.classList.add('green-border');
        } else {
            emailSignUp.classList.add('red-border');
        }
    }

    emailSignUp.onfocus = function() {
        emailSignUp.classList.remove('red-border', 'green-border');
    }
    
    // Password validation

    var passwordSignUp = document.getElementById('password');
    var paswordExp = /^["a-zA-Z"0-9]{8,20}$/;

    function passwordValidated() {
        if (paswordExp.test(passwordSignUp.value) == true) {
            return true;
        }
    }
    
    passwordSignUp.onblur = function() {
        if (passwordValidated() == true) {
            passwordSignUp.classList.add('green-border');
        } else {
            passwordSignUp.classList.add('red-border');
        }
    }

    passwordSignUp.onfocus = function() {
        passwordSignUp.classList.remove('red-border', 'green-border');
    }
    
    // Password validation 2

    var confPasswordSignUp = document.getElementById('confirm-password');

    confPasswordSignUp.onblur = function() {
        if (confPasswordSignUp.value === passwordSignUp.value) {
            confPasswordSignUp.classList.add('green-border');
            } else {
            confPasswordSignUp.classList.add('red-border');
        }
    }

    confPasswordSignUp.onfocus = function() {
        confPasswordSignUp.classList.remove('red-border', 'green-border');
    }

    // Button validation

    var buttonLogin = document.getElementById('button');

    buttonLogin.addEventListener('click',  function loginBtn(e) {
        e.preventDefault();
        var btnTrue = [];
        var btnFalse = [];

        if (!nameValidated()) {
            btnFalse.push('Name invalid: ' + nameSignUp.value + '\n'); 
        } else {
            btnTrue.push('Name: ' + nameSignUp.value + '\n');
        }

        if (!lastNameValidated()) {
            btnFalse.push('Last name invalid: ' + lastNameSignUp.value + '\n');
        } else {
            btnTrue.push('Last name: ' + lastNameSignUp.value + '\n');
        }

        if (!idValidated()) {
            btnFalse.push('ID invalid: ' + idSignUp.value + '\n');
        } else {
            btnTrue.push('ID: ' + idSignUp.value + '\n')
        }

        if (!phoneValidated()) {
            btnFalse.push('Phone invalid: ' + phoneSignUp.value + '\n');
        } else {
            btnTrue.push('Phone: ' + phoneSignUp.value + '\n')
        }

        if (!addressValidation()) {
            btnFalse.push('Address invalid: ' + addressSignUp.value + '\n');
        } else {
            btnTrue.push('Address: ' + addressSignUp.value + '\n');
        }

        if (!locationValidated()) {
            btnFalse.push('Location invalid: ' + locationSignUp.value + '\n');
        } else {
            btnTrue.push('Location: ' + locationSignUp.value + '\n');
        }

        if (!zipCodeValidated()) {
            btnFalse.push('Zip code invalid: ' + zipCodeSignUp.value + '\n');
        } else {
            btnTrue.push('Zip code: ' + zipCodeSignUp.value + '\n');
        }

        if (!emailValidated()) {
            btnFalse.push('Email invalid: ' + emailSignUp.value + '\n');
        } else {
            btnTrue.push('Email: ' + emailSignUp.value + '\n');
        }

        if (!passwordValidated()) {
            btnFalse.push('Password invalid: ' + passwordSignUp.value + '\n');
        } else {
            btnTrue.push('pasword: ' + passwordSignUp.value + '\n'); 
        }

        if (btnFalse.length == 0) {
            alert(btnTrue);
        } else {
            alert(btnFalse);
        }

        var nameRequest = nameSignUp.value
        var lastNameRequest = lastNameSignUp.value
        var idRequest = idSignUp.value
        var phoneRequest = phoneSignUp.value
        var addressRequest = addressSignUp.value
        var locationRequest = locationSignUp.value
        var zipCodeRequest = zipCodeSignUp.value
        var emailRequest = emailSignUp.value
        var passwordRequest = passwordSignUp.value 
        var dobChanged = dobSignUp.value.split('-') //JS format aa/mm/dd
        var dobRequest = dobChanged[1] + '/' + dobChanged[2] + '/' + dobChanged[0];
        
        var url = `https://basp-m2022-api-rest-server.herokuapp.com/signup?name=${nameRequest}&lastName=${lastNameRequest}&dni=${idRequest}&dob=${dobRequest}&phone=${phoneRequest}&address=${addressRequest}&city=${locationRequest}&zip=${zipCodeRequest}&email=${emailRequest}&password=${passwordRequest}`

        if (btnFalse.length == 0) {
            fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                if(data.success == true) {
                    alert('The request was succesfull: ' + data.msg);
                    localStorage.setItem('name', nameSignUp.value)
                    localStorage.setItem('lastName', lastNameSignUp.value)
                    localStorage.setItem('DNI', idSignUp.value)
                    localStorage.setItem('phone', phoneSignUp.value)
                    localStorage.setItem('address', addressSignUp.value)
                    localStorage.setItem('city', locationSignUp.value)
                    localStorage.setItem('zipCode', zipCodeSignUp.value)
                    localStorage.setItem('email', emailSignUp.value)
                    localStorage.setItem('password', passwordSignUp.value)
                    localStorage.setItem('dateOfBirth', dobSignUp.value)
                } else {
                    var errorMsg = [];
                    for (let i = 0; i < data.errors.length; i++) {
                        errorMsg.push(data.errors[i].msg)
                    }
                    var errorMsgText = errorMsg.join('\n');
                    alert('The request was not succesfull: ' + '\n' + errorMsgText);
                }
            })
            .catch(function(error) {
                alert('The request failed: ' + error);
            })
        }
    })

    var nameStorageSignUp = localStorage.getItem('name');
    nameSignUp.value = nameStorageSignUp;

    var lastNameStorageSignUp = localStorage.getItem('lastName');
    lastNameSignUp.value = lastNameStorageSignUp;

    var dniStorageSignUp = localStorage.getItem('DNI');
    idSignUp.value = dniStorageSignUp;

    var phoneStorageSignUp = localStorage.getItem('phone');
    phoneSignUp.value = phoneStorageSignUp;

    var addressStorageSignUp = localStorage.getItem('address');
    addressSignUp.value = addressStorageSignUp;

    var cityStorageSignUp = localStorage.getItem('city');
    locationSignUp.value = cityStorageSignUp;

    var zipCodeStorageSignUp = localStorage.getItem('zipCode');
    zipCodeSignUp.value = zipCodeStorageSignUp;

    var emailStorageSignUp = localStorage.getItem('email');
    emailSignUp.value = emailStorageSignUp;

    var dateOfBirthStorageSignUp = localStorage.getItem('dateOfBirth');
    dobSignUp.value = dateOfBirthStorageSignUp;
}