'use strict'
const emails = require('./source_emails.json')

//Function validateEmail check is string of type email is valid
function validateEmail(email) {

    if (typeof email !== 'string') {
        throw new TypeError('Expected a String')
    }

    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regex.test(email); // return true or false
}

//Function check if the domaine exist in array of emails
function compare(inputEmail, emails, addNewArrayDomain = []) {

    // the array is defined and has at least one element
    if (typeof addNewArrayDomain !== 'undefined' && addNewArrayDomain.length > 0) {
        for (let i = 0; i < addNewArrayDomain.length; i++) {
            emails.push(addNewArrayDomain[i])
        }
    }

    let status = false;

    //Check if email is valid
    if (validateEmail(inputEmail) == true) {

        let domaine = inputEmail.substr(inputEmail.indexOf('@') + 1, inputEmail.length);

        //loop database mail in array
        for (let i = 0; i < emails.length; i++) {

            if (emails[i] == domaine) {
                status = true;
            }

            return status; // return true if domaine if fine

        }
    }
}

module.exports = (inputEmail, domains = []) => {
    return compare(inputEmail, emails, domains);
}