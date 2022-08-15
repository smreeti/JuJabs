"use strict";
let $ = function (id) {
    return document.getElementById(id);
};

let submitForm = function () {
    /*get user input values */
    let fName = $("fName").value;
    let lName = $("lName").value;
    let email = $("email").value;
    let message = $('message').value
    var letters = /^[A-Za-z]+$/;

    /* Validate each input fields such that they are not empty. If empty, show error alert message. */
    if (fName != "" && fName.match(letters)) {
        if (lName != "" && lName.match(letters)) {
            if (email != "" && email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
                if (message != "") {
                    window.alert("Form Submitted");
                    $("cForm").reset(); //reset form values after form submitted.
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

/*Event handler for form submit */
document.addEventListener("DOMContentLoaded", function () {
    $("fSubmit").addEventListener("click", submitForm
    );
});