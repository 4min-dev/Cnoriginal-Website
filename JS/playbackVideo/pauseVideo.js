export function pauseVideo(video, videoContainer) {
        videoContainer.classList.remove('played')
        videoContainer.classList.add('paused')

        video.pause()
    
}