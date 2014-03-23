var forever = require('forever-monitor');
var logger = require('./logger.js');

var opts = {
	'silent': false,
	'max' : 1,
	'watch': true,              // Value indicating if we should watch files.
    'watchIgnoreDotFiles': null, // Dot files we should read to ignore ('.foreverignore', etc).
    'watchIgnorePatterns': null, // Ignore patterns to use when watching files.
    'watchDirectory': process.cwd()      // Top-level directory to watch from.
};

var child = new (forever.Monitor)('app.js', opts);

child.on('exit', function (data) {
	logger.err('app quit', data);
});

child.start();