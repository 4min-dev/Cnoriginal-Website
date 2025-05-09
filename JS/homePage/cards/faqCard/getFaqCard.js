document.addEventListener("DOMContentLoaded", function () {
    const faqCards = document.querySelectorAll('.faq__card')

    function answerHandler(event) {
        const faqCard = event.currentTarget
        const answer = faqCard.querySelector('.answer__to__question')

        if (faqCard.classList.contains('active')) {
            faqCard.classList.remove('active')
            answer.style.height = '0'
        } else {
            faqCard.classList.add('active')
            answer.style.height = '0'
            const answerHeight = answer.scrollHeight + 'px'
            setTimeout(() => {
                answer.style.transition = 'height 0.7s ease-in-out'
                answer.style.height = answerHeight 
            }, 10)
        }
    }

    faqCards.forEach((faqCard) => {
        faqCard.addEventListener('click', answerHandler)
    })
})
