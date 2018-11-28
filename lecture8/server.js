const http = require('http');
const hostname = 'localhost';
const port = 8000;
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const basePath = "../lecture7/src/";
  let fullPath = basePath + req.url;
  let contentType = 'text/html';
  const extension = path.extname(fullPath);

  switch (extension) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
  }

  if (fullPath === basePath + "/") {
    fullPath = fullPath + "index.html";
  }
  if (fullPath === basePath + "/lecture7/dist/bundle.js") {
    fullPath = "../lecture7/dist/bundle.js";
  }

  fs.readFile(fullPath, function (error, content) {
    if (error) {
      console.log(error);
      res.end();
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(port, hostname, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server running at http://${hostname}:${port}/`);
  }
});
