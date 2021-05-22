
// <div animate-class="pizza">
const ani_cls = "animate-class"
// <button animate="--pizza-click">
// <input animate="--pizza-keypress-key">
const ani = "animate"

export function apply_animate_attribute(prevent_attribute_remove = false) {    

    document.querySelectorAll(`[${ani}]`).forEach(el => {
        el.getAttribute(ani).split(" ").forEach(css_var => {
            
            if(css_var.slice(0, 2) == "--") animate_eventable(el, css_var)
            else el.addEventListener(css_var, event => animate(el, event))
        })

        if(!prevent_attribute_remove) el.removeAttribute(ani)
    })
}

/**
 * event property animate api
 * @param {HTMLElement} el 
 * @param {string} css_var 
 */
export function animate_eventable(el, css_var) {
    const [ css_class, event_name, ...event_property_path ] = css_var.slice(2).split("-")

    /** @type {HTMLElement} */
    const common_root = el.closest(`[${ani_cls}="${css_class}"]`)
    if(!common_root) throw new RangeError(`Element ${ani}="${css_var}" has no parent that has ${ani_cls}=${css_class}.`)
    
    el.addEventListener(event_name, async event => {

        common_root.classList.remove(css_class)
        await new Promise(res => setTimeout(res, 10))
        common_root.classList.add(css_class)

        if(!event_property_path.length) return

        // get data from event, add as CSS variable
        let property = event[event_property_path[0]]
        for (let i = 1; i < event_property_path.length; i++) 
            property = property[event_property_path[i]]

        // string properties will be inserted missing quotes.
        if(typeof property == "string") property = `"${property}"`
        // allow numbers 
        else if(typeof property == "number");
        // not yet can convert
        else throw new TypeError(`CSS var ${css_var} becomes ${property} but type ${typeof property} has no support.`)
        
        common_root.style.setProperty(css_var, property)
    })
}
/**
 * simple animate api
 * @param {HTMLElement} element 
 * @param {Event} event 
 * */
 export function animate(element, event, remove_after = false) {
    element.style.setProperty("animation", `var(--${event.type}-animation)`)

    if(!remove_after) return

    const onend = () => {
        element.style.removeProperty("animation")
        element.removeEventListener("animationend", onend)
    }

    element.addEventListener("animationend", onend)
}

apply_animate_attribute()
