$(document).ready(function () {

    //box slider that allows to create a content slider with images
    $('.slider').bxSlider(
        {
            auto: true, //Slides will automatically transition
            autoControls: true, //If true, "Start" / "Stop" controls will be added
            captions: true //Include image captions. Captions are derived from the image's title attribute
        }
    );

    //tab widget : A single content area with multiple panels, each associated with a header in a list.
    $(function () {
        $("#tabs").tabs();
    });

    //lightbox jquery plugin along with Slideshow, carousel style gallery and custom controls.
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    });

    //Dialog box: Open content in an interactive overlay.
    $("#dialog").dialog({
        autoOpen: false,
        width: 400,
        buttons: [   //two buttons in dialog box : OK and Close
            {
                text: "Ok",
                click: function () {
                    $(this).dialog("close");
                }
            },
            {
                text: "Cancel",
                click: function () {
                    $(this).dialog("close");
                }
            }
        ]
    });

    // Link to open the dialog
    $("#dialog-link").click(function (event) {
        event.preventDefault();
        $("#dialog").dialog("open");
        //prevent default action of button click
    });

    /*
    validation to enable/disable Subscribe button. If the input values (name and email) are empty, then disable the 
    submit action.
    */
    $('.message_grid_container input').on('keyup', function () {
        let empty = false;

        $('.message_grid_container input').each(function () {
            empty = $(this).val().length == 0;
        });

        if (empty)
            $('.subscribe input').attr('disabled', 'disabled');
        else
            $('.subscribe input').attr('disabled', false);
    });

    //Dialog message content after user clicks Subscribe button
    $("#dialog-link").click(() => {
        //get name value
        const name = $("#name")[0].value;
        const email = $("#email")[0].value;
        const isValidEmail = validateEmail(email);

        //show the dialog box content only if the name value is not empty and clear the form values after the dialog box opens.
        //if name is empty, then keep the dialog box closed.
        //validate email pattern
        if (!isValidEmail)
            $("#email_error")[0].textContent = "Please provide valid email.";

        if (name.length > 0 && isValidEmail) {
            $(".dialog_message")[0].textContent = `Congratulations, ${name}! You have successfully subscribed to JuJabs.`;
            $("#name")[0].value = "";
            $("#email")[0].value = "";
            $("#email_error")[0].textContent="";
        } else {
            $("#dialog").dialog("close");
        }
    });

    //function to validate the requested email with the email pattern
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
});