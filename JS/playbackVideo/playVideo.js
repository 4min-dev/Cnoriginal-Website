export function playVideo(video, videoContainer) {
    if(video.classList.contains('active')) {
        videoContainer.classList.remove('paused')
        videoContainer.classList.add('played')

        video.play()

        video.addEventListener('ended', () => {
            videoContainer.classList.remove('played');
            videoContainer.classList.add('paused');
        });
    }
}