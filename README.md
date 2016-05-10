# Lightpad MK2

WORK IN PROGRESS

A utility for manipulating the LED lights on Novation's Launchpad MK2.

Built on top of the [midi](https://www.npmjs.com/package/midi) module. Thanks to Justin Latimer, et al.

## Usage

### Getting started

Install and require.

```bash
$ npm install lightpad-mk2
```

In your file:

```javascript
var pad = require('lightpad-mk2')
```

### Simple on/off

To turn on and off the LED for one of the buttons, use the `on` and `off`
methods with x and y coordinates and an optional color. Numbering starts in the
botton right corner.

```javascript
pad.on(1, 3, 60)
// turns on the button in the first column, three from the bottom
pad.on(1, 3)
// does the exact same thing; color defaults to 60 (red) when not designated
pad.off(1, 3)
// turns off the same button
```

License: MIT
&copy; 2016 Rod Machen
