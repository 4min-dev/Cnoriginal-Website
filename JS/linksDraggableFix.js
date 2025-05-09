function linksDraggableFix() {
    document.querySelectorAll('[draggable]').forEach(el => {
        el.setAttribute('draggable', 'false')
    })

    document.addEventListener('mousedown', function (e) {
        if (e.target.hasAttribute('draggable') || e.target.closest('[draggable]')) {
            e.preventDefault()
        }
    })

    document.addEventListener('dragstart', function (e) {
        e.preventDefault()
    })
}

linksDraggableFix()