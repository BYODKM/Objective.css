# Objective.css Style Guide Generator

## How to Generate

```
$ git clone https://github.com/BYODKM/Objective.css.git
$ cd Objective.css/docs
$ npm i
$ gulp
```

## How to Edit

You can edit existing class or make a new one. See the [./lib/](./lib/) folder.

## How to Add

It's easy to add your new parent class. Edit [./index.jade](./index.jade).

```jade
include main

doctype
html(lang="ja")
  +head
    :stylus
      @import "kouto-swiss"
      @import "./lib/Button"
      @import "./lib/Table"
  +body
    +test("Button")
      include ./lib/Button/code
    +test("Table")
      include ./lib/Table/code
```

## Acknowledgements

This application makes use of the following third party libraries:

- [PrismJS](https://github.com/PrismJS/prism)

## License

MIT
