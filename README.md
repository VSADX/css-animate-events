# css-animate-events
  
<br>  
  
## Simple animate element API
```html
<button animate="click"> Click me </button>
```
```css
button {
  --click-animation: grow .2s ease-in;
}
@keyframes grow {
  to { transform: scale(1.1); }
}
```

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
