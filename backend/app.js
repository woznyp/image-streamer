const express = require('express'),
cors = require('cors'),
app = express(),
fs = require('fs'),
https = require('https'),
ws = require('ws');
httpsServer = https.createServer({
  key: fs.readFileSync('certificates/key.pem'),
  cert: fs.readFileSync('certificates/cert.pem')
}, app).listen(9998),
wssServer = https.createServer({
  key: fs.readFileSync('certificates/key.pem'),
  cert: fs.readFileSync('certificates/cert.pem')
}).listen(9999);

app.get('/videos/*', (req, res) => {
  const src = fs.createReadStream(`./static/${req.url}`);
  // src.on('data', (data) => {
  //   res.write(Buffer.concat([data]))
  // });
  //
  // src.on('end', () => {
  //   res.end();
  //   console.log('end');
  // });

  src.pipe(res);
});

app.use(express.static('static'));
app.use(cors());

const wss = new ws.Server({server: wssServer});

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    //console.log('received: %s', message);
  });

  ws.send('something');
});