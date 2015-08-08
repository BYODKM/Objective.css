# True Object Oriented CSS Code Guide

> Unlike OOCSS, this is a real thing.

## 0. What does "Object Oriented" mean?

"Object Oriented" is one of the most important concept in IT industry. Almost every major programming language (including JavaScript) supports object-oriented methodology. They have "Type" and "Class" to separate from "Instance" which is the _object_ produced from the class.

By separating instances from classes, you can keep your program is safe, functional and maintainable in long term. You can fix a class, modify a instance, extend both in any way you want.

Those iconic features that they have are not seen in CSS since its beginning. Even after [Nicole Sullivan](https://twitter.com/stubbornella) introduced the [OOCSS](http://www.slideshare.net/stubbornella/object-oriented-css) in 2008.

Until now.

So, let's get started!

## 1. Parent class names should begin with capital letters

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

It looks odd. But also it's a quite popular expression in other languages. Like JavaScript:

```js
var button = new Button();
```

By doing this, you can distinguish a parent class from instances.

## 2. Double hyphens to instantiate

```html
<button class="Button button--upload" type="button">Upload</button>

<a href="#" class="Button button--cancel">Cancel</a>
```

Let's give a name of instance.

## 3. Add instance properties

```sass
.button--upload
  color: white
  background-color: $green
  border 0

.button--cancel
  color: white
  background-color: $red
  border 0
```

Thanks to class did heavy lifting stuff, instance properties are small and clean.

## 4. Instances can have own child elements

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

  & &__icon
    @include icon(upload)

  & &__counter
    position: absolute
    top: -0.75rem
    right: -0.75rem
    padding: 0.1em
    min-width: 1em
    height: 1em
    border-radius: 0.5em
    overflow: hidden
    font-size: 0.8em
    line-height: 1
    background-color: $red
```

The `& &__` isn't a typo. It creates safety scope.

Note that these elements are belong to instance not a parent class. Which means they would not inherited.

## 5. The difference from [BEM](https://en.bem.info/)

- The `--` and `__` separators are same meaning.
- We don't use `.block__element__element` format even if we have a grandchild element.
- Giving a recognizable class name to offspring is enough to organize.
- The format will be `.type--identifier__element`. So maybe _TIE?_

## 6. The difference from OOCSS

OOCSS doesn't support key concepts which object oriented programming has.

- Encapsulation
- Inheritance
- Messaging

The name of "OO" is _[metaphor](https://github.com/stubbornella/oocss/wiki/FAQ)_.

## 7. A case of parent classes have child elements

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

These elements will be inherited in your markup.

### 7.1 Parent class properties

```sass
.Popup

  & &__window
    width: 300px
    position: fixed
    top: 33%
    left: 50%
    margin-left: -150px
    border-radius: 8px
    background-color: white

  & &__message
    padding: 1rem

  & &__action
    padding: 0.5rem
    border-top: 1px solid $gray
    text-align: center
```

### 7.2 Instantiate

```html
<div class="Popup popup--confirm">
  <div class="Popup__window">
    <div class="Popup__message">
      <p class="popup--confirm__message">Send a message for you.</p>
    </div>
    <div class="Popup__action">
      <button class="Button button--close-popup" type="button">Close</button>
    </div>
  </div>
</div >
```

### 7.3 Add instance properties

```sass
.popup--confirm

  & &__message
    text-align: center
```

The same as the `.Button` so far.

## 8. How to override parent class's child elements

### 8.1 Wrong way

```html
<div class="Popup popup--confirm">
  <div class="Popup__window">
    <div class="Popup__message">
      <p class="popup--confirm__message">Send a message for you.</p>
    </div>
    <div class="Popup__action">
      <!-- This case, no buttons. -->
    </div>
  </div>
</div >
```

```sass
.popup--confirm

  .Popup__action
    display: none
```

The code above is manipulating parent class's child element from a instance. It could be trouble when the inside of parent class has been changed. You would't want that.

### 8.2 Right way

Use parameters as a bridge.

```html
<div class="Popup popup--confirm param--auto-close"><!-- Added parameters here -->
  <div class="Popup__window">
    <div class="Popup__message">
      <p class="popup--confirm__message">Send a message for you.</p>
    </div>
    <div class="Popup__action">
      <!-- This case, no buttons. -->
    </div>
  </div>
</div >
```

```sass
.Popup

  &.param--auto-close

    .Popup__action
      display: none
```

Code like this, the parent class is handling own child element. Instances don't need to know anything about inside of the parent class.

That's it! This is how _True_ Object Oriented CSS works.

Therefore, finally CSS has checked the wish list.

- Encapsulation ✔
- Inheritance ✔
- Messaging ✔

## 9. Thanks

Thank you for reading this to the end.

If you have any question, we can discuss in [here](https://github.com/BYODKM/Objective.css/issues).

Hope you like it as much as we do.

## 10. License

Public Domain
