const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');//easy utility for directives paths
const http = require('http'); //allows to create http server
const app = express();

const api = require('./server/routes/api');

//Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//serves static files (images, css, js) stored in 'dist' folder
app.use(express.static(path.join(__dirname, 'dist')));

//set api routes
app.use('/api', api);

//Return other routes to angular index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist.index.html'));
});

//set port
const port = process.env.PORT || '3000';
app.set('port', port);

//create the http server
const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
