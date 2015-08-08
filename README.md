# True Object Oriented CSS Code Guide

> Unlike OOCSS, this is a real thing.

## 0. What does "Object Oriented" mean?

"Object Oriented" is one of most important concept in IT industry. Almost every major programming language including JavaScript supports object-oriented methodology. They have "Type" and "Class" to separate from "Instance" which is the _object_ produced from a class.

By separating instances from classes, you can keep your programs safe and functional in long term. You can fix a class, modify a instance, extends both in any way you want.

These iconic features that they have are not seen in CSS. Even after [Nicole Sullivan](https://twitter.com/stubbornella) introduced the [OOCSS](http://www.slideshare.net/stubbornella/object-oriented-css) in 2008.

Until today.

So, let's get started!

## 1. Parent class name should begin with capital letters

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

It's looks odd. But also it's a quite popular way in other languages. Like JavaScript:

```js
var button = new Button();
```

By doing this, you can distinguish a parent class from instances.

## 2. Double hyphens to instantiate

```html
<button class="Button button--upload" type="button">Upload</button>

<a href="#" class="Button button--cancel">Cancel</a>
```

Give a name of instance.

## 3. Add instance properties

```sass
.button--upload
  color: white
  background-color: $green

.button--cancel
  color: white
  background-color: $red
```

You can keep code clean and the scope small.

## 4. Instances can have own child elements

```html
<button class="Button button--upload" type="button">
  <span class="button--upload__icon"></span>
  <span class="button--upload__counter">1</span>
  Upload
</button>
```

You should keep in mind that these elements are belong to instance not a parent. Which means they are not inherited.

```sass
.button--upload
  color: white
  background-color: $green

  & &__icon
    @include icon(upload)

  & &__counter
    position: absolute
    top: -0.75em
    right: -0.75em
    min-width: 1em
    height: 1em
    border-radius: 0.5em
    overflow: hidden
    font-size: 0.8em
    line-height: 1
    background-color: $red
```

`& &__` isn't a typo. It creates safety scope.

## 5. The difference from [BEM](https://en.bem.info/)

- The separators are same meaning.
- We don't use `.block__element__element` format even if we have a grandchild element.
- Giving a recognizable class name to offspring is enough to organize.
- The format will be `.type--identifier__element`. So maybe _TIE?_

## 6. The difference from OOCSS

OOCSS doesn't support key concepts of object oriented programming.

- Encapsulation
- Inheritance
- Messaging

The name is [metaphor](https://github.com/stubbornella/oocss/wiki/FAQ).

## 7. A case of parents class have child elements

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

These elements are inherited, or could be inherited by the type.

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
    padding: 1em

  & &__action
    padding: 1em
    border-top: 1px solid $gray
    text-align: center
```

### 7.2 Instantiate

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
      <p class="popup--confirm__message">Send a E-mail message for you.</p>
    </div>
    <div class="Popup__action">
      <!-- This case, no buttons. -->
    </div>
  </div>
</div >
```

```sass
.popup--confirm

  .Popup__action // Manipulated parent class's child element from a instance
    display: none
```

This could be trouble when the inside of parent class has been changed.

### 8.2 Right way

Use parameters as a bridge.

```html
<div class="Popup popup--confirm param--auto-close"><!-- Added parameters here -->
  <div class="Popup__window">
    <div class="Popup__message">
      <p class="popup--confirm__message">Send a E-mail message for you.</p>
    </div>
    <div class="Popup__action">
      <!-- This case, no buttons. -->
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

Code like this; you don't need to know anything about inside of parent class.

So this is how Object Oriented CSS works.

- Encapsulation
- Inheritance
- Messaging

Also, this is a very good practice for HTML components.

## 9. Thanks

That's it, folks.

Thank you for reading this to the end.

Hope you like it as much as we do.

## 10. License

Public Domain
