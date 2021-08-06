# Animate JS Events from CSS
  
<br>  
  
By default, CSS can start an animation on hover.  
To start an animation based on a key press, you need JavaScript.  
This library empowers CSS developers so you don't need to explicitly 
write JS.
  
<br>  
  
## Getting started is really simple
  
<br>  
  
**Add one property to HTML**  
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
  
## Eventable animate passes API
```html
<div animate-class="pizza">
  <p> Hello! </p>
  <button animate="--pizza-click"> Click me </button>
</div>
```
```css
div.pizza p {
  animation: grow .2s ease-in-out;
}
```
  
## Eventable animate w passes data API
```html
<div animate-class="spooky">
  <p></p>
  <input animate="--spooky-keydown-key"> Click me </button>
</div>
```
```css
div.spooky p::before {
  content: var(--spooky-keydown-key);
  animation: grow .2s ease-in-out;
}
```
