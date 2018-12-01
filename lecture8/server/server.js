const http = require('http');
const hostname = 'localhost';
const port = 8080;
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  console.log(req.url);
  const basePath = "../../lecture7/src";
  let fullPath = path.join(basePath, req.url);
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

  if (fullPath === path.join(basePath, "/")) {
    fullPath = path.join(fullPath, "index.html");
  }
  if (fullPath === path.join(basePath, "/lecture7/dist/bundle.js")) {
    fullPath = "../../lecture7/dist/bundle.js";
  }

  fs.readFile(fullPath, function (error, content) {
    if (error) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      console.error(error);
      res.end();
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(port, hostname, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Server running at http://${hostname}:${port}/`);
  }
});
