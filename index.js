var midi = require('midi');
 
var input = new midi.input();
var output = new midi.output();

input.openPort(0);
output.openPort(0);

exports.on = function(x, y, color) {
	color = color || 60;
	var key = '' + y + x;
	output.sendMessage([144, key, color]);
}

exports.off = function(x, y) {
	var key = '' + y + x;
	output.sendMessage([144, key, 0]);
}
