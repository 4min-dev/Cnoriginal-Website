document.addEventListener("DOMContentLoaded", function () { 

    const sortButtons = document.querySelectorAll('.latest__order__sort__button')

    function sortCardsHandler(event) {
        sortButtons.forEach((sortButton) => {
            if(sortButton.getAttribute('data-id') == event.target.getAttribute('data-id')) {
                sortButton.classList.add('active')
            } else {
                sortButton.classList.remove('active')
            }
        })
    }

    sortButtons.forEach((sortButton) => {
        sortButton.addEventListener('click', sortCardsHandler)
    })

})