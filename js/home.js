$(document).ready(function () {
   
   //box slider that allows to create a content slider with images
    $('.slider').bxSlider(
        {
            auto: true, //Slides will automatically transition
            autoControls: true, //If true, "Start" / "Stop" controls will be added
            captions: true //Include image captions. Captions are derived from the image's title attribute
        }
    );

    /* Functionality to Go to top page when the user have scrolled more than 20px. 
        If the user is at the top section itself, hide the icon to go to top.
    */
    let goToTop = $(".goToTop")[0];
    window.onscroll = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            $(goToTop).css("display", "block");
        } else {
            $(goToTop).css("display", "none");
        }
    }

    //animate to the top section of the page slowly
    $(goToTop).click(() => {
        $("html,body").animate({ scrollTop: 0 }, "slow");
    });

    //tab widget : A single content area with multiple panels, each associated with a header in a list.
    $(function () {
        $("#tabs").tabs();
    });

    //lightbox jquery plugin along with Slideshow, carousel style gallery and custom controls.
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
      })
});