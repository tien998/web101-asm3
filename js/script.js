
validateEmail();
toggleElements();
toggleSelfElement();


function validateEmail() {
    const emailInput = document.getElementById('email-input');
    const formInput = document.getElementById('validate-form');
    const personalInfo = document.getElementById('personal-info');
    const btnSubmit = document.getElementById('btn-validate');
    const emailValidate = document.querySelector('.email-validating-error');

    btnSubmit.addEventListener('click', () => {
        isValidEmail(emailInput.value) ?
            toggle() : emailValidatingError()

        function toggle() {
            personalInfo.classList.toggle('d-none');
            formInput.classList.toggle('d-none');
            emailValidate.classList.add('d-none');
        }

        function emailValidatingError() {
            emailValidate.classList.remove('d-none');
        }
    })
}

// This function prevent form submited when declared in form element 
// ex:
// <form onsubmit="return preventSubmit()">
function preventSubmit() {
    return false;
}


//  Validate email using regex: return true || false 
function isValidEmail(email) {
    // regex
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

// 'toggleCus' param is classname's element that implement toggle
// definded element has 2 data- attributes:
// data-cus-toggle: defind class that create toggle
// data-cus-target: defind elements that toggle implement by className or Id (only when toggle on 1 element)
function toggleElements() {
    const selectedEl = document.querySelectorAll('.toggle-cus');
    // if no element has class = '.toggle-cus', do nothing to prevent unexpected error
    if (selectedEl)
        // when it has multi elements, loop for each element to addEventListener
        selectedEl.forEach(e => {
            e.addEventListener('click', function () {
                const toggleClass = this.dataset.cusToggle;
                const targets = this.dataset.cusTarget;
                toggle();

                function toggle() {
                    document.querySelectorAll(targets).forEach(e => {
                        e.classList.toggle(toggleClass);
                    })
                }
            });
        })
}

// similar 'toggleElements' function, but toggle element-itself
function toggleSelfElement() {
    const selectedEl = document.querySelectorAll('.toggle-cus-self');
    if (selectedEl)
        selectedEl.forEach(e => {
            e.addEventListener('click', function () {
                const toggleClass = this.dataset.cusToggle;
                toggle();

                function toggle() {
                    e.classList.toggle(toggleClass);
                }
            });
        })
}