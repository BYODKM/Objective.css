# Objective.css (a.k.a. TIE)

> Object Oriented CSS Naming Conventions. Unlike OOCSS, this is a real thing.

## Super class must begin with capital letters

```sass
.Button
  appearance: none
  position: relative
  display: inline-block
  box-sizing: border-box
  border: 1px solid
  border-radius: 4px
  height: 2em
  padding: 0 0.5em
  color: inherit
  background-color: white
  text-decoration: none
  line-height: 1.9
  vertical-align: middle
```

This idea is based on this:

```js
var button = new Button();
```

## Double hyphens to instantiate

```html
<button class="Button button--upload" type="button">Upload</button>
```

```html
<a class="Button button--cancel" href="#">Cancel</a>
```

## Add instance properties

```sass
.button--upload
  color: white
  background-color: $green

.button--cancel
  color: white
  background-color: $red
```

You can keep a code to a minimum and the scope is safe.

## Instances can have own child elements

```html
<button class="Button button--upload" type="button">
  <span class="button--upload__icon"></span>
  <span class="button--upload__counter">1</span>
  Upload
</button>
```

```sass
.button--upload
  color: white
  background-color: $green

  &__icon
    @include icon(upload)

  &__counter
    position: absolute
    top: -0.5em
    right: -0.5em
    min-width: 1em
    height: 1em
    border-radius: 1em
    overflow: hidden
    background-color: $red
```

## The difference from BEM

- We don't use `.block__element__element` format even if we have a grandchild element.
- Use the recognizable className to offspring which is enough to organize.
- The format will be `type--identifier__element`. So maybe TIE?


## A case of super class has child element

```html
<div class="Popup">
  <div class="Popup__window">
    <div class="Popup__message">
      <!-- Messages Here -->
    </div>
    <div class="Popup__action">
      <!-- Buttons Here -->
    </div>
  </div>
</div >
```

### Super class properties

```sass
.Popup

  &__window
    width: 300px
    position: fixed
    top: 33%
    left: 50%
    margin-left: -150px
    background-color: white
    border-radius: 8px

  &__message
    padding: 1em

  &__action
    border-top: 1px solid $gray
    text-align: center

```

### Instantiate

```html
<div class="Popup popup--confirm">
  <div class="Popup__window">
    <div class="Popup__message">
      <p class="popup--confirm__message">Send a E-mail message for you.</p>
    </div>
    <div class="Popup__action">
      <button class="Button button--close-popup" type="button">Close</button>
    </div>
  </div>
</div >
```

### Instance properties

```sass
.popup--confirm

  &__message
    text-align: center
```

The same as the `.Button` so far.

## How to override super class child elements

### Bad example

```html
<div class="Popup popup--confirm">
  <div class="Popup__window">
    <div class="Popup__message">
      <p class="popup--confirm__message">Send a E-mail message for you.</p>
    </div>
    <div class="Popup__action">
      <!-- This case, no buttons -->
    </div>
  </div>
</div >
```

```sass
.popup--confirm

  .Popup__action // Manipulated super class child element from a instance
    display: none
```

This could be trouble when the inside of super class has been changed.

### Good one

Use parameters as a bridge.

```html
<div class="Popup popup--confirm param--auto-close"><!-- Add parameters here -->
  <div class="Popup__window">
    <div class="Popup__message">
      <p class="popup--confirm__message">Send a E-mail message for you.</p>
    </div>
    <div class="Popup__action">
      <!-- This case, no buttons -->
    </div>
  </div>
</div >
```

```sass
.Popup

  &.param--auto-close // Handling own child elements

    .Popup__action
      display: none
```

Code like this; you don't need to know anything about inside of super class.

So this is how Object Oriented CSS works.

Also, this is a very good practice for HTML components.

## Thanks

That's it, folks.

Thank you for reading this to the end.

Hope you like it as much as we do.

## License

Public Domain
