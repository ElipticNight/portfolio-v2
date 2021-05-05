const express = require('express');
const app = express();
const server = require('http').createServer(app);

const Routes = require('./router');
app.use(Routes);

server.listen(3000, () => console.log('listening on port 3000'));