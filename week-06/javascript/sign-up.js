window.onload = function() {

    // Name validation

    var nameSignUp = document.getElementById('name');

    nameSignUp.onblur = function() {
        var nameExp = /^[a-zA-Z]{3,30}$/;
        var nameCharValid = nameExp.test(nameSignUp.value);
        if (nameCharValid == true) {
            nameSignUp.classList.add('green-border');
            console.log(nameSignUp.value + ' Funciona');
        } else {
            nameSignUp.classList.add('red-border');
            console.log(nameSignUp.value + ' No funciona');
        }
    }

    nameSignUp.onfocus = function() {
        nameSignUp.classList.remove('red-border', 'green-border');
    }

    // Last name validation
    
    var lastNameSignUp = document.getElementById('lastName');

    lastNameSignUp.onblur = function() {
        var lastNameExp = /^[a-zA-Z]{3,30}$/;
        var lastNameCharValid = lastNameExp.test(lastNameSignUp.value);
        if (lastNameCharValid == true) {
            lastNameSignUp.classList.add('green-border');
            console.log(lastNameSignUp.value + ' Funciona');
        } else {
            lastNameSignUp.classList.add('red-border');
            console.log(lastNameSignUp.value + ' No funciona');
        }
    }

    lastNameSignUp.onfocus = function() {
        lastNameSignUp.classList.remove('red-border', 'green-border');
    }

    // DNI validation

    var idSignUp = document.getElementById('dni');

    idSignUp.onblur = function() { 
        var idExp = /^[0-9]{7,15}$/;
        var idCharValid = idExp.test(idSignUp.value);
        if (idCharValid == true) {
            idSignUp.classList.add('green-border');
            console.log(idSignUp.value + ' Funciona');
        } else {
            idSignUp.classList.add('red-border');
            console.log(idSignUp.value + ' No funciona');
        }
    }

    idSignUp.onfocus = function() {
        idSignUp.classList.remove('red-border', 'green-border');
    }

    // Phone validation 

    var phoneSignUp = document.getElementById('phone');

    phoneSignUp.onblur = function() {
        var phoneExp = /^[0-9]{10,20}$/;
        var phoneCharValid = phoneExp.test(phoneSignUp.value);
        if (phoneCharValid == true) {
            phoneSignUp.classList.add('green-border');
            console.log(phoneSignUp.value + ' Funciona');
        } else {
            phoneSignUp.classList.add('red-border');
            console.log(phoneSignUp.value + ' No funciona');
        }
    }

    phoneSignUp.onfocus = function() {
        phoneSignUp.classList.remove('red-border', 'green-border');
    }

    // Address validation

    var addressSignUp = document.getElementById('address');
    
    addressSignUp.onblur = function() { 
        var addressExp = /^["a-zA-Z"0-9 ]{5,100}$/;
        var addressCharValid = addressExp.test(addressSignUp.value);
        if (addressCharValid == true) {
            addressSignUp.classList.add('green-border');
            console.log(addressSignUp.value + ' Funciona');
        } else {
            addressSignUp.classList.add('red-border');
            console.log(addressSignUp.value + ' No funciona');
        }
    }

    addressSignUp.onfocus = function() {
        addressSignUp.classList.remove('red-border', 'green-border');
    }

    // Location validation

    var locationSignUp = document.getElementById('city');
    
    locationSignUp.onblur = function() { 
        var locationExp = /^["a-zA-Z"0-9 ]{3,100}$/;
        var locationCharValid = locationExp.test(locationSignUp.value);
        if (locationCharValid == true) {
            locationSignUp.classList.add('green-border');
            console.log(locationSignUp.value + ' Funciona');
        } else {
            locationSignUp.classList.add('red-border');
            console.log(locationSignUp.value + ' No funciona');
        }
    }

    locationSignUp.onfocus = function() {
        locationSignUp.classList.remove('red-border', 'green-border');
    }

    // Zip code validation 

    var zipCodeSignUp = document.getElementById('zipCode');
    
    zipCodeSignUp.onblur = function() { 
        var zipCodeExp = /^[0-9]{4,5}$/;
        var zipCodeCharValid = zipCodeExp.test(zipCodeSignUp.value);
        if (zipCodeCharValid == true) {
            zipCodeSignUp.classList.add('green-border');
            console.log(zipCodeSignUp.value + ' Funciona');
        } else {
            zipCodeSignUp.classList.add('red-border');
            console.log(zipCodeSignUp.value + ' No funciona');
        }
    }

    zipCodeSignUp.onfocus = function() {
        zipCodeSignUp.classList.remove('red-border', 'green-border');
    }    

    // Email validation

    
}