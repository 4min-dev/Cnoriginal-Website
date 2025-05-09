function initializeSwiper() {
    const swiper = new Swiper('.swiper-container', {
        freeMode: true,
        simulateTouch: true,
        touchRatio: 1,
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 10,
        touchStartPreventDefault: false,
        touchMoveStopPropagation: false,
    })

    const swiperContainer = document.querySelector('.latest__orders__container')

    // Обработчик событий колесика мыши для горизонтальной прокрутки с тачпада
    swiperContainer.addEventListener('wheel', function (event) {
        
        // Проверка на горизонтальное прокручивание
        if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
            event.preventDefault()

            const minTranslate = swiper.minTranslate()
            const maxTranslate = swiper.maxTranslate()

            const currentTranslate = swiper.translate

            let newTranslate = currentTranslate + event.deltaX

            if (newTranslate < maxTranslate) {
                newTranslate = maxTranslate
            }
            if (newTranslate > minTranslate) {
                newTranslate = minTranslate
            }

            swiper.setTranslate(newTranslate)
        }
    })
}


initializeSwiper()