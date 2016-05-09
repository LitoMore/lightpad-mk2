# Lightpad MK2

A utility for manipulating the LED lights on Novation's Launchpad MK2.

## Usage

### Get started

Install, require, and instantiate.

``bash
$ npm install lightpad-mk2
``

``javascript
var pad = require('lightpad-mk2')
``

### Simple on/off

To turn on and off the LED for one of the buttons, use the `on` and `off`
methods with x and y coordinates and an optional color. Numbering starts in the
botton right corner.

``javascript
pad.on(1, 3, 60)
// turns on the button in the first column, three from the bottom
pad.on(1, 3)
// does the exact same thing; color defaults to 60 (red) when not designated
pad.off(1, 3)
// turn off the same button
```

