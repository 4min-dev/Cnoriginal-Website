import { pauseVideo } from "../../../playbackVideo/pauseVideo.js"

export function updateInstructionVideo(activeCardIndex) {
    const playback__dependence__videos = document.querySelectorAll('.instruction__video__container')

    playback__dependence__videos.forEach((videoContainer) => {
        videoContainer.querySelectorAll('.playback__video').forEach((video) => {
            if (video.getAttribute('data-id') == activeCardIndex) {
                video.classList.add('active')
            } else {
                video.classList.remove('active')
                pauseVideo(video, videoContainer)
            }
        })
    })
}