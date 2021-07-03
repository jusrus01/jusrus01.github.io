const navbar = document.getElementById("navbar");
const navOffset = navbar.offsetTop;

const observer = addItersectionObserver();
startObservingElements(observer);

bindToScroll();


function bindToScroll() {
    window.onscroll = function() { stickNavbarToTop() }; 
}

function stickNavbarToTop() {

    if(window.pageYOffset >= navOffset) {
        navbar.classList.add('sticky');
    } else {
        // don't remove if navbar is open
        if(!navbar.classList.contains("responsive")) {
            navbar.classList.remove('sticky');
        }
    }
}

function showNavbarItems() {

    if(navbar.classList.contains("responsive")) {
        navbar.classList.remove("responsive");
    } else {

        if(!navbar.classList.contains("sticky")) {
            navbar.classList.add("sticky");
        }

        navbar.classList.add("responsive");
    }
}

function closeNavbarItems() {

    if(navbar.classList.contains('responsive')) {
        showNavbarItems();
    }
}

function openMail() {
    
    const subjectInput = document.getElementById('subject').value;
    const bodyInput = document.getElementById('messageBody').value;
    
    if(subjectInput != '' && bodyInput != '') {

        if(isValidString(subjectInput) && isValidString(bodyInput)) {
            // open mail with filled in fields
            window.location.href = "mailto:user@example.com?subject=" +
            subjectInput + "&body=" + bodyInput;
            
            // clear inputs
            subjectInput = '';
            bodyInput = '';

        } else {
            // show error message
            alert("Please use only english alphabet characters.");
        }
    } else {
        // show error message
        alert("Please fill in all fields.");
    }
}

function isValidString(s) {

    for(var i = 0; i < s.length; i++) {
        
        if(s[i] < 32 || s[i] > 126) {
            return false;
        }
    }
    return true;
}

function addItersectionObserver() {

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {
            if(entry.isIntersecting) {

                if(entry.target.classList.contains('reset-animation')) {
                    entry.target.classList.remove('reset-animation');

                }
                // check if observable item is from skill-container
                else if(entry.target.classList.contains('skill-level-loading') &&
                    !entry.target.getAttribute('style')) {
                    // extract written width
                    var widthPercentage = entry.target.innerHTML;
                    // add it
                    entry.target.setAttribute('style', 'width: ' + widthPercentage + ';');
                } else if(!entry.target.classList.contains('skill-level-loading')) {
                    entry.target.classList.add('play-animation');
                }
            
            } else if(!entry.target.classList.contains('skill-level-loading')){

                if(entry.target.classList.contains('play-animation')) {
                    entry.target.classList.remove('play-animation');
                }
                entry.target.classList.add('reset-animation');
            }
        });
    }); 

    return observer;
}

function startObservingElements(observer) {

    if(observer != null) {
        const all = document.querySelectorAll('.project, div.skills, .about-me, .contact');
        for(var i = 0; i < all.length; i++) {
            observer.observe(all[i]);
        }
    }
}