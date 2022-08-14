"use strict";
var $ = function (id) {
    return document.getElementById(id);
};

var submitForm = function () {
    let fName = $("fName").value;
    let lName = $("lName").value;
    let email = $("email").value;
    let message = $('message').value
    var letters = /^[A-Za-z]+$/;

    if (fName != "" && fName.match(letters)) {
        if (lName != "" && lName.match(letters)) {
            if (email != "" && email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
                if (message != "") {
                    window.alert("Form Submitted");
                    $("cForm").reset();
                }
                else {
                    window.alert("Please enter a valid Message");
                }
            }
            else {
                window.alert("Please enter a valid Email");
            }
        }
        else {
            window.alert("Please enter a valid Last Name");
        }
    }
    else {
        window.alert("Please Enter a valid First Name");
    }
}

document.addEventListener("DOMContentLoaded", function () {

    $("fSubmit").addEventListener("click", submitForm
    );
});