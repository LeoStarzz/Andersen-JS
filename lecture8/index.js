const fs = require('fs');
const stdin = process.openStdin();
const stream = fs.createWriteStream('./tmp.txt');

stdin.on('data', (data) => {
  const text = data.toString().trim();
  if (text === 'exit') {
    fs.unlink('./tmp.txt');
    process.exit();
  } else {
    stream.write(text + '\n');
  }
});
