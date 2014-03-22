var terminal = require('node-terminal');

var logger = {
	log: function(desc, tgt){
		this.writePre('white');
		this.writeDesc(desc, 'yellow');
		this.writeBody(tgt, 'green');
		this.writePost('white');
	},
	warn: function(desc, tgt){
		this.writePre('white');
		this.writeDesc(desc, 'orange');
		this.writeBody(tgt, 'white');
		this.writePost('white');
	},
	err: function(desc, tgt){
		this.writePre('yellow');
		this.writeDesc(desc, 'red');
		this.writeBody(tgt, 'white');
		this.writePost('yellow');
	},
	writePre: function(color){
		var c = (color == null) ? 'white' : color;
		terminal.color('white').write('\n');
		terminal.color(c).write('==========================================\n');
	},
	writePost: function(color){
		var c = (color == null) ? 'white' : color;
		terminal.color('white').write('\n');
		terminal.color(c).write('==========================================\n');
		terminal.color('white').write('\n');
	},
	writeDesc: function(desc, color){
		var c = (color == null) ? 'white' : color;
		terminal.color(c).write(desc);
		terminal.color(c).write('\n');
	},
	writeBody: function(body, color){
		var c = (color == null) ? 'white' : color;
		if(body == null) return;
		terminal.color(c).write(JSON.stringify(body));
		terminal.color(c).write('\n');
	}
};

module.exports = logger;