
let accordion = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

/*testimonials section*/

const clientTabItems = document.querySelectorAll('.client-item');
const showDiv = document.querySelector('.show-info');

clientTabItems.forEach((item) => {
    item.addEventListener('click', () => {
        showInfo(item);
    });
});

function showInfo(item) {
    showDiv.querySelector('.show-img img').src = item.querySelector('.client-thumbnail img').src;
    showDiv.querySelector('.show-name').innerHTML = item.querySelector('.client-name').innerHTML;
    showDiv.querySelector('.show-designation').innerHTML = item.querySelector('.client-designation').innerHTML;
    showDiv.querySelector('.show-description').innerHTML = item.querySelector('.client-description').innerHTML;
    setActiveTab(item);
}

function setActiveTab(item) {
    clientTabItems.forEach((item) => {
        item.classList.remove('active'); // resetting active tab
    });
    item.classList.add('active');
}

showInfo(clientTabItems[0]); // default active tab