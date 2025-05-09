import { pauseVideo } from "./pauseVideo.js"
import { playVideo } from "./playVideo.js"

function isMobileDevice() {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        return true
    } else {
        return false
    }
}

document.addEventListener("DOMContentLoaded", function () { 

    const playback__dependence__videos = document.querySelectorAll('.instruction__video__container')
    
    function playbackHandler() {

        playback__dependence__videos.forEach((videoContainer) => {
            videoContainer.querySelectorAll('.playback__video').forEach((video) => {
                
                if(!isMobileDevice()) {
                    videoContainer.addEventListener('mouseenter', () => {
                        videoContainer.classList.add('hovered')
                    })
        
                    videoContainer.addEventListener('mouseleave', () => {
                        videoContainer.classList.remove('hovered')
                    })
                }

                

                video.paused ? playVideo(video, videoContainer) : pauseVideo(video, videoContainer)
            })
        })
    }

    playback__dependence__videos.forEach((playback__video__container) => {
        playback__video__container.addEventListener('click', playbackHandler)

        playback__video__container.querySelectorAll('.link__to__telegram__button').forEach((link__to__telegram__button) => {
            link__to__telegram__button.addEventListener('click', (e) => {
            e.stopPropagation()
        })
        })

        playback__video__container.querySelectorAll('.etap__value__container').forEach((etap__value__container) => {
            etap__value__container.addEventListener('click', (e) => {
            e.stopPropagation()
        })
        })
    })

})