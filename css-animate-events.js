export function apply_animate_attribute(prevent_attribute_remove = false) {
    const elements = document.querySelectorAll("[animate]")
    elements.forEach(el => {
        el.getAttribute("animate").split(" ").forEach(event_name => {
            el.addEventListener(event_name, event_real => {
                animate(el, event_real)
            })
        })

        if(!prevent_attribute_remove) el.removeAttribute("animate")
    })
}

/** @param {HTMLElement} element @param {Event} event */
export function animate(element, event) {
    element.style.setProperty("animation", `var(--${event.type}-animation)`)

    const onend = () => {
        element.style.removeProperty("animation")
        element.removeEventListener("animationend", onend)
    }

    element.addEventListener("animationend", onend)
}

apply_animate_attribute()
