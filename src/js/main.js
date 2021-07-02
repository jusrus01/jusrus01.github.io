const navbar = document.getElementById("navbar");
const navOffset = navbar.offsetTop;

bindToScroll();
// addContactFormListeners();


function bindToScroll() {
    window.onscroll = function() { stickNavbarToTop() }; 
}

function stickNavbarToTop() {

    if(window.pageYOffset >= navOffset) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}

function showNavbarItems() {

    if(navbar.classList.contains("responsive")) {
        navbar.classList.remove("responsive");
    } else {
        navbar.classList.add("responsive");
    }
}

// function fillInMailToFields() {

//     const subject = document.getElementById('subject');
//     const body = document.getElementById('messageBody');
//     const mailForm = document.getElementById('mailTo');

//     mailForm.action += '?subject=' + subject.innerText +
//         '&body=' + body.innerText;

//     mailForm.submit();

//     subject.innerText = '';
//     body.innerText = '';    
// }

// function addContactFormListeners() {
//     const subject = document.getElementById('subject');
//     const body = document.getElementById('messageBody');

//     body.onkeydown = function() { onEnterPressButton(event, 'contactBtn') };
//     subject.onkeydown = function() { onEnterPressButton(event, 'contactBtn') };
// }

// function onEnterPressButton(event, buttonId) {
//     const btn = document.getElementById(buttonId);

//     if(event.code == "Enter") {
//         btn.click();
//     }
// }