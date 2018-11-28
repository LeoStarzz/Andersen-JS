const fs = require('fs');
const stdin = process.openStdin();
var stream = fs.createWriteStream('./tmp.txt');

stdin.on('data', (data) => {
	if (data.toString().trim() === 'exit') {
		fs.unlink('./tmp.txt');
		process.exit();
	} else {
		stream.write(data.toString().trim() + '\n');
	}
});


