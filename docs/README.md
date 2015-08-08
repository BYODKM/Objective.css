# Objecive.css Style Guide Generator

## How to See

```
$ git clone https://github.com/BYODKM/Objective.css.git
$ cd Objective.css/docs
$ npm i
$ gulp
```

## How to Edit

See the [lib](./lib/) folder. You can edit whatever you want.

## How to Add

Edit [./index.jade](./index.jade). How simple is that!

```jade
include lib

doctype
html(lang="ja")
  +head
    style
      :stylus
        @import "./lib"
        @import "./lib/Button"
        @import "./lib/Table"
  +body
    +test("Button")
      include ./lib/Button/test
    +test("Table")
      include ./lib/Table/test
```
