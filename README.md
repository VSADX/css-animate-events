# Animate JS Events from CSS
  
<br>  
  
By default, CSS can start an animation on hover.  
To start an animation based on a key press, you need JavaScript.  
This library empowers CSS developers so you don't need to explicitly 
write JS.
  
<br>  
  
## Getting started is really simple
  
<br>  
  
**Add this to an HTML button**  
Start an animation from JavaScript events like `onclick`, `onkeydown`, `onmouseout`  
Add `animate="keydown"` (or whichever event type to listen to).
  
```html
<button animate="click"> Click me </button>
```
  
<br>  
  
**Add your animation in CSS like normal**  
From your CSS file, add the CSS property `--keydown-animation` (or `--mouseout-animation`)  
It's exactly the same as the `animation: ;` property part of CSS.   
  
```css
button {
  --click-animation: grow .2s ease-in;
}
@keyframes grow {
  to { transform: scale(1.1); }
}
```
  
<br>  
  
## Advanced animation API
  
<br>  
  
**Two extra features to try**  
JavaScript events have more features than does `:hover` or `:focus` in CSS.  
Here are two normally JS features this library brings to CSS:
1. Show the JS event data on screen (like `.key` from a `keydown` event)
2. Animate a parent element (e.g. animate the parent of a button, not the button itself) 
  
### Animate a parent/sibling element
  
1. Add `animate-class="somecssclass"` to the parent you wish to animate
2. Add `animate="--somecssclass-keydown"` to the input/button that fires JS events
  
```html
<div animate-class="trysample">
  <h3> Welcome to our coffee shop! </h3>
  <div>
    <p> Would you like to try our daily special? </p>
    <button animate="--trysample-click"> Try a sample </button>
  </div>
</div>
```
  
<br>  
  
1. Add the class in CSS `.somecssclass { }`
2. Put any styles you want to apply when the event is fired
3. (optional) you can target child elements (like `.somecssclass h3`)
  
```css
.trysample {
  box-shadow: 0 0 .25em .25em dodgerblue;
}
.trysample p {
  animation: grow .2s ease-in-out;
}
```
  
Using these three steps, you can animate any element! A parent, a sibling, a child of the element 
that fires the JS event will work! 
  
<br>  
  
### Show event data on screen
  
1. To show data from a keypress or any event, add `-key` (for `.key` data)
2. Your <input> will look like: `<input animate="--myclass-keyup-key">`
3. The `animate-class` won't change!  
  
```html
<p> Each letter you type will briefly show up beside the input element. </p>

<div animate-class="type">
  <p></p>
  <input animate="--type-keydown-key">
</div>
```
  
1. The data is now stored inside a CSS variable
2. It has the same name as the animate attribute: `var(--myclass-keyup-key)`  
3. Use the CSS feature "pseudo-elements" (`::before`) to show the data on screen
  
```css
.type p::before {
  content: var(--type-keydown-key);
}
```
  
