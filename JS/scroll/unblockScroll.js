import { preventDefault } from "../preventDefault.js"

export function unblockScroll() {
    window.removeEventListener('wheel', preventDefault)
    window.removeEventListener('touchmove', preventDefault)
}