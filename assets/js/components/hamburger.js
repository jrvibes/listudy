document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile_menu');
    const mobileClose = document.getElementById('mobile_menu_close');
    const mobileBackdrop = document.querySelector('#mobile_menu .mobile-menu__backdrop');

    const toggleMobileMenu = () => {
        if (!mobileMenu || !hamburger) return;
        const nowOpen = mobileMenu.classList.toggle('is-open');
        hamburger.classList.toggle('hamburger_toggle', nowOpen);
        hamburger.setAttribute('aria-expanded', nowOpen.toString());
        mobileMenu.setAttribute('aria-hidden', (!nowOpen).toString());
    };

    if (hamburger) { hamburger.addEventListener('click', toggleMobileMenu); }
    if (mobileClose) { mobileClose.addEventListener('click', toggleMobileMenu); }
    if (mobileBackdrop) { mobileBackdrop.addEventListener('click', toggleMobileMenu); }

    const back_buttons = document.getElementsByClassName("go-back");
    for (let b of back_buttons) {
        b.addEventListener('click', () => {
            history.back();
        });
    }
});
