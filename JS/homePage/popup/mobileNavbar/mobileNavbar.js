document.addEventListener("DOMContentLoaded", function () { 
    const mobileNavbarButton = document.querySelector('.mobile__burger')
    const closePopupButton = document.querySelector('.close__popup__window__button')

    const mobileNavbarPopupOverlay = document.querySelector('.mobile__navbar__popup__overlay')
    const mobileNavbarPopup = document.querySelector('.mobile__navbar__popup')

    function mobileNavbarHandler() {
        const isOpen = mobileNavbarPopupOverlay.classList.contains('visible')

        function closePopup() {
            mobileNavbarPopupOverlay.classList.add('closing')
            mobileNavbarPopupOverlay.classList.remove('visible')

            setTimeout(() => mobileNavbarPopupOverlay.classList.remove('closing'), 700)
        }

        if(!isOpen) {
            mobileNavbarPopupOverlay.classList.add('visible')

            mobileNavbarPopup.addEventListener('click', (event) => event.stopPropagation())

            closePopupButton.addEventListener('click', closePopup)
            mobileNavbarPopupOverlay.addEventListener('click', closePopup)
        } else {
            closePopup()
        }
    }

    mobileNavbarButton.addEventListener('click', mobileNavbarHandler)
})