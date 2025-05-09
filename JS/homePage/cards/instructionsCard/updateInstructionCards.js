import { updateInstructionVideo } from "./updateInstructionVideo.js"

export function updateInstructionCards(activeCardIndex, cards, deltaY) {
    cards.forEach((card) => {
        
        if(deltaY > 0) {
            if(card.classList.contains('active') && !card.classList.contains('prevActive')) {
                card.classList.add('prevActive')
            }

        } else if(deltaY < 0) {
            if(Number(card.getAttribute('data-id')) === 1) {
                card.style.top = '0'
            }
        }

        if(Number(card.getAttribute('data-id')) === activeCardIndex) {

            card.classList.remove('prevActive')
            card.classList.add('active')
            card.querySelector('.instruction__value__scrollbar').querySelector('.instruction__value__scrollbar__indicator').style.width = `${activeCardIndex / cards.length * 100}%`

        } else {
            card.classList.remove('active')
        }
    })

    updateInstructionVideo(activeCardIndex)
}