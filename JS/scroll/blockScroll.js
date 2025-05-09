import { preventDefault } from "../preventDefault.js"

export function blockScroll() {
    window.addEventListener('wheel', preventDefault, { passive: false })
    window.addEventListener('touchmove', preventDefault, { passive: false })
}